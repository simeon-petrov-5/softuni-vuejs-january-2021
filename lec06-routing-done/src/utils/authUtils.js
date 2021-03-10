export function authMe() {
  const user = {
    name: "Simeon Petrov",
    isAuth: true,
    expiration: new Date().getTime() + 15000,
  };
  localStorage.setItem("user", JSON.stringify(user));

  setTimeout(() => {
    user.isAuth = false;
    localStorage.setItem("user", JSON.stringify(user));
  }, 3000);
}

export function getUser() {
  const userStr = localStorage.getItem("user");
  return JSON.parse(userStr);
}
