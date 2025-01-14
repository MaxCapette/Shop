import { products } from "@/lib/stock";
import Image from "next/image";
import Link from "next/link";
import Labels from "@/components/labels/labels";
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
              <Labels {...product} />
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
        ))}
      </div>
    </main>
  );
}
