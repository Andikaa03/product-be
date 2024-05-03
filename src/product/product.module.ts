import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { MongooseModule } from '@nestjs/mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';
import { Product, ProductModel } from './product.model';
import { ProductDatasource } from './product.datasource';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Product.name,
        useFactory: () => {
          const schema = ProductModel;
          schema.plugin(mongoosePaginate);
          return schema;
        },
      },
    ]),
  ],
  providers: [
    ProductService,
    {
      provide: 'ProductRepository',
      useClass: ProductDatasource,
    },
  ],
  exports: [ProductService],
})
export class ProductModule {}
