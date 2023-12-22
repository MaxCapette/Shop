export interface Product {
    id: number;
    name: string;
    description: string;
    comment: string;
    price: string;
    link: string;
    image1: string;
    image2?: string;
    image3?: string;
    new: boolean;
}

export interface Products {
    products: Product[];
}
