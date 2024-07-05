import { useState, useEffect, useRef } from "react";

export function useEmail() {
  const [email, setEmail] = useState("");
  const [errorEmail, setError] = useState("");
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = false;
      return;
    }

    if (email.length < 3) {
      setError("El email debe tener al menos 3 caracteres");
      return;
    }

    if (
      !email.includes("@hotmail") &&
      !email.includes("@outlook") &&
      !email.includes("@gmail") &&
      !email.includes("@yahoo")
    ) {
      setError("El email debe tener un @ y una organizacion");
      return;
    }

    if (
      !email.includes(".com") &&
      !email.includes(".org") &&
      !email.includes(".net")
    ) {
      setError("El email debe tener .com, .org o .net");
      return;
    }

    setError("");
  }, [email]);

  return { email, setEmail, errorEmail };
}
