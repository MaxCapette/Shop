import "./product.css"
import { Product } from "@/@types/ProductType";
import Labels from "../labels/labels";
import Carousel from "../carousel/Carousel";



export default function Product({ product }: { product: Product }) {
    const images = product.images && Array.isArray(product.images) 
                   ? product.images.map(url => ({ url })) 
                   : [];
    
    
    return (
        <div className="product">
                <Labels { ...product }/>
                <h2>{product.name}</h2>
            {/* <Image src={product.images[0]} alt={product.name} width={1024} height={1024} /> */}
            {/* <Slider images={images} /> */}
            <Carousel images={images}/>
            <div className="productDiv">
                <h3>{product.description}</h3>
                <p>{product.comment}</p>
                <button className="custom-btn btn-8"><span>Buy on Amazon</span></button>
            </div>
        </div>
    )
}