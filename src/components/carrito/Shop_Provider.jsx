import { Shop } from "./Shop";
import { FilterProvider } from "./context/filters";

export function ShopProvider() {
  return (
    <>
      <section className="font_poppins w-full h-full grid place-content-center">
        <FilterProvider>
          <Shop />
        </FilterProvider>
      </section>
    </>
  );
}
