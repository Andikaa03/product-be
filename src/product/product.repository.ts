export interface ProductRepository {
  find(id: string): Promise<any | null>;

  create({
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
  }): Promise<void>;

  update(
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
  ): Promise<void>;

  getList({ page,limit,category}:{page: number,limit:number,category:string}): Promise<any>;

  delete(id: string): Promise<void>;
}
