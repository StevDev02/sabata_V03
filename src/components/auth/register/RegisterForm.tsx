// React
import { useState } from "react";
// React Icons
import { InfoCircledIcon } from "@radix-ui/react-icons";
// Components React
import { Button } from "@/components/ui/button";
// Loader
import { IconsBubbleLoading } from "@/components/custom/Assets/Loaders/IconsBubbleLoading";
// Validations
import { useEmail } from "@/lib/auth/hooks/useEmail";
import { useName } from "@/lib/auth/hooks/useName";
import { usePassword } from "@/lib/auth/hooks/usePassword";
import { isValidEmail, isValidPassword } from "@/lib/auth/regex/validationAuth";
// Custom Alerts
import Swal from "sweetalert2";

export function RegisterForm() {
  const { email, setEmail, errorEmail } = useEmail();
  const { password, setPassword, errorPassword } = usePassword();
  const { fullname, setFullName, errorFullName } = useName();
  const [loading, setLoading] = useState(false);

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  };

  const handleChangeFullName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFullName = event.target.value;
    setFullName(newFullName);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };

  const handleSubmit = () => {
    setLoading(true);
    const Toast = Swal.mixin({
      toast: true,
      position: "center",
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "Redirigiendo...",
      text: "Revisa tu correo para confirmar tu cuenta.",
    });
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      action="/api/auth/register"
      method="post"
      encType="application/x-www-form-urlencoded"
      data-astro-reload
      className="flex flex-col gap-3 pt-3 text-xs text-zinc-600"
    >
      <div className="text-start w-[300px] grid gap-1">
        <h2 className="text-base text-black font-extralight">
          CREAR NUEVA CUENTA
        </h2>
        <p>Ingresa tus datos personales aqui para crear tu cuenta.</p>
      </div>

      {/* Creating User's Email */}
      <div className="gap-1 flex items-start justify-center flex-col w-[300px]">
        <label className="font-regular" htmlFor="email">
          TU CORREO ELECTRÓNICO
        </label>
        <input
          required
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={handleChangeEmail}
          placeholder="Ingresa tu correo electrónico..."
          className="placeholder-up w-full focus:placeholder:-mt-4 focus:outline-none h-[45px] border border-r-transparent border-l-transparent bg-transparent pt-1 border-t-transparent border-b-zinc-300"
          aria-label="email"
        />
        {errorEmail && (
          <div className="flex items-center justify-center gap-1 text-red-500 animate-jump-in animate-once animate-duration-1000 animate-ease-in-out">
            <InfoCircledIcon />
            <span className="text-xs">{errorEmail}</span>
          </div>
        )}
      </div>
      {/* Creating User's Complete Name */}
      <div className="gap-1 flex items-start justify-center flex-col w-[300px]">
        <label className="font-regular" htmlFor="name">
          TU NOMBRE COMPLETO
        </label>
        <input
          required
          id="name"
          type="text"
          name="name"
          value={fullname}
          onChange={handleChangeFullName}
          placeholder="Ingresa tu nombre completo..."
          className="placeholder-up w-full focus:placeholder:-mt-4 focus:outline-none h-[45px] border border-r-transparent border-l-transparent bg-transparent pt-1 border-t-transparent border-b-zinc-300"
          aria-label="name"
        />
        {errorFullName && (
          <div className="flex items-center justify-center gap-1 text-red-500 animate-jump-in animate-once animate-duration-1000 animate-ease-in-out">
            <InfoCircledIcon />
            <span className="text-xs">{errorFullName}</span>
          </div>
        )}
      </div>
      {/* Creating User's Password */}
      <div className="gap-1 flex items-start justify-center flex-col w-[300px]">
        <label role="rowgroup" className="font-regular" htmlFor="password">
          NUEVA CONTRASEÑA
        </label>
        <input
          required
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={handleChangePassword}
          autoComplete="new-password"
          placeholder="Crea una contraseña segura..."
          className="bg-transparent pt-1 w-full h-[45px] pr-2 focus:outline-none border border-r-transparent border-l-transparent border-t-transparent border-b-zinc-300"
          aria-label="password"
        />
        {errorPassword && (
          <div className="flex items-center justify-center gap-2 text-red-500 animate-jump-in animate-once animate-duration-1000 animate-ease-in-out">
            <InfoCircledIcon />
            <span className="text-xs">{errorPassword}</span>
          </div>
        )}
      </div>
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
        disabled={!isValidEmail(email) || !isValidPassword(password) || loading}
        role="button"
        aria-label="Crear Cuenta con Correo | Sabata"
        title="Crear Cuenta con Correo | Sabata"
        type="submit"
        className="w-[300px] bg-transparent text-black disabled:cursor-not-allowed border py-2 rounded-sm border-zinc-500 hover:text-white hover:bg-black mt-2"
      >
        {loading ? (
          <div className="flex items-center justify-center gap-2">
            <IconsBubbleLoading />
            <span>CARGANDO...</span>
          </div>
        ) : (
          "CREAR CUENTA"
        )}
      </Button>
    </form>
  );
}
