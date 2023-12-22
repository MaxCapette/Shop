export interface Product {
  id: number;
  name: string;
  description: string;
  comment: string;
  price: string;
  link: string;
  images: string[];
  new: boolean;
  popular: boolean;
}

export interface Products {
  products: Product[];
}
