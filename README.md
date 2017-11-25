# Shopify Token Store

A library to quickly obtain and store shopify access tokens

> :warning: Still under development. Stable release is coming :soon:

```
yarn add shopify-token-store
```

```
npm i shopify-token-store
```

## Example

Create a new shopify store token instance with your configuration:

```javascript
import ShopifyTokenStore from "shopify-token-store";

const shopifyStoreToken = new ShopifyTokenStore({
	sharedSecret: process.env.SHOPIFY_APP_SECRET,
	redirectUri: url.resolve(
		process.env.SHOPIFY_APP_ORIGIN,
		"/shopify/auth/callback"
	),
	apiKey: process.env.SHOPIFY_APP_KEY,
	scopes: ["read_products", "write_products"]
});
```

This instance can be used both to obtain new access tokens and to store them
according to the specified store strategy.

> :warning: The default `storeStrategy` is a memory strategy that is not meant

    to be used in production.

### Generate authorization url

```javascript
const nonce = shopifyTokenStore.generateNonce();
const authUrl = shopifyTokenStore.generateAuthorizationUrl(shopName, { nonce });
```

### Obtain access token

```javascript
const accessToken: string = await shopifyTokenStore.getAccessToken(
			hostname,
			code
		);
```

## Roadmap

* [x] Implement shopify access token offline mode
* [x] Implement basic memory strategy
* [ ] Implement MongoDB strategy
* [ ] Implement
		[API credential rotation](https://help.shopify.com/api/getting-started/authentication/oauth/api-credential-rotation)
* [ ] Implement shopify access token online mode
