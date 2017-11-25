// @flow

import { type TokenStoreStrategy } from "../index";

export default class MemoryStrategy implements TokenStoreStrategy {
	accessTokenByShopName: Map<string, string> = new Map();
	shopNameByUserId: Map<string, string> = new Map();

	getByUserId(userId: string): Promise<string | void> {
		const shopName = this.shopNameByUserId.get(userId);
		return shopName ? this.getByShopName(shopName) : Promise.resolve();
	}

	getByShopName(shopName: string): Promise<string | void> {
		const accessToken = shopName
			? this.accessTokenByShopName.get(shopName)
			: undefined;
		return Promise.resolve(accessToken);
	}

	store(
		userId: string,
		shopName: string,
		accessToken: string
	): Promise<void> {
		this.shopNameByUserId.set(userId, shopName);
		this.accessTokenByShopName.set(shopName, accessToken);
		return Promise.resolve();
	}
}
