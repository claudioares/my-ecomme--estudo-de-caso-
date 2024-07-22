import { IProduct } from "./product";

export interface IShoppingCart {
    product: IProduct;
    quantity: number
}