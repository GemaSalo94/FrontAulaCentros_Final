import React, { createContext, useState, useContext, useEffect } from "react";
import { getToken, setToken, removeToken } from "../utils/tokenUtils";

// Crear el contexto
const AuthContext = createContext(null);

// Proveedor de autenticación
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setAuthToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Inicializar desde localStorage
  useEffect(() => {
    const savedToken = getToken();
    if (savedToken) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setAuthToken(savedToken);
      // Aquí puedes decodificar el token para obtener info del usuario
      try {
        const payload = JSON.parse(atob(savedToken.split(".")[1]));
        setUser({
          email: payload.sub,
          roles: payload.roles ? payload.roles.split(",") : [],
        });
      } catch (e) {
        console.error("Error decoding token:", e);
        removeToken();
      }
    }
    setLoading(false);
  }, []);

  const login = (token) => {
    setAuthToken(token);
    setToken(token);
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setUser({
        email: payload.sub,
        roles: payload.roles ? payload.roles.split(",") : [],
      });
    } catch (e) {
      console.error("Error decoding token:", e);
    }
  };

  const logout = () => {
    setAuthToken(null);
    setUser(null);
    removeToken();
  };

  const isAuthenticated = () => {
    return token !== null;
  };

  const value = {
    user,
    token,
    loading,
    login,
    logout,
    isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook personalizado para usar el contexto
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de AuthProvider");
  }
  return context;
};
