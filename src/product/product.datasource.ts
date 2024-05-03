import { Model, PaginateModel, Types } from 'mongoose';
import { Product, ProductDocument } from './product.model';
import { ProductRepository } from './product.repository';
import { InjectModel } from '@nestjs/mongoose';

export class ProductDatasource implements ProductRepository {
  constructor(
    @InjectModel(Product.name)
    private productModel: Model<ProductDocument> &
      PaginateModel<ProductDocument>,
  ) {}

  async create({
    name,
    image,
    price,
    whatsapp,
    category,
  }: {
    name: string;
    image: string;
    price: number;
    whatsapp: string;
    category: string;
  }): Promise<void> {
    await this.productModel.create({
      name,
      image,
      price,
      whatsapp,
      category,
    });
  }

  async getList({ page,limit = 10,category}:{page: number,limit:number,category:string}): Promise<any> {
    const query = category ? { category } : {}; 
  
    return await this.productModel.paginate(query, { page, limit });
  }

  async find(id: string): Promise<any> {
    return await this.productModel.findOne({
      _id: new Types.ObjectId(id),
    });
  }

  async update(
    id: string,
    {
      name,
      image,
      price,
      whatsapp,
      category,
    }: {
      name: string;
      image: string;
      price: number;
      whatsapp: string;
      category: string;
    },
  ): Promise<void> {
    await this.productModel.updateOne(
      {
        _id: new Types.ObjectId(id),
      },
      {
        $set: {
          name,
          image,
          price,
          whatsapp,
          category,
        },
      },
    );
  }

  async delete(id: string): Promise<void> {
    await this.productModel.deleteOne({
      _id: new Types.ObjectId(id),
    });
  }
}
