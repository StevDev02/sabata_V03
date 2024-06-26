import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";

export function ComboboxFilter({ setFiler, filter }: any) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(() => {
    switch (filter.filtro) {
      case "minPrice":
        return filter.minPrice !== undefined ? filter.minPrice : 0;
      case "clasificar":
        return filter.clasificar !== undefined ? filter.clasificar : "all";
      case "talla":
        return filter.talla !== undefined ? filter.talla : "all";
      case "estilo":
        return filter.estilo !== undefined ? filter.estilo : "all";
      case "color":
        return filter.color !== undefined ? filter.color : "all";
      case "tipo":
        return filter.tipo !== undefined ? filter.tipo : "all";
      default:
        return "all";
    }
  });

  useEffect(() => {
    setFiler((prevState: any) => ({
      ...prevState,
      [filter.filtro]: value,
    }));
  }, [value, filter.filtro, setFiler]);

  const handleSelect = (selectedValue: any) => {
    setValue(selectedValue === value ? "" : selectedValue);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="bg-transparent text-xs border-none rounded-[0px]" asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[240px] h-[30px] px-4 hover:bg-transparent justify-between"
        >
          {filter.title}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={filter.search} />
          <CommandList>
            <CommandEmpty>{filter.notEmpty}</CommandEmpty>
            <CommandGroup>
              {filter.options.map((option: any) => (
                <CommandItem
                  className="shawdow"
                  key={option.value}
                  value={option.value}
                  onSelect={() => handleSelect(option.value)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <div className="flex text-xs pl-1 items-center justify-center gap-2">
                    {filter.filtro === "color" ? (
                      <div
                        className="rounded-md w-[34px] h-[34px]"
                        style={{ backgroundColor: option.value }}
                      />
                    ) : null}
                    {filter.filtro === "minPrice" ? <p>$</p> : null}
                    {option.label}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
