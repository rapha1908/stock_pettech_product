import { IProduct } from "../schemas/models/product.interface";

export abstract class ProductRepository{
  abstract getAllStock(limit:number, page:number): Promise<IProduct[]>;
  abstract getStockById(id:string): Promise<IProduct>;
  abstract createStock(product:IProduct): Promise<void>;
  abstract updateStock(id:string, stock:number): Promise<void>;
  abstract deleteStock(id:string): Promise<void>;
}