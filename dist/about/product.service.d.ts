import { ProductRepository } from './product.repository';
export declare class ProductService {
    private productRepository;
    constructor(productRepository: ProductRepository);
    getList(page: number): Promise<any>;
    create({ name, image, price, stock, category, }: {
        name: string;
        image: string;
        price: number;
        stock: number;
        category: string;
    }): Promise<void>;
    findById(id: string): Promise<any>;
    update(id: string, { name, image, price, stock, category, }: {
        name: string;
        image: string;
        price: number;
        stock: number;
        category: string;
    }): Promise<void>;
    delete(id: string): Promise<void>;
}
