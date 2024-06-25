import { ScrollArea } from "@/components/ui/scroll-area";
import Shooping_Product_Item from "../Card/Shooping_Product_Item";

const Shooping_Cart_Products = Array.from({ length: 100 }, (_, index) => (
  <Shooping_Product_Item key={index} />
));

export function Shooping_Container_Products() {
  return (
    <ScrollArea className="absolute flex flex-col w-full p-1 h-[380px] flex-nowrap">
      {Shooping_Cart_Products}
    </ScrollArea>
  );
}

export default Shooping_Container_Products;
