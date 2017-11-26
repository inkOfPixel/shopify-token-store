# Shopify Token Store

A library to quickly obtain and store shopify access tokens
:closed_lock_with_key:

> :warning: Still under development. Stable release is coming :soon:

```
yarn add shopify-token-store
```

```
npm i shopify-token-store
```

## API

The module exports a class that allows to create access token stores. Store
instances have methods that allows to obtain an access token according to the
[OAuth flow](https://help.shopify.com/api/getting-started/authentication/oauth).

### `new ShopifyTokenStore(options)`

Creates a new `ShopifyTokenStore` instance.

#### `options`

* `apiKey` - **Required** - A string that specifies the API key of your app.
* `sharedSecret` - **Required** - A string that specifies the shared secret of
	your app.
* `redirectUri` - **Required** - A string that specifies the URL where you want
	to redirect the users after they authorize the app.
* `scopes` - Optional - An array of strings or a comma-separated string that
	specifies the list of scopes e.g. `"read_products,write_products"`. Defaults
	to `"read_content"`.
* `storeStrategy` - Optional - A `TokenStoreStrategy` that defines how the token
	will be stored. Defaults to `MemoryStrategy` (:warning: Not suitable for
	production).
* `timeout` - Optional - number

#### Return value

A `ShopifyTokenStore` instance.

#### Exceptions

Throws an `Error` exception if the required options are missing.

#### Example

```javascript
import ShopifyTokenStore from "shopify-token-store";

const shopifyTokenStore = new ShopifyTokenStore({
	sharedSecret: process.env.SHOPIFY_APP_SECRET,
	redirectUri: url.resolve(
		process.env.SHOPIFY_APP_ORIGIN,
		"/shopify/auth/callback"
	),
	apiKey: process.env.SHOPIFY_APP_KEY,
	scopes: ["read_products", "write_products"]
});
```

### `shopifyTokenStore.generateNonce()`

Generates a random nonce.

#### Return value

A `string` representing a nonce.

#### Example

```javascript
const nonce = shopifyToken.generateNonce();

console.log(nonce);
// => 212a8b839860d1aefb258aaffcdbd63f
```

### `shopifyToken.generateAuthorizationUrl(shopName, options)`

Returns the authorization URL where you should redirect the user.

#### `shopName`

A `string` representing the name of the user's shop e.g. `a-store-name`.

#### `options`

* `scopes` - Optional - An `Array<string>` to override the default list of
	scopes.
* `nonce` - Optional - A `string` representing a nonce. If not provided it will
	be generated automatically.

#### Return value

A `string` representing the URL where the user should be redirected.

#### Example

```javascript
const authUrl = shopifyTokenStore.generateAuthorizationUrl(shopName, { nonce });

console.log(authUrl);
// => https://a-store-name.myshopify.com/admin/oauth/authorize?scope=read_content&state=619f7e27dd47cc9twp0ad04e93754k81&redirect_uri=https%3A%2F%2Flocalhost%3A3000%2Fcallback&client_id=b35d23b9b6f2b65f3896c954ra8e2443
```

### `shopifyTokenStore.verifyHMAC(query)`

Verify that a request came from Shopify. It can be used to validate a webhook or
a request to the `redirectUri`.

#### `query`

An `object` representing the request query. It should contain at least the
following keys:

* `code` - A `string` representing the authorization code.
* `hmac` - A `string` representing the request HMAC.
* `shop` - A `string` representing the shop domain e.g.
	`a-store-name.myshopify.com`
* `timestamp` - A `string` representing the timestamp of the request.

#### Return value

A `boolean` that is `true` if the `hmac` is valid.

#### Example

```javascript
if (shopifyTokenStore.verifyHMAC(request.query)) {
	// The request is valid
}
```

### `shopifyTokenStore.getAccessToken(shop, code)`

When our `redirectUri` gets called, the request query string will contain `shop`
and `code` parameters that we can use to obtain the access token.

#### `shop`

A `string` representing the hostname of the shop (e.g.
`a-store-name.myshopify.com`).

#### `code`

A `string` representing the authorization code.

#### Return value

A `Promise` that resolves to a `string` representing the access token.

#### Example

```javascript
const { shop, code } = request.query;
const accessToken = await shopifyTokenStore.getAccessToken(shop, code);
```

### `shopifyTokenStore.store(userId, shopName, accessToken)`

Use this method to store a new access token (the behaviour changes according to
the configured `storeStrategy`).

#### `userId`

A `string` representing the id that uniquely identify the user.

> The user id can be for example a

    [JWT](https://github.com/auth0/node-jsonwebtoken) token stored in the client
	localStorage.

#### `shopName`

A `string` representing the shop name (e.g. `a-shop-name`).

#### `accessToken`

A `string` representing the access token.

#### Return value

A `Promise`.

#### Example

```javascript
await shopifyTokenStore.store(userId, shopName, accessToken);
```

### `shopifyTokenStore.getByUserId(userId)`

Get the access token associated to the user.

#### `userId`

A `string` representing the id that uniquely identify the user.

#### Return value

A `Promise` that resolves to a `string` that represents an access token.

#### Example

```javascript
const accessToken = await shopifyTokenStore.getByUserId(userId);
```

### `shopifyTokenStore.getByShopName(shopName)`

Get the access token associated to a shop name.

#### `shopName`

This is useful when we need to process webhooks.

#### Return value

A `Promise` that resolves to a `string` that represents an access token.

#### Example

```javascript
const accessToken = await shopifyTokenStore.getByShopName(shopName);
```

## Roadmap

* [x] Implement shopify access token offline mode
* [x] Implement basic memory strategy
* [ ] Implement MongoDB strategy
* [ ] Implement
		[API credential rotation](https://help.shopify.com/api/getting-started/authentication/oauth/api-credential-rotation)
* [ ] Implement shopify access token online mode
