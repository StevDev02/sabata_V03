import { useState } from "react";

const marcas = [
    {
        name: "Migros",
        link: "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/651d15fc8f27f4a03c14b60e_ese-kunden-migros.svg",
    }, {
        name: "denner",
        link: "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/651d15fc8f27f4a03c14b5ac_ese-kunden_denner.svg",
    }, {
        name: "helsana",
        link: "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6554c2047ea6c10d95e7d7f2_ese-kunden-helsana.svg",
    },{
        name: "felscholdsen",
        link: "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/651d15fc8f27f4a03c14b5b3_ese-kunden_feldschloesschen.png",
    }, {
        name: "coca cola",
        link: 'https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/651d15fc8f27f4a03c14b6ca_ese-kunden-cchbc.svg'
    }, {
        name: "redbull",
        link: "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/651d15fc8f27f4a03c14b66a_ese-kunden-vorlage_ESE_Kunden_RedBull.png"
    }, {
        name: "kunden-der_bund",
        link: "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/651d15fc8f27f4a03c14b632_ese-kunden-der_bund.svg"
    }, {
        name: "axa",
        link: "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/651d15fb8f27f4a03c14b0fa_ese-kunden_axa.svg"
    }, {
        name: "tal",
        link: "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/651d15fc8f27f4a03c14b636_ese-kunden-tal_absolue.png"
    }, {
        name: "general",
        link: "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/651d15fc8f27f4a03c14b697_ese-kunden-generali.svg"
    }, {
        name: "lyrics",
        link: "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/651d15fc8f27f4a03c14b2db_ese-kunden_lyrics.svg"
    }, {
        name: "lyrics",
        link: "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/651d15fc8f27f4a03c14b698_ese-kunden-cameo.svg"
    }, {
        name: "cameo",
        link: "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/651d15fc8f27f4a03c14b698_ese-kunden-cameo.svg"
    }, {
        name: "gadget",
        link: "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/651d15fc8f27f4a03c14b69b_ese-kunden-gadget.png"
    }, {
        name: "brullut",
        link: "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/651d15fc8f27f4a03c14b699_ese-kunden-bruehlgut.svg"
    }, {
        name: "gedget",
        link: "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/651d15fc8f27f4a03c14b669_ese-kunden-vorlage_ESE_Kunden_Keller_Immobilien.png"
    }
]

export function Marcas_Map() {

    const [hoverIndex, setHoverIndex] = useState(-1);
    const [isHovered, setIsHovered] = useState(new Array(marcas.length).fill(false));

    const handleMouseEnter = (index: number) => {
        setHoverIndex(index);
        setIsHovered(new Array(marcas.length).fill(false).map((_, i) => i !== index));
    };

    const handleMouseLeave = () => {
        setHoverIndex(-1);
        setIsHovered(new Array(marcas.length).fill(false))
    };

    return (
        <>
            <ul className="w-full mt-12 grid grid-cols-4 gap-x-[10px] gap-y-[10px]">
                {marcas.map((marca, index) => (
                    <li
                        key={marca.name}
                        className={`w-[300px] shadow h-[190px] rounded-lg cursor-pointer ease-in-out transition duration-500 ${isHovered[index] ? 'bg-[#151515]' : 'bg-[#292929]'}`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img loading="lazy" alt={marca.name} src={marca.link} loading="lazy" />
                    </li>
                ))}
            </ul>
        </>
    );
}