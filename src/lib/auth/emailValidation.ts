export function validateEmail(email: string): boolean {
  const algorithm = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return algorithm.test(email);
}
