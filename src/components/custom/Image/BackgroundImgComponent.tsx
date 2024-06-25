"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

// Define background variants using class-variance-authority
const backgroundVariants = cva(
   "relative aspect-auto bg-center bg-cover bg-origin-border bg-no-repeat",
   {
      variants: {
         variant: {
            responsive: "w-auto h-auto",
            default: "w-full h-dvh",
         },
      },
      defaultVariants: {
         variant: "default",
      },
   }
);

export interface BackgroundProps
   extends React.HTMLAttributes<HTMLDivElement>,
   VariantProps<typeof backgroundVariants> {
   src: string;
}

const BackgroundImgComponent = React.forwardRef<HTMLDivElement, BackgroundProps>(
   ({ className, variant, src, ...props }, ref) => {
      const [backgroundImage, setBackgroundImage] = useState<string | undefined>(undefined);

      useEffect(() => {
         const isFormatSupported = (format: string) => {
            const elem = document.createElement("canvas");
            if (!!(elem.getContext && elem.getContext("2d"))) {
               return elem.toDataURL(`image/${format}`).indexOf(`data:image/${format}`) === 0;
            }
            return false;
         };

         if (src) {
            const baseSrc = src.replace(/\.[^.]+$/, "");
            if (isFormatSupported("webp")) {
               setBackgroundImage(`${baseSrc}.webp`);
            } else {
               setBackgroundImage(src);
            }
         }
      }, [src]);

      return (
         <div
            aria-label="Imagen de Fondo"
            title="Imagen de Fondo"
            ref={ref}
            {...props}
            className={clsx(backgroundVariants({ variant }), className)}
            style={{ backgroundImage: `url(${src})` }}
         />
      );
   }
);

BackgroundImgComponent.displayName = "BackgroundComponent";

export { BackgroundImgComponent, backgroundVariants };
