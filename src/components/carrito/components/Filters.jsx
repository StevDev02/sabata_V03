import { useFilters } from "../hooks/useFilters"
import { ComboboxFilter } from "./category/CategoryFilters"
import { dataCategories } from "../mocks/categorys"

  

export function Filters() {

    const { setFiler } = useFilters()
    
    return ( 
        <>
            <ul className=" place-content-center gap-x-36 w-full gap-y-6 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                {dataCategories.map((group) => (
                    <li className="shadow-md"
                     key={group.groupTitle}>
                        {group.filters.map((filterData) => (
                        <ComboboxFilter
                            key={filterData.title}
                            filter={filterData}
                            setFiler={setFiler}
                        />
                        ))}
                    </li>
                ))}
            </ul>
        </>
     )
}