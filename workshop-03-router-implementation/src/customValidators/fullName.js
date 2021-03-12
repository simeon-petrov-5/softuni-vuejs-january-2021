export function hasAlphaAndSpaces(value) {
  const regex = /^[A-Za-z\s]+$/;
  return regex.test(value);
}

export function hasTwoNames(value) {
  const [fName, lName] = value.split(" ");
  return value.split(" ").length === 2 && fName.length > 0 && lName.length > 0;
}

export function isCapitalized(value) {
  const regex = /[A-Z]/;
  const [fName, lName] = value.split(" ");
  if (!fName && !lName) return false;
  return regex.test(fName.charAt(0)) && regex.test(lName.charAt(0));
}
