/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose-paginate-v2" />
import { Model, PaginateModel } from 'mongoose';
import { ProductDocument } from './product.model';
import { ProductRepository } from './product.repository';
export declare class ProductDatasource implements ProductRepository {
    private productModel;
    constructor(productModel: Model<ProductDocument> & PaginateModel<ProductDocument>);
    create({ name, image, price, stock, category, }: {
        name: string;
        image: string;
        price: number;
        stock: number;
        category: string;
    }): Promise<void>;
    getList(page: number): Promise<any>;
    find(id: string): Promise<any>;
    update(id: string, { name, image, price, stock, category, }: {
        name: string;
        image: string;
        price: number;
        stock: number;
        category: string;
    }): Promise<void>;
    delete(id: string): Promise<void>;
}
