export interface Product {
    id: number;
    name: string;
    description: string;
    comment: string;
    price: string;
    link: string;
    image: string;
}

export interface Products {
    products: Product[];
}

export interface Pictures {
    pictures:[];
}