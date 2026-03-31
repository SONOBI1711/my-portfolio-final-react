const EMAIL = "hoaison1711@gmail.com";
const PASSWORD = "123456";

export const login = (email: string, password: string) => {
  if (email === EMAIL && password === PASSWORD) {
    localStorage.setItem("user", email);
    return true;
  }
  return false;
};

export const logout = () => {
  console.log("LOGOUT RUNNING"); // debug
  localStorage.removeItem("user");
};

export const getUser = () => {
  return localStorage.getItem("user");
};

export const isAuthenticated = () => {
  return localStorage.getItem("user") !== null;
};
