import { Card, CardContent } from "@/components/ui/card";

export function Product_Item() {
  return (
    <Card className="flex flex-col items-center justify-start gap-2 border-0 shadow-none w-fit h-52">
      <img
        className="object-cover object-center w-40 h-40"
        src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
        loading="lazy"
        alt="[Product]"
        aria-label="[Product]"
        title="[Product]"
      />
      <CardContent className="flex justify-between text-sm">
        <p></p>
        <span></span>
      </CardContent>
    </Card>
  );
}

export default Product_Item;
