import { cart, products } from "../reducers";

describe('products', () => {
    it('returns the initial state', () => {
        expect(products(undefined, {})).toEqual([]);
    });

    it('receives products', () => {
        const productList = [
            {id: 1, name: "Product 1", price: 100, images: ""}
        ];

        expect(
            products([], {type: 'REPLACE_PRODUCTS', products: productList})
        ).toEqual(productList)
    });
});

describe('cart', () => {
    it('returns the initial state', () => {
        expect(cart(undefined, {})).toEqual([]);
    });

    it('add a product to the cart', () => {
        const productList = [
            {id: 1, name: "Product 1", price: 100, images: ""}
        ];

        expect(
            cart([], {type: 'ADD_TO_CART', product: productList})
        ).toEqual(productList)
    });

    it('delect a product from the cart', () => {
        const productList = [
            {id: 1, name: "Product 1", price: 100, images: ""}
        ];

        expect(
            cart([{id: 1, name: "Product 1", price: 100, images: ""}], {type: 'REMOVE_FROM_CART', product: {id: 1, name: "Product 1", price: 100, images: ""}})
        ).toEqual([])
    });
});