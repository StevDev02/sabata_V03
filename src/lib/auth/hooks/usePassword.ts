import { useEffect, useRef, useState } from "react";

export function usePassword() {
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = false;
      return;
    }

    if (password.length < 8) {
      setErrorPassword("La contraseña debe tener al menos 8 caracteres");
      return;
    }

    if (!password.match(/[a-z]/)) {
      setErrorPassword("La contraseña debe tener al menos una letra minúscula");
      return;
    }

    if (!password.match(/[A-Z]/)) {
      setErrorPassword("La contraseña debe tener al menos una letra mayúscula");
      return;
    }

    if (!password.match(/\d/)) {
      setErrorPassword("La contraseña debe tener al menos un número");
      return;
    }

    if (!password.match(/[@$!%*#?&.]/)) {
      setErrorPassword(
        "La contraseña debe tener al menos un caracter especial"
      );
      return;
    }

    if (password.length > 20) {
      setErrorPassword("La contraseña debe tener menos de 20 caracteres");
      return;
    }

    setErrorPassword("");
  }, [password]);

  return { password, setPassword, errorPassword };
}
