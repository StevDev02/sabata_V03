import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
// Components UI
import { Button } from "@/components/ui/button";
// Styles
import "./Nav.module.css";
// Imagen Optimizada
import { ImageComponent } from "@/components/custom/Image/ImageComponent";


export function Nav_Home() {
  return (
    <NavigationMenu className="px-4 py-2">
      <NavigationMenuList className="z-50 flex items-center justify-between gap-4">
        <NavigationMenuItem>
          <NavigationMenuContent>
            <Button className="bg-white" variant="with_icon">
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 3C0 2.58579 0.335787 2.25 0.75 2.25H3.408C3.71468 2.25 3.99046 2.43671 4.10436 2.72146L4.61578 4H21.523C22.2304 4 22.7142 4.71453 22.4514 5.37139L19.5029 12.7428C19.1992 13.5021 18.4637 14 17.6459 14H7.68142L6.32692 16.25H19.25C19.6642 16.25 20 16.5858 20 17C20 17.4142 19.6642 17.75 19.25 17.75H5C4.7296 17.75 4.48013 17.6044 4.34708 17.369C4.21403 17.1336 4.21799 16.8448 4.35745 16.6132L6.57309 12.9327L3 4H3.00023L2.90023 3.75H0.75C0.335786 3.75 0 3.41421 0 3ZM8.01578 12.5H17.6459C17.8504 12.5 18.0342 12.3755 18.1102 12.1857L20.7845 5.5H5.21578L8.01578 12.5Z"
                  fill="#000"
                />
                <path
                  d="M7 20.75C7 21.5784 6.32843 22.25 5.5 22.25C4.67157 22.25 4 21.5784 4 20.75C4 19.9216 4.67157 19.25 5.5 19.25C6.32843 19.25 7 19.9216 7 20.75Z"
                  fill="#000"
                />
                <path
                  d="M18.5 22.25C19.3284 22.25 20 21.5784 20 20.75C20 19.9216 19.3284 19.25 18.5 19.25C17.6716 19.25 17 19.9216 17 20.75C17 21.5784 17.6716 22.25 18.5 22.25Z"
                  fill="#000"
                />
              </svg>
              Menu
            </Button>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-font_Poppins">Productos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" flex cursor-auto items-center relative justify-start pb-8 pt-20 pr-28 w-[910px] flex-wrap">
              <ListItem
                className="-ml-10 bg-transparent"
                href="#"
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center w-[220px] h-[123px] ">
                    <ImageComponent src="" width="200" height="160" alt="tacones" />
                  </div>
                  <h2 className="font-medium text-md">Modelo S</h2>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="#"
                      className="link_visit_and_order_line text-sm  text-[#696969] hover:textbl "
                    >
                      Visitar
                    </a>
                    <a
                      href="#"
                      className="text-sm link_visit_and_order_line  text-[#696969] hover:textbl "
                    >
                      Ordenar
                    </a>
                  </div>
                </div>
              </ListItem>
              <ListItem className="-ml-10 bg-transparent" href="/docs">
                <div className="flex flex-col items-center justify-center">
                  <div className=" w-[220px] h-[123px] ">
                    <img
                      className="w-full box_img_menu_items_navegation"
                      src="/img/Intro/tacones_nav_intro.png"
                      alt=""
                    />
                  </div>
                  <h2 className="font-medium text-md ">Modelo X</h2>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="#"
                      className=" link_visit_and_order_line text-sm  text-[#696969] hover:textbl "
                    >
                      Visitar
                    </a>
                    <a
                      href="#"
                      className="text-sm link_visit_and_order_line  text-[#696969] hover:textbl "
                    >
                      Ordenar
                    </a>
                  </div>
                </div>
              </ListItem>
              <ListItem
                className="-ml-10 bg-transparent"
                href="/docs/installation"
              >
                <div className="flex flex-col items-center justify-center">
                  <div className=" w-[220px] h-[123px] ">
                    <img
                      className="w-full box_img_menu_items_navegation"
                      src="/img/Intro/tacones_nav_intro.png"
                      alt=""
                    />
                  </div>
                  <h2 className="font-medium text-md">Modelo L</h2>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="#"
                      className=" link_visit_and_order_line text-sm  text-[#696969] hover:textbl "
                    >
                      Visitar
                    </a>
                    <a
                      href="#"
                      className="text-sm link_visit_and_order_line  text-[#696969] hover:textbl "
                    >
                      Ordenar
                    </a>
                  </div>
                </div>
              </ListItem>
              <ListItem
                className="-ml-10 bg-transparent"
                href="/docs/primitives/typography"
              >
                <div className="flex flex-col items-center justify-center">
                  <div className=" w-[220px] h-[123px] ">
                    <img
                      className="w-full box_img_menu_items_navegation"
                      src="/img/Intro/tacones_nav_intro.png"
                      alt=""
                    />
                  </div>
                  <h2 className="font-medium text-md">Modelo M</h2>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="#"
                      className=" link_visit_and_order_line text-sm  text-[#696969] hover:textbl "
                    >
                      Visitar
                    </a>
                    <a
                      href="#"
                      className="text-sm link_visit_and_order_line  text-[#696969] hover:textbl "
                    >
                      Ordenar
                    </a>
                  </div>
                </div>
              </ListItem>
              <ListItem
                className="-ml-10 bg-transparent"
                href="/docs/primitives/typography"
              >
                <div className="flex flex-col items-center justify-center">
                  <div className=" w-[220px] h-[123px] ">
                    <img
                      className="w-full box_img_menu_items_navegation"
                      src="/img/Intro/tacones_nav_intro.png"
                      alt=""
                    />
                  </div>
                  <h2 className="font-medium text-md">Modelo SM</h2>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="#"
                      className=" link_visit_and_order_line text-sm  text-[#696969] hover:textbl "
                    >
                      Visitar
                    </a>
                    <a
                      href="#"
                      className="text-sm link_visit_and_order_line  text-[#696969] hover:textbl "
                    >
                      Ordenar
                    </a>
                  </div>
                </div>
              </ListItem>
              <ListItem
                className="-ml-10 bg-transparent"
                href="/docs/primitives/typography"
              >
                <div className="flex flex-col items-center justify-center">
                  <div className=" w-[220px] h-[123px] ">
                    <img
                      className="w-full box_img_menu_items_navegation"
                      src="/img/Intro/tacones_nav_intro.png"
                      alt=""
                    />
                  </div>
                  <h2 className="font-medium text-md">Modelo XL</h2>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="#"
                      className=" link_visit_and_order_line text-sm  text-[#696969] hover:textbl "
                    >
                      Visitar
                    </a>
                    <a
                      href="#"
                      className="text-sm link_visit_and_order_line  text-[#696969] hover:textbl "
                    >
                      Ordenar
                    </a>
                  </div>
                </div>
              </ListItem>
              <ListItem href="/docs/primitives/typography">
                <ul className=" border-l pl-10 h-[280px] justify-center  flex flex-col gap-5 absolute  top-[50%] -right-[100px] -translate-y-[50%]  -translate-x-[50%] w-[220px] ">
                  <li className="relative text_link_lateral_inline">
                    Mas Vendidos
                  </li>
                  <li className="relative text_link_lateral_inline">
                    Populares{" "}
                  </li>
                  <li className="relative text_link_lateral_inline">
                    Descuentos{" "}
                  </li>
                  <li className="relative text_link_lateral_inline">
                    Productos nuevos
                  </li>
                  <li className="relative text_link_lateral_inline">
                    Recientes
                  </li>
                  <li className="relative text_link_lateral_inline">
                    Favoritos
                  </li>
                </ul>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-font_Poppins">Accesorios</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" flex cursor-auto items-center relative justify-start pb-8 pt-20 pr-28 w-[910px] flex-wrap">
              <ListItem
                className="-ml-10 bg-transparent"
                href="/docs/primitives/typography"
              >
                <div className="flex flex-col items-center justify-center">
                  <div className=" w-[220px] h-[123px] ">
                    <img
                      className="w-full box_img_menu_items_navegation"
                      src="/img/Intro/tacones_nav_intro.png"
                      alt=""
                    />
                  </div>
                  <h2 className="font-medium text-md">Modelo S</h2>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="#"
                      className=" link_visit_and_order_line text-sm  text-[#696969] hover:textbl "
                    >
                      Visitar
                    </a>
                    <a
                      href="#"
                      className="text-sm link_visit_and_order_line  text-[#696969] hover:textbl "
                    >
                      Ordenar
                    </a>
                  </div>
                </div>
              </ListItem>
              <ListItem className="-ml-10 bg-transparent" href="/docs">
                <div className="flex flex-col items-center justify-center">
                  <div className=" w-[220px] h-[123px] ">
                    <img
                      className="w-full box_img_menu_items_navegation"
                      src="/img/Intro/tacones_nav_intro.png"
                      alt=""
                    />
                  </div>
                  <h2 className="font-medium text-md ">Modelo X</h2>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="#"
                      className=" link_visit_and_order_line text-sm  text-[#696969] hover:textbl "
                    >
                      Visitar
                    </a>
                    <a
                      href="#"
                      className="text-sm link_visit_and_order_line  text-[#696969] hover:textbl "
                    >
                      Ordenar
                    </a>
                  </div>
                </div>
              </ListItem>
              <ListItem
                className="-ml-10 bg-transparent"
                href="/docs/installation"
              >
                <div className="flex flex-col items-center justify-center">
                  <div className=" w-[220px] h-[123px] ">
                    <img
                      className="w-full box_img_menu_items_navegation"
                      src="/img/Intro/tacones_nav_intro.png"
                      alt=""
                    />
                  </div>
                  <h2 className="font-medium text-md">Modelo L</h2>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="#"
                      className=" link_visit_and_order_line text-sm  text-[#696969] hover:textbl "
                    >
                      Visitar
                    </a>
                    <a
                      href="#"
                      className="text-sm link_visit_and_order_line  text-[#696969] hover:textbl "
                    >
                      Ordenar
                    </a>
                  </div>
                </div>
              </ListItem>
              <ListItem
                className="-ml-10 bg-transparent"
                href="/docs/primitives/typography"
              >
                <div className="flex flex-col items-center justify-center">
                  <div className=" w-[220px] h-[123px] ">
                    <img
                      className="w-full box_img_menu_items_navegation"
                      src="/img/Intro/tacones_nav_intro.png"
                      alt=""
                    />
                  </div>
                  <h2 className="font-medium text-md">Modelo M</h2>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="#"
                      className=" link_visit_and_order_line text-sm  text-[#696969] hover:textbl "
                    >
                      Visitar
                    </a>
                    <a
                      href="#"
                      className="text-sm link_visit_and_order_line  text-[#696969] hover:textbl "
                    >
                      Ordenar
                    </a>
                  </div>
                </div>
              </ListItem>
              <ListItem href="/docs/primitives/typography">
                <ul className=" border-l pl-10 h-[280px] justify-center  flex flex-col gap-8 absolute  top-[50%] -right-[100px] -translate-y-[50%]  -translate-x-[50%] w-[220px] ">
                  <li className="relative text_link_lateral_inline">Bolsos</li>
                  <li className="relative text_link_lateral_inline">
                    Carteras{" "}
                  </li>
                  <li className="relative text_link_lateral_inline">
                    Relojes{" "}
                  </li>
                  <li className="relative text_link_lateral_inline">Anillos</li>
                  <li className="relative text_link_lateral_inline">
                    Tobilleras
                  </li>
                </ul>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-font_lemon">Categorias</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" flex cursor-auto items-center relative justify-center pb-8 pt-20 w-[1100px]">
              <ListItem className="bg-transparent" href="/es/shop/">
                <div className="flex flex-col items-center justify-center">
                  <div className=" w-[220px] h-[123px] ">
                    <img
                      className="w-full box_img_menu_items_navegation"
                      src="/img/Intro/tacones_nav_intro.png"
                      alt=""
                    />
                  </div>
                  <h2 className="font-medium text-md">Tacones</h2>
                </div>
              </ListItem>
              <ListItem className="-ml-16 bg-transparent" href="/es/shop/">
                <div className="flex flex-col items-center justify-center">
                  <div className=" w-[220px] h-[123px] ">
                    <img
                      className="w-full box_img_menu_items_navegation"
                      src="/img/Intro/tacones_nav_intro.png"
                      alt=""
                    />
                  </div>
                  <h2 className="font-medium text-md ">Faldas</h2>
                </div>
              </ListItem>
              <ListItem className="-ml-16 bg-transparent" href="/es/shop/">
                <div className="flex flex-col items-center justify-center">
                  <div className=" w-[220px] h-[123px] ">
                    <img
                      className="w-full box_img_menu_items_navegation"
                      src="/img/Intro/tacones_nav_intro.png"
                      alt=""
                    />
                  </div>
                  <h2 className="font-medium text-md">Pantalones</h2>
                </div>
              </ListItem>
              <ListItem className="-ml-16 bg-transparent" href="/es/shop/">
                <div className="flex flex-col items-center justify-center">
                  <div className=" w-[220px] h-[123px] ">
                    <img
                      className="w-full box_img_menu_items_navegation"
                      src="/img/Intro/tacones_nav_intro.png"
                      alt=""
                    />
                  </div>
                  <h2 className="font-medium text-md">Blusas</h2>
                </div>
              </ListItem>
              <ListItem className="-ml-16 bg-transparent" href="/es/shop/">
                <div className="flex flex-col items-center justify-center">
                  <div className=" w-[220px] h-[123px] ">
                    <img
                      className="w-full box_img_menu_items_navegation"
                      src="/img/Intro/tacones_nav_intro.png"
                      alt=""
                    />
                  </div>
                  <h2 className="font-medium text-md">Lencerias</h2>
                </div>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-font_Poppins">Ofertas</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" flex cursor-auto items-center relative justify-start pb-8 pt-20 pr-28 w-[910px] flex-wrap">
              <ListItem
                className="-ml-10 bg-transparent"
                href="/docs/primitives/typography"
              >
                <div className="flex flex-col items-center justify-center">
                  <div className=" w-[220px] h-[123px] ">
                    <img
                      className="w-full box_img_menu_items_navegation"
                      src="/img/Intro/tacones_nav_intro.png"
                      alt=""
                    />
                  </div>
                  <h2 className="font-medium text-md">Modelo S</h2>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="#"
                      className=" link_visit_and_order_line text-sm  text-[#696969] hover:textbl "
                    >
                      Visitar
                    </a>
                    <a
                      href="#"
                      className="text-sm link_visit_and_order_line  text-[#696969] hover:textbl "
                    >
                      Ordenar
                    </a>
                  </div>
                </div>
              </ListItem>
              <ListItem className="-ml-10 bg-transparent" href="/docs">
                <div className="flex flex-col items-center justify-center">
                  <div className=" w-[220px] h-[123px] ">
                    <img
                      className="w-full box_img_menu_items_navegation"
                      src="/img/Intro/tacones_nav_intro.png"
                      alt=""
                    />
                  </div>
                  <h2 className="font-medium text-md ">Modelo X</h2>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="#"
                      className=" link_visit_and_order_line text-sm  text-[#696969] hover:textbl "
                    >
                      Visitar
                    </a>
                    <a
                      href="#"
                      className="text-sm link_visit_and_order_line  text-[#696969] hover:textbl "
                    >
                      Ordenar
                    </a>
                  </div>
                </div>
              </ListItem>
              <ListItem
                className="-ml-10 bg-transparent"
                href="/docs/installation"
              >
                <div className="flex flex-col items-center justify-center">
                  <div className=" w-[220px] h-[123px] ">
                    <img
                      className="w-full box_img_menu_items_navegation"
                      src="/img/Intro/tacones_nav_intro.png"
                      alt=""
                    />
                  </div>
                  <h2 className="font-medium text-md">Modelo L</h2>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="#"
                      className=" link_visit_and_order_line text-sm  text-[#696969] hover:textbl "
                    >
                      Visitar
                    </a>
                    <a
                      href="#"
                      className="text-sm link_visit_and_order_line  text-[#696969] hover:textbl "
                    >
                      Ordenar
                    </a>
                  </div>
                </div>
              </ListItem>
              <ListItem href="/docs/primitives/typography">
                <ul className=" border-l pl-10 h-[180px] justify-center  flex flex-col gap-4 absolute  top-[50%] -right-[100px] -translate-y-[50%]  -translate-x-[50%] w-[220px] ">
                  <li className="relative text_link_lateral_inline">Tacones</li>
                  <li className="relative text_link_lateral_inline">Faldas </li>
                  <li className="relative text_link_lateral_inline">
                    Pantalones{" "}
                  </li>
                  <li className="relative text_link_lateral_inline">Blusas</li>
                  <li className="relative text_link_lateral_inline">
                    Lencerias
                  </li>
                </ul>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuContent>

          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none bg-white space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
