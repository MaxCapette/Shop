import { products }from "@/lib/stock";
import Product from '@/components/product/product';


export default function ProductPage({ params }) {
    console.log(params);
    
    const product = products.find(p => p.id === parseInt(params.id));

    console.log(product);
    if (!product) {
        return <div>Produit non trouvé</div>;
    }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-40">
      <Product product={product}/>
    </main>
  )
}
