import { useState, useEffect, useRef } from "react";

export function useName() {
  const [fullname, setFullName] = useState("");
  const [errorFullName, setError] = useState("");
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = false;
      return;
    }

    if (fullname.length < 3) {
      setError("El nombre debe tener al menos 3 caracteres");
      return;
    }

    setError("");
  }, [fullname]);

  return { fullname, setFullName, errorFullName };
}
