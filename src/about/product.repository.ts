export interface ProductRepository {
  find(id: string): Promise<any | null>;

  create({
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
  }): Promise<void>;

  update(
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
  ): Promise<void>;

  getList(page: number): Promise<any>;

  delete(id: string): Promise<void>;
}
