import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { IsNotEmpty } from 'class-validator';

class createProductDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  image: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  stock: number;

  @IsNotEmpty()
  category: string;
}

class updateProductDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  image: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  stock: number;

  @IsNotEmpty()
  category: string;
}

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async getAllProduct(@Query('page') page: number) {
    return this.productService.getList(page);
  }

  @Post()
  async createProduct(
    @Body(ValidationPipe)
    { name, image, price, stock, category }: createProductDto,
  ) {
    try {
      await this.productService.create({ name, image, price, stock, category });
      return {
        message: 'product has been created',
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.FORBIDDEN);
    }
  }

  @Get(':id')
  async getProductById(
    @Param('id')
    id: string,
  ) {
    return this.productService.findById(id);
  }

  @Put(':id')
  async update(
    @Param('id')
    id: string,
    @Body(ValidationPipe)
    { name, image, price, stock, category }: updateProductDto,
  ) {
    try {
      await this.productService.update(id, {
        name,
        image,
        price,
        stock,
        category,
      });
      return {
        message: 'product has been update',
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Delete(':id')
  async delete(
    @Param('id')
    id: string,
  ) {
    try {
      await this.productService.delete(id);
      return {
        message: 'product has been deleted',
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
