import Image from "next/image";
import "./product.css"
// import Carousel from "../carousel/carousel";


export default function Product({ product }) {
   
    return (
        <div className="product">
                {product.new ? <h3 className="new">New</h3> : null}
                <h2>{product.name}</h2>
            <Image src={product.image} alt={product.name} width={1024} height={1024} />
            <div>
                <h3>{product.description}</h3>
                <p>{product.comment}</p>
                <button className="custom-btn btn-8"><span>Buy on Amazon</span></button>
            </div>
        </div>
    )
}