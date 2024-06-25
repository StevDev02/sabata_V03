import { Button } from "@/components/ui/button";

export function RegisterForm() {
  return (
    <form
      className="flex flex-col gap-4 pt-20 text-xs text-zinc-600"
      action="/api/auth/register"
      method="post"
      encType="application/x-www-form-urlencoded"
      data-astro-reload
    >
      <h2 className="text-base font-light text-black">CREAR NUEVA CUENTA</h2>
      <p>Ingresa tus datos personales aqui.</p>
      {/* Using User's Email */}
      <label className="hidden" htmlFor="email">
        Correo Electronico
      </label>
      <input
        required
        id="email"
        name="email"
        type="email"
        autoComplete="home email"
        placeholder="CORREO ELECTRONICO"
        className="w-[300px] placeholder-up focus:placeholder:-mt-4 focus:outline-none h-[45px] border border-r-transparent border-l-transparent bg-transparent pt-1 border-t-transparent border-b-zinc-300 inputLogin"
      />{" "}
      {/* Creating Password User */}
      <label className="hidden" htmlFor="password">
        Contraseña
      </label>
      <input
        required
        id="password"
        name="password"
        type="password"
        autoComplete="new-password"
        placeholder="CREAR NUEVA CONTRASEÑA"
        className="inputLogin bg-transparent pt-1 w-[300px] h-[45px] pr-2 focus:outline-none border border-r-transparent border-l-transparent border-t-transparent border-b-zinc-300"
      />{" "}
      {/* User's Complete Name */}
      <label className="hidden" htmlFor="name">
        Nombre Completo
      </label>
      <input
        required
        id="name"
        name="name"
        type="text"
        autoComplete="name"
        placeholder="NOMBRE COMPLETO"
        className="inputLogin bg-transparent pt-1 w-[300px] h-[45px] pr-2 focus:outline-none border border-r-transparent border-l-transparent border-t-transparent border-b-zinc-300"
      />{" "}
      {/* Politicas de usuario */}
      <div className="flex items-center gap-2 justify-items">
        <input
          required
          type="checkbox"
          id="legal"
          name="legal"
          className="w-[14px] h-[14px] accent-black hover:accent-black"
          can-value="sabataLegal"
        />
        <label className="w-[300px] text-xs cursor-pointer" htmlFor="legal">
          He podido leer y entiendo la{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/politica-de-privacidad-y-cookies"
            title="Política de Privacidad y Cookies | Sabata"
            aria-label="Política de Privacidad y Cookies | Sabata"
            className="underline hover:text-black hover:font-bold"
          >
            Política de Privacidad y Cookies
          </a>{" "}
          y{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/terminos-de-uso-de-privacidad-de-datos"
            title="Terminos de Uso de Privacidad de Datos | Sabata"
            aria-label="Terminos de Uso de Privacidad de Datos | Sabata"
            className="underline hover:text-black hover:font-bold"
          >
            Terminos de Uso de Privacidad de Datos
          </a>
        </label>
      </div>
      {/* Aceptar Comerciales */}
      <div className="flex items-center gap-2 justify-items">
        <input
          type="checkbox"
          id="comercials"
          name="comercials"
          className="w-[14px] h-[14px] accent-black hover:accent-black"
          can-value="sabataComercials"
        />
        <label
          className="w-[300px] text-xs cursor-pointer"
          htmlFor="comercials"
        >
          Quiero recibir comunicaciones comerciales personalizadas de SABATA a
          través del email.
        </label>
      </div>
      {/* Create Account */}
      <Button
        type="submit"
        className="w-[300px] bg-transparent text-black border py-2 rounded-sm border-zinc-500 hover:text-white hover:bg-black mt-3"
      >
        CREAR CUENTA
      </Button>
    </form>
  );
}
