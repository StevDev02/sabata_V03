"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const imageVariants = cva(
  "aspect-auto transition-all",
  {
    variants: {
      variant: {
        rounded: "rounded-md",
        rounded_shadow: "rounded-md shadow-sm",
        shadow: "shadow-sm",
        default: "w-auto h-auto",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
  VariantProps<typeof imageVariants> { }

const ImageComponent = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, variant, src, alt, width, height, ...props }, ref) => {
    const [srcValue, setSrcValue] = useState<string | undefined>(src);
    const [srcSetValue, setSrcSetValue] = useState<string | undefined>();

    useEffect(() => {
      const isFormatSupported = (format: string) => {
        const elem = document.createElement("canvas");
        if (!!(elem.getContext && elem.getContext("2d"))) {
          return elem.toDataURL(`image/${format}`).indexOf(`data:image/${format}`) === 0;
        }
        return false;
      };

      if (src) {
        if (isFormatSupported("webp")) {
          setSrcValue(src.replace(/\.[^.]+$/, ".webp"));
          setSrcSetValue(
            `${src.replace(/\.[^.]+$/, ".webp")} 1x, ${src.replace(/\.[^.]+$/, "@2x.webp")} 2x`
          );
        } else {
          const extension = src.match(/\.[^.]+$/)?.[0] || "";
          setSrcSetValue(
            `${src} 1x, ${src.replace(extension, `@2x${extension}`)} 2x`
          );
        }
      }
    }, [src]);

    return (
      <img
        src={srcValue || placeholder}
        srcSet={srcSetValue}
        alt={alt}
        title={alt}
        aria-label={alt}
        role="img"
        width={width}
        height={height}
        decoding="auto"
        loading="lazy"
        fetchPriority="auto"
        className={clsx(imageVariants({ variant }), className)}
        ref={ref}
        {...props}
      />

    );
  }
);

ImageComponent.displayName = "ImageComponent";

export { ImageComponent, imageVariants };

const placeholder = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNDgwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cmVjdCBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtmaWxsOiNlYWVhZWE7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB4PSItNjAwIiB5PSItNjAwIiByeD0iMyIgcnk9IjMiIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMxOC4zMyAyNDguMzMpIi8+PHBhdGggc3R5bGU9InN0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7ZmlsbDojZmFmYWZhO2ZpbGwtcnVsZTpub256ZXJvO29wYWNpdHk6LjI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjgxLjY3IC0zNTEuNjcpIiBkPSJNNjAwLjcwOSA3MzYuNWMtNzUuNDU0IDAtMTM2LjYyMS02MS4xNjctMTM2LjYyMS0xMzYuNjJzNjEuMTY3LTEzNi42MjEgMTM2LjYyMS0xMzYuNjIxYzc1LjQ1MyAwIDEzNi42MiA2MS4xNjcgMTM2LjYyIDEzNi42MjEgMCA3NS40NTMtNjEuMTY3IDEzNi42Mi0xMzYuNjIgMTM2LjYyIi8+PHBhdGggc3R5bGU9InN0cm9rZTojYzljOWM5O3N0cm9rZS13aWR0aDoyLjQxODtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O2ZpbGw6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztvcGFjaXR5Oi4yNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI4MS42NyAtMzUxLjY3KSIgZD0iTTYwMC43MDkgNzM2LjVjLTc1LjQ1NCAwLTEzNi42MjEtNjEuMTY3LTEzNi42MjEtMTM2LjYyczYxLjE2Ny0xMzYuNjIxIDEzNi42MjEtMTM2LjYyMWM3NS40NTMgMCAxMzYuNjIgNjEuMTY3IDEzNi42MiAxMzYuNjIxIDAgNzUuNDUzLTYxLjE2NyAxMzYuNjItMTM2LjYyIDEzNi42MloiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxnIHRyYW5zZm9ybT0ic2NhbGUoMSAtMSlyb3RhdGUoNDUgNDYwLjgzNiAyNjEuNzExKSI+PGxpbmVhckdyYWRpZW50IGlkPSJhIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjU1NC4wNjEiIHkxPSIuMDgzIiB4Mj0iLS40OCIgeTI9Ii4wODciPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNjOWM5Yzk7c3RvcC1vcGFjaXR5OjAiLz48c3RvcCBvZmZzZXQ9IjIwLjglIiBzdHlsZT0ic3RvcC1jb2xvcjojYzljOWM5O3N0b3Atb3BhY2l0eToxIi8+PHN0b3Agb2Zmc2V0PSI3OS4yJSIgc3R5bGU9InN0b3AtY29sb3I6I2M5YzljOTtzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2M5YzljOTtzdG9wLW9wYWNpdHk6MCIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggc3R5bGU9InN0cm9rZTp1cmwoI2EpO3N0cm9rZS13aWR0aDoyLjQxODtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O2ZpbGw6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztvcGFjaXR5Oi41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjc2Ljc5IDEuMjEpIiBkPSJNMC0xLjIwOWg1NTMuNTgxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzE5LjA0IDI0NykiPjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI3OTYuOTEyIiB5MT0iNTk5Ljk2MyIgeDI9IjQwNC41MDciIHkyPSI1OTkuOTY1Ij48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojYzljOWM5O3N0b3Atb3BhY2l0eTowIi8+PHN0b3Agb2Zmc2V0PSIyMC44JSIgc3R5bGU9InN0b3AtY29sb3I6I2M5YzljOTtzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iNzkuMiUiIHN0eWxlPSJzdG9wLWNvbG9yOiNjOWM5Yzk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNjOWM5Yzk7c3RvcC1vcGFjaXR5OjAiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIHN0eWxlPSJzdHJva2U6dXJsKCNiKTtzdHJva2Utd2lkdGg6Mi40MTg7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtmaWxsOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eTouNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYwMC43MSAtNTk4LjY3KSIgZD0iTTQwNC44NDYgNTk4LjY3MWgzOTEuNzI2IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzE3LjgzIDI0OC4yMSkiPjxsaW5lYXJHcmFkaWVudCBpZD0iYyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI2MDAuNzkyIiB5MT0iNDAzLjY3NyIgeDI9IjYwMC43OTQiIHkyPSI3OTYuMDgyIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojYzljOWM5O3N0b3Atb3BhY2l0eTowIi8+PHN0b3Agb2Zmc2V0PSIyMC44JSIgc3R5bGU9InN0b3AtY29sb3I6I2M5YzljOTtzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iNzkuMiUiIHN0eWxlPSJzdG9wLWNvbG9yOiNjOWM5Yzk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNjOWM5Yzk7c3RvcC1vcGFjaXR5OjAiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIHN0eWxlPSJzdHJva2U6dXJsKCNjKTtzdHJva2Utd2lkdGg6Mi40MTg7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtmaWxsOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eTouNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU5OS41IC01OTkuODgpIiBkPSJNNTk5LjUgNzk1Ljc0MlY0MDQuMDE3IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzE4LjMzIDI0OS4yMSkiPjxsaW5lYXJHcmFkaWVudCBpZD0iZCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI0MDQuODUiIHkxPSI0MDMuOTAzIiB4Mj0iNzk2Ljk3MiIgeTI9Ijc5Ni4wMiI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6I2M5YzljOTtzdG9wLW9wYWNpdHk6MCIvPjxzdG9wIG9mZnNldD0iMjAuOCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNjOWM5Yzk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9Ijc5LjIlIiBzdHlsZT0ic3RvcC1jb2xvcjojYzljOWM5O3N0b3Atb3BhY2l0eToxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojYzljOWM5O3N0b3Atb3BhY2l0eTowIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBzdHlsZT0ic3Ryb2tlOnVybCgjZCk7c3Ryb2tlLXdpZHRoOjIuNDE4O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7ZmlsbDpub25lO2ZpbGwtcnVsZTpub256ZXJvO29wYWNpdHk6LjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MDAgLTYwMC44OCkiIGQ9Im03OTUuNzE3IDc5Ni41OTctMzkxLjQ0MS0zOTEuNDQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvZz48cGF0aCBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtmaWxsOiNmZmY7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eTouNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI4MS42NyAtMzUxLjY3KSIgZD0iTTYwMC43MDkgNjU2LjcwNGMtMzEuMzg0IDAtNTYuODI1LTI1LjQ0MS01Ni44MjUtNTYuODI0IDAtMzEuMzg0IDI1LjQ0MS01Ni44MjUgNTYuODI1LTU2LjgyNSAzMS4zODMgMCA1Ni44MjQgMjUuNDQxIDU2LjgyNCA1Ni44MjUgMCAzMS4zODMtMjUuNDQxIDU2LjgyNC01Ni44MjQgNTYuODI0Ii8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzE5LjY0IDI0OC4yMSkiIGNsaXAtcGF0aD0idXJsKCNlKSI+PGNsaXBQYXRoIGlkPSJlIj48cGF0aCBkPSJNLTE5Ljk1Ni0xOS4zNDVoMzguNjg5djM4LjY4OWgtMzguNjg5eiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9jbGlwUGF0aD48cGF0aCBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtmaWxsOiM2NjY7ZmlsbC1ydWxlOmV2ZW5vZGQ7b3BhY2l0eTouNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYwMS4zMSAtNTk5Ljg4KSIgZD0iTTYxNi40MjYgNTg2LjU4aC0zMS40MzR2MTYuMTc2bDMuNTUzLTMuNTU0LjUzMS0uNTMxaDkuMDY4bC4wNzQtLjA3NCA4LjQ2My04LjQ2M2gyLjU2NWw3LjE4IDcuMTgxem0tMTUuNzE1IDE0LjY1NCAzLjY5OCAzLjY5OSAxLjI4MyAxLjI4Mi0yLjU2NSAyLjU2NS0xLjI4Mi0xLjI4My01LjItNS4xOTloLTYuMDY2bC01LjUxNCA1LjUxNC0uMDczLjA3M3YyLjg3NmEyLjQyIDIuNDIgMCAwIDAgMi40MTggMi40MThoMjYuNTk4YTIuNDIgMi40MiAwIDAgMCAyLjQxOC0yLjQxOHYtOC4zMTdsLTguNDYzLTguNDYzLTcuMTgxIDcuMTgxem0tMTkuMzQ3IDUuNDQydjQuMDg1YTYuMDQ1IDYuMDQ1IDAgMCAwIDYuMDQ2IDYuMDQ1aDI2LjU5OGE2LjA0NCA2LjA0NCAwIDAgMCA2LjA0NS02LjA0NXYtNy4xMDhsMS4zNTYtMS4zNTUtMS4yODItMS4yODMtLjA3NC0uMDczdi0xNy45ODloLTM4LjY4OXYyMy40M2wtLjE0Ni4xNDZ6Ii8+PC9nPjxwYXRoIHN0eWxlPSJzdHJva2U6I2M5YzljOTtzdHJva2Utd2lkdGg6Mi40MTg7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtmaWxsOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eTouNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI4MS42NyAtMzUxLjY3KSIgZD0iTTYwMC43MDkgNjU2LjcwNGMtMzEuMzg0IDAtNTYuODI1LTI1LjQ0MS01Ni44MjUtNTYuODI0IDAtMzEuMzg0IDI1LjQ0MS01Ni44MjUgNTYuODI1LTU2LjgyNSAzMS4zODMgMCA1Ni44MjQgMjUuNDQxIDU2LjgyNCA1Ni44MjUgMCAzMS4zODMtMjUuNDQxIDU2LjgyNC01Ni44MjQgNTYuODI0WiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9zdmc+"