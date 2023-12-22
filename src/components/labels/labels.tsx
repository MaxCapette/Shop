import { Product } from "@/@types/ProductType";

export default function Labels(product :  Product ) {
  return (
    <div className="labels flex flex-row">
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
  );
}
