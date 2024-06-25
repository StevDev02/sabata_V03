import Product_Item from "../Card/Product_Item";

const Products = Array.from({ length: 5 }, (_, index) => (
  <Product_Item key={index} />
));

export function Shooping_Container_Products() {
  return (
    <div className="flex flex-wrap justify-center flex-1 gap-6">
      {Products}
    </div>
  );
}

export default Shooping_Container_Products;
