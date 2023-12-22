import Product from "@/components/layout/productUnique/product";
import { products } from "@/lib/stock";
import Image from "next/image";
import Link from "next/link";
import "./products.css";

export default function Products() {
  return (
    <main className="flex flex-col items-center justify-between pt-40">
      <h2>Products</h2>
      <div className="productList">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <Link
              className="link"
              key={product.id}
              href={`/products/${product.id}`}
            >
              <div className="labels">
                {product.new ? (
                  <p className=" label new">New</p>
                ) : (
                  <p className="label"></p>
                )}
                {product.popular ? (
                  <p className="label hot">Hot</p>
                ) : (
                  <p className="label"></p>
                )}
              </div>
              <h3>{product.name}</h3>
              <Image
                className="productPhoto"
                src={product.image1}
                alt={product.name}
                width={1024}
                height={1024}
              />
              <h4>{product.description}</h4>
              <p>{product.price}€</p>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
