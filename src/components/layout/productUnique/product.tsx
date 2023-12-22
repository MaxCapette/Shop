import Image from "next/image";
import "../../product/product"
// import Carousel from "../carousel/carousel";

export default function Product() {
    return (
        <div className="product">
            <Image src='/images/1.png' alt="" width={1024} height={1024}/>
            {/* <Carousel /> */}
            <div>
            <h2>Product Name</h2>
            <h3>Best product in the world</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci accusantium, quisquam fuga et dolore, ullam excepturi minus vero earum nisi doloribus, eos quis architecto. Magni nostrum sint debitis alias expedita.</p>
            <button className="custom-btn btn-8"><span>Buy on Amazon</span></button>
            </div>
        </div>
    )
}