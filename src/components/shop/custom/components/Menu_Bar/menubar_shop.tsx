import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

export function MenubarDemo() {
  return (
    <Menubar className="bg-gray-100 ">
      <MenubarMenu>
        <MenubarTrigger className="bg-[#fff] rounded-md cursor-pointer">
          Todo
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="hover:bg-[#fff] rounded-md cursor-pointer">
          Tacones
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="hover:bg-[#fff] rounded-md cursor-pointer">
          Faldas
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="hover:bg-[#fff] rounded-md cursor-pointer">
          Pantalones
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="hover:bg-[#fff] rounded-md cursor-pointer">
          Blusas
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="hover:bg-[#fff] rounded-md cursor-pointer">
          Lencerias
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
