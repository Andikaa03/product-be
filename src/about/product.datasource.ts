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
    stock,
    category,
  }: {
    name: string;
    image: string;
    price: number;
    stock: number;
    category: string;
  }): Promise<void> {
    await this.productModel.create({
      name,
      image,
      price,
      stock,
      category,
    });
  }

  async getList(page: number): Promise<any> {
    return await this.productModel.paginate({}, { page, limit: 10 });
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
      stock,
      category,
    }: {
      name: string;
      image: string;
      price: number;
      stock: number;
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
          stock,
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
