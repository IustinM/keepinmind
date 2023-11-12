export function isValidEmail(email:string) {
  const regex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}