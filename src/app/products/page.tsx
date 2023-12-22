import Product from "@/components/layout/productUnique/product";
import { products }from "@/lib/stock";
import Image from "next/image";
import Link from "next/link";
import './products.css'

export default function Products() {
    return (
        <main className="flex flex-col items-center justify-between pt-40">
        <h2>Products</h2>
        <div className="productList">
       {products.map((product) => (
                <div className="card" key={product.id}>
            <Link className="link" key={product.id} href={`/products/${product.id}`}>       
            {product.new ? <p className="new">New</p> : null}
                    <h3>{product.name}</h3>
                    <Image src={product.image} alt={product.name} width={1024} height={1024}/>
                    <h4>{product.description}</h4>
                    <p>{product.price}</p>
            </Link>
                </div>
            
         ))}
       </div>
        </main>
    );
    }