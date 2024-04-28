import { ProductService } from './product.service';
declare class createProductDto {
    name: string;
    image: string;
    price: number;
    stock: number;
    category: string;
}
declare class updateProductDto {
    name: string;
    image: string;
    price: number;
    stock: number;
    category: string;
}
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    getAllProduct(page: number): Promise<any>;
    createProduct({ name, image, price, stock, category }: createProductDto): Promise<{
        message: string;
    }>;
    getProductById(id: string): Promise<any>;
    update(id: string, { name, image, price, stock, category }: updateProductDto): Promise<{
        message: string;
    }>;
    delete(id: string): Promise<{
        message: string;
    }>;
}
export {};
