const localStorageKey = "user-token";

export function getUserToken() {
  const token = localStorage.getItem(localStorageKey);
  return token || "";
}

export function setUsetToken(token) {
  localStorage.setItem(localStorageKey, token);
}

export function clearUserToken() {
  localStorage.removeItem(localStorageKey);
}
