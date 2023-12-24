import Product from "@/components/layout/productUnique/product";
import { products } from "@/lib/stock";
import Image from "next/image";
import Link from "next/link";
import Labels from "../labels/labels";
import "./new4Products.css";

export default function New4Products() {
  const reversedProducts = [...products].reverse();
  return (
    <>
      <h2>New Products</h2>
      <div className="productList">
    
        {reversedProducts.map((product) => (
            product.new && (
          <div className="card" key={product.id}>
            <Link
              className="link"
              key={product.id}
              href={`/products/${product.id}`}
            >
             <Labels { ...product } />
              <h3>{product.name}</h3>
              <Image
                className="productPhoto"
                src={product.images[0]}
                alt={product.name}
                width={1024}
                height={1024}
              />
              <h4>{product.description}</h4>
              <p>{product.price}€</p>
            </Link>
          </div>
        )))}
      </div>
    </>
  );
}
