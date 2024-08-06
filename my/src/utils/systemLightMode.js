
const systemLightMode = () => {
  // verificam daca matchMedia este disponibil AND daca tema din sistemul clientului este dark
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches /* va returna true daca e dark */
  ) {
    return "dark";
  }

  return "light";
}
 
export default systemLightMode;
