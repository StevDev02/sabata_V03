// React
import { useState } from "react";
// React Icons
import { InfoCircledIcon } from "@radix-ui/react-icons";
// Components React
import { Button } from "@/components/ui/button";
// Custom Icons
import { GoogleIcon } from "@/components/custom/Icons/Google";
import { AppleIcon } from "@/components/custom/Icons/Apple";
// Loader
import { IconsBubbleLoading } from "@/components/custom/Assets/Loaders/IconsBubbleLoading";
// Validations
import { useEmail } from "@/lib/auth/hooks/useEmail";
import { usePassword } from "@/lib/auth/hooks/usePassword";
import { isValidEmail, isValidPassword } from "@/lib/auth/regex/validationAuth";
// Custom Alerts
import Swal from "sweetalert2";

export function Login_Form() {
  const { email, setEmail, errorEmail } = useEmail();
  const { password, setPassword, errorPassword } = usePassword();
  const [loading, setLoading] = useState(false);

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
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
    });
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <form
        onSubmit={handleSubmit}
        action="/api/auth/login"
        method="post"
        encType="application/x-www-form-urlencoded"
        data-astro-reload
        className="flex flex-col items-center justify-center gap-6 pt-7 text-xs text-zinc-600"
      >
        <div className="text-start w-[300px] grid gap-1">
          <h2 className="text-base text-black font-extralight">
            ACCEDE A TU CUENTA
          </h2>
          <p>Ingresa tus datos para acceder a la tienda.</p>
        </div>
        <div className="gap-1 flex items-start justify-center flex-col w-[300px]">
          <label className="font-regular" htmlFor="email">
            CORREO ELECTRÓNICO
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
        <div className="gap-1 flex items-start justify-center flex-col w-[300px]">
          <label role="rowgroup" className="font-regular" htmlFor="password">
            CONTRASEÑA
          </label>
          <input
            required
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={handleChangePassword}
            placeholder="Ingresa tu contraseña..."
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
        <div className="flex items-center justify-center gap-1 flex-col">
          <Button
            disabled={
              !isValidEmail(email) || !isValidPassword(password) || loading
            }
            role="button"
            aria-label="Iniciar Sesión con Correo | Sabata"
            title="Iniciar Sesión con Correo | Sabata"
            type="submit"
            className="w-[300px] bg-transparent text-black disabled:cursor-not-allowed border py-2 rounded-sm border-zinc-500 hover:text-white hover:bg-black mt-2"
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <IconsBubbleLoading />
                <span>CARGANDO...</span>
              </div>
            ) : (
              "INICIAR SESIÓN"
            )}
          </Button>
        </div>
        <div className="flex items-center justify-center gap-2 py-1">
          <div className="w-[110px] h-[1px] bg-[#00000018]" />
          <label className="text-xs text-[#00000080]">O inicia con</label>
          <div className="w-[110px] h-[1px] bg-[#00000018]" />
        </div>
      </form>
      <div className="flex items-center justify-center gap-4">
        <form
          onSubmit={handleSubmit}
          role="form"
          id="FormAuthGoogle"
          action="/api/auth/login"
          method="post"
          className="flex flex-col gap-4 text-xs text-zinc-600"
          encType="application/x-www-form-urlencoded"
          data-astro-reload
        >
          <Button
            role="button"
            variant="rounded"
            type="submit"
            title="Iniciar Sesión con Google | Sabata"
            aria-label="Iniciar Sesión con Google | Sabata"
            id="google"
            name="provider"
            value="google"
            className="bg-white hover:bg-gray-100 p-3"
          >
            <GoogleIcon />
          </Button>
        </form>
        <form
          onSubmit={handleSubmit}
          role="form"
          id="FormAuthApple"
          action="/api/auth/login"
          method="post"
          className="flex flex-col gap-4 text-xs text-zinc-600"
          encType="application/x-www-form-urlencoded"
          data-astro-reload
        >
          <Button
            disabled
            role="button"
            variant="rounded"
            type="submit"
            title="Iniciar Sesión con Apple | Sabata"
            aria-label="Iniciar Sesión con Apple | Sabata"
            id="apple"
            name="provider"
            value="apple"
            className=" bg-white hover:bg-gray-100 p-3"
          >
            <AppleIcon />
          </Button>
        </form>
      </div>
    </div>
  );
}
