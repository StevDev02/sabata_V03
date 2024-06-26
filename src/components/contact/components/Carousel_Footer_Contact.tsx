
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const ArrayImages = [
  { src: "https://images.unsplash.com/photo-1548733865-2ff7802d2b3f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    alt: "La moda es lo que nos hace vivir"
  }, { src: "https://images.unsplash.com/photo-1638912474840-5f79f781d6d4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    alt: "Porque la ropa que usas te define"
  }, { src: "https://images.unsplash.com/photo-1639937784957-9b1af0a1b6d1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    alt: "No te preocupes lo que llevas se tu misma"
  },  { src: "https://images.unsplash.com/photo-1638912388457-2fdcc58a9b96?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    alt: "El calzado es lo que nos hace vivir"
  }, { src: "https://images.unsplash.com/photo-1639159635665-f41d83b1ad71?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    alt: "Porque nuestra moda es tu nueva estilo de vida"
  },
];

export function CarouselSizeContactFooter() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {ArrayImages.map((image, index) => (
          <CarouselItem key={index} className="basis-1/3 cursor-pointer relative opacity-70 rounded-3xl grid place-content-center  h-[385px] ">
            <img className="object-cover" src={image.src} alt="" />
            <p className="absolute  text-xl font-semibold translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] text-center  ">{image.alt}</p>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
