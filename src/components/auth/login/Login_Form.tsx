import { useState, type SetStateAction } from "react";

// React Radix Icons
import { InfoCircledIcon } from "@radix-ui/react-icons";

// Validations

// Components React
import { Button } from "@/components/ui/button";

// Custom Icons
import { GoogleIcon } from "@/components/custom/Icons/Google";
import { FacebookIcon } from "@/components/custom/Icons/Facebook";

export function Login_Form() {
  return (
    <>
      <form
        className="flex flex-col gap-4 pt-10 text-xs text-zinc-600"
        action="/api/auth/login"
        method="post"
        encType="application/x-www-form-urlencoded"
        data-astro-reload
      >
        <h2 className="text-base text-black font-extralight">
          ACCEDE A TU CUENTA
        </h2>
        <p>Ingresa tus datos personales aqui.</p>
        <input
          required
          id="email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="CORREO ELECTRONICO"
          className="w-[300px] placeholder-up focus:placeholder:-mt-4 focus:outline-none h-[45px] border border-r-transparent border-l-transparent bg-transparent pt-1 border-t-transparent border-b-zinc-300"
          aria-label="email"
          title="email"
        />
        <div className="flex items-center justify-start gap-2 -mt-3">
          <InfoCircledIcon className="text-red-500" />
          <p className="text-xs text-red-500 ">Este campo es obligatorio.</p>
        </div>

        <input
          required
          id="password"
          type="password"
          name="password"
          autoComplete="new-password"
          placeholder="CONTRASEÑA"
          className="bg-transparent pt-1 w-[300px] h-[45px] pr-2 focus:outline-none border border-r-transparent border-l-transparent border-t-transparent border-b-zinc-300"
          aria-label="password"
          title="password"
        />
        <div className="flex items-center justify-start gap-2 -mt-3">
          <InfoCircledIcon className="text-red-500" />
          <p className="text-xs text-red-500 ">Este campo es obligatorio.</p>
        </div>

        <div />

        <Button
          aria-label="Iniciar Sesion con Correo | Sabata"
          title="Iniciar Sesion con Correo | Sabata"
          type="submit"
          className="w-[300px] bg-transparent text-black border py-2 rounded-sm border-zinc-500 hover:text-white hover:bg-black mt-3"
        >
          INICIAR SESION
        </Button>

        <div className="flex items-center justify-center gap-2 pt-3 pb-3">
          <div className="w-[110px] h-[1px] bg-[#00000018] " />{" "}
          <label className="text-xs text-[#00000080] ">O inicia con</label>
          <div className="w-[110px] h-[1px] bg-[#00000018] " />
        </div>
        <div className="flex items-center justify-center gap-4">
          <Button
            title="Iniciar Sesion con Google | Sabata"
            aria-label="Iniciar Sesion con Google | Sabata"
            id="google"
            className="bg-white rounded-sm shadow-md"
          >
            <GoogleIcon />
          </Button>
          <Button
            disabled
            title="Iniciar Sesion con Facebook | Sabata"
            aria-label="Iniciar Sesion con Facebook | Sabata"
            id="facebook"
            className="hidden bg-white rounded-sm shadow-md"
          >
            <FacebookIcon />
          </Button>
        </div>
      </form>
    </>
  );
}
