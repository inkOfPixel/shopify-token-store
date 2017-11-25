import ShopifyTokenStore from "./index";

describe("Test ShopifyTokenStore", () => {
	test("generateNonce() returns a string", () => {
		expect(typeof ShopifyTokenStore.generateNonce()).toBe("string");
	});
});
