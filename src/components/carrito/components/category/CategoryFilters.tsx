import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useEffect, useState } from "react"


export function ComboboxFilter({ setFiler, filter }) {
  const [open, setOpen] = useState(false)
  
  const [value, setValue] = useState(() => {
    if (filter.filtro === "minPrice") {
      return filter.minPrice !== undefined ? filter.minPrice : 0;
    } else if (filter.filtro === "clasificar") {
      return filter.clasificar !== undefined ? filter.clasificar : 'all';
    } else if (filter.filtro === "talla") {
      return filter.talla !== undefined ? filter.talla : "all";
    } else if (filter.filtro === "estilo") {
      return filter.estilo !== undefined ? filter.estilo : 'all';
    } else if (filter.filtro === "color") {
      return filter.color !== undefined ? filter.color : 'all';
    } else if (filter.filtro === "tipo") {
      return filter.tipo !== undefined ? filter.tipo : 'all';
    } else {return 'all'}
  })
  

    const handleSelect = (selectedValue) => {
        setValue(selectedValue === value ? "" : selectedValue);
        setOpen(false)
    };

    useEffect(() => {
        if (filter.filtro === "minPrice") {
            setFiler( prevState => 
                ({...prevState, 
            minPrice: value}))
            return
        }

        if (filter.filtro === "clasificar") {
          setFiler( prevState => 
            ({...prevState, 
            clasificar: value}))
            return
        }

        if (filter.filtro === "talla") {
          setFiler( prevState => 
            ({...prevState, 
            talla: value}))
            return
        }

        if (filter.filtro === "estilo") {
          setFiler( prevState => 
            ({...prevState, 
            estilo: value}))
            return
        }

        if (filter.filtro === "color") {
          setFiler( prevState => 
            ({...prevState, 
            color: value}))
            return
        }

        if (filter.filtro === "tipo") {
          setFiler( prevState => 
            ({...prevState, 
            tipo: value}))
            return
        }
    }, [value])
    
      return (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger className="bg-transparent  text-xs border-none rounded-[0px]" asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[240px] h-[30px] px-4 hover:bg-transparent justify-between"
            >
              {filter.title}
              <ChevronsUpDown className="ml-2 h-4  w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder={filter.search} />
              <CommandList>
                <CommandEmpty>{filter.notEmpty}</CommandEmpty>
                <CommandGroup>
                  {filter.options.map((option) => (
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
                      {filter.filtro === 'color' ? 
                        <div className="rounded-md w-[34px] h-[34px] "
                        style={{backgroundColor: option.value}} />
                       : 
                      null
                      }  
                      {filter.filtro === 'minPrice' ? 
                        <p>$</p>
                       : 
                      null
                      }  
                       {option.label}
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
  )
}
