// @flow

import https from "https";
import request from "request-promise-native";
import crypto from "crypto";
import url from "url";
import MemoryStrategy from "./strategies/MemoryStrategy";

export interface TokenStoreStrategy {
	getByUserId(userId: string): Promise<string | void>;
	getByShopName(shopName: string): Promise<string | void>;
	store(userId: string, shopName: string, accessToken: string): Promise<void>;
}

type ShopifyAuthOptions = $Exact<{
	apiKey: string,
	redirectUri: string,
	scopes?: Array<string> | string,
	sharedSecret: string,
	storeStrategy?: TokenStoreStrategy,
	timeout?: number
}>;

type RequestQuery = {
	code: string,
	hmac: string,
	shop: string,
	timestamp: string,
	[string]: string
};

export default class ShopifyTokenStore {
	apiKey: string;
	redirectUri: string;
	scopes: Array<string> | string;
	sharedSecret: string;
	storeStrategy: TokenStoreStrategy;
	timeout: number;

	static generateNonce() {
		return crypto.randomBytes(16).toString("hex");
	}

	constructor(options: ShopifyAuthOptions) {
		throwIfInvalidOptions(options);
		this.apiKey = options.apiKey;
		this.redirectUri = options.redirectUri;
		this.scopes = options.scopes || "read_content";
		this.sharedSecret = options.sharedSecret;
		this.storeStrategy = options.storeStrategy || new MemoryStrategy();
		this.timeout = options.timeout || 60000;
	}

	generateNonce() {
		return ShopifyTokenStore.generateNonce();
	}

	generateAuthorizationUrl(
		shopName: string,
		options?: { scopes?: Array<string>, nonce?: string }
	): string {
		const urlOptions = options || {};
		let { nonce, scopes } = urlOptions;
		scopes = scopes || this.scopes;
		nonce = nonce || ShopifyTokenStore.generateNonce();

		const query = {
			scope: Array.isArray(scopes) ? scopes.join(",") : scopes,
			state: nonce,
			redirect_uri: this.redirectUri,
			client_id: this.apiKey
		};

		return url.format({
			pathname: "/admin/oauth/authorize",
			hostname: `${shopName}.myshopify.com`,
			protocol: "https:",
			query
		});
	}

	verifyHMAC(query: RequestQuery): boolean {
		const { hmac, signature, ...filteredQuery } = query;

		const pairs = Object.keys(filteredQuery)
			.map(key => {
				const value = Array.isArray(query[key])
					? `["${query[key].join('", "')}"]`
					: String(query[key]);
				return `${encodeKey(key)}=${encodeValue(value)}`;
			})
			.sort();

		const digest = crypto
			.createHmac("sha256", this.sharedSecret)
			.update(pairs.join("&"))
			.digest("hex");

		return digest === query.hmac;
	}

	async getAccessToken(hostname: string, code: string): Promise<string> {
		console.log("\n\ngetAccessToken..", hostname, code, this.apiKey);

		const response = await request({
			body: {
				client_secret: this.sharedSecret,
				client_id: this.apiKey,
				code
			},
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json"
			},
			json: true,
			method: "POST",
			uri: url.resolve(`https://${hostname}`, "/admin/oauth/access_token")
		});

		console.log(JSON.stringify({ ...response }, null, "\t"));

		return response.access_token;
	}

	getByUserId(userId: string): Promise<string | void> {
		return this.storeStrategy.getByUserId(userId);
	}

	getByShopName(shopName: string): Promise<string | void> {
		return this.storeStrategy.getByShopName(shopName);
	}

	store(
		userId: string,
		shopName: string,
		accessToken: string
	): Promise<void> {
		return this.storeStrategy.store(userId, shopName, accessToken);
	}
}

function throwIfInvalidOptions(options: ShopifyAuthOptions) {
	if (typeof options.apiKey !== "string") {
		throw new Error("apiKey is not a string");
	}
	if (typeof options.sharedSecret !== "string") {
		throw new Error("sharedSecret is not a string");
	}
	if (typeof options.redirectUri !== "string") {
		throw new Error("redirectUri is not a string");
	}
}

function encodeValue(input: string): string {
	return input.replace(/[%&]/g, encodeURIComponent);
}

function encodeKey(input: string): string {
	return input.replace(/[%&=]/g, encodeURIComponent);
}
