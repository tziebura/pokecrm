export const textFormatter = {
  capitalize,
};

function capitalize(string) {
  const letters = string.split("");

  if(letters.length === 0) {
    return "";
  }

  const firstLetter = letters.shift().toUpperCase();
  return firstLetter + letters.join("");
}