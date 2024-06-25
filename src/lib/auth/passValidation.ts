export function validatePass(pass: string): boolean {
  // Testing - minimum number of characters is 8
  if (pass.length < 8) {
    return false;
  }

  // Testing - should contain a lowercase
  if (!/[a-z]/.test(pass)) {
    return false;
  }

  // Testing - should contain an uppercase
  if (!/[A-Z]/.test(pass)) {
    return false;
  }

  // Testing - should contain at least 1 number
  if (!/\d/.test(pass)) {
    return false;
  }

  // Testing - should contain at least 1 special character
  if (!/[!@#$%^&*()\[\]{}|;:,.<>?]/.test(pass)) {
    return false;
  }

  return true;
}
