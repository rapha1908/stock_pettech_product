
import { IProduct } from "src/stock/schemas/models/product.interface";
import { ProductRepository } from "../product.repository";
import { InjectModel } from "@nestjs/mongoose";
import { Product } from "src/stock/schemas/product.schema";
import { Model } from "mongoose";

export class ProductMongooseRepository implements ProductRepository {

  constructor(
    @InjectModel(Product.name)
    private productModel: Model<Product>,
  ){}

  getAllStock(limit: number, page: number): Promise<IProduct[]> {
    const offset = (page - 1) * limit;
    return this.productModel.find().skip(offset).limit(limit).exec();
  }
  getStockById(id: string): Promise<IProduct> {
    return this.productModel.findById(id).exec();
  }
  async createStock(product: IProduct): Promise<void> {
    const createStock = new this.productModel(product);
    await createStock.save();
  }
  async updateStock(id: string, stock: number): Promise<void> {
    await this.productModel.updateOne({_id: id}, {quantity:stock}).exec();
  }
  async deleteStock(id: string): Promise<void> {
    await this.productModel.deleteOne({_id: id}).exec();
  }
}