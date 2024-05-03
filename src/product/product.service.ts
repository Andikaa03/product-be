import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(
    @Inject('ProductRepository')
    private productRepository: ProductRepository,
  ) {}

  async getList({ page,limit,category}:{page: number,limit:number,category:string}) {
    return await this.productRepository.getList({page,limit,category});
  }

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
  }) {
    return this.productRepository.create({
      name,
      image,
      price,
      whatsapp,
      category,
    });
  }

  async findById(id: string) {
    const productId = await this.productRepository.find(id);

    if (!productId) {
      throw new NotFoundException('about is not empty');
    }

    return productId;
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
  ) {
    if (!(await this.productRepository.find(id))) {
      throw new Error('todo not found');
    }

    return this.productRepository.update(id, {
      name,
      image,
      price,
      whatsapp,
      category,
    });
  }

  async delete(id: string) {
    if (!(await this.productRepository.find(id))) {
      throw new Error('todo not found');
    }
    return this.productRepository.delete(id);
  }
}
