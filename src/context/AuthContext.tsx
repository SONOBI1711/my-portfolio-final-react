import { createContext, useContext, useState, useEffect } from "react";

type AuthContextType = {
  user: string | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

const EMAIL = "hoaison1711@gmail.com";
const PASSWORD = "123456";

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(stored);
  }, []);

  const login = (email: string, password: string) => {
    if (email === EMAIL && password === PASSWORD) {
      localStorage.setItem("user", email);
      setUser(email);
      return true;
    }
    return false;
  };

  const logout = () => {
    console.log("LOGOUT OK");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};
