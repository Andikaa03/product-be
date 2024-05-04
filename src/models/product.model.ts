import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'products', timestamps: true })
export class Product {
  @Prop({ type: String })
  name: string;

  @Prop({ type: String })
  image: string;

  @Prop({ type: Number })
  price: number;

  @Prop({ type: String })
  whatsapp: string;

  @Prop({ type: String })
  category: string;
}

export type ProductDocument = Product & Document;

export const ProductModel = SchemaFactory.createForClass(Product);
