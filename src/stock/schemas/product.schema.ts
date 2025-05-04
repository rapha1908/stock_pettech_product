import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IProduct } from "./models/product.interface";
import mongoose, { HydratedDocument } from "mongoose";

// Definindo um tipo ProductDocument que representa um documento hidratado de Product
export type ProductDocument = HydratedDocument<Product>;

// Definindo a classe Product como um Schema do Mongoose
@Schema()
export class Product implements IProduct {
  // Definindo a propriedade id como um ObjectId do MongoDB
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  id?: string;

  // Propriedade name do produto
  @Prop()
  name: string;

  // Quantidade do produto em estoque
  @Prop()
  quantity: number;

  // ID relacional do produto (possivelmente para integração com outros sistemas)
  @Prop()
  relationalId: number;
}

// Criando e exportando o schema do Mongoose para a classe Product
export const ProductSchema = SchemaFactory.createForClass(Product);
