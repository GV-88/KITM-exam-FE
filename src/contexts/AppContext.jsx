import { useContext, createContext, useState, useEffect } from 'react';
import api from "../../services/api";

const STORAGE_PREFIX = import.meta.env.VITE_STORAGE_PREFIX;

const AppContext = createContext();
const storageKey = STORAGE_PREFIX + "token";

export const AppProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem(storageKey));

  useEffect(() => {
    if (token) {
      localStorage.setItem(storageKey, token);
    } else {
      localStorage.removeItem(storageKey);
    }
  }, [token]);

  const getResponse = async (response) => {
    const data = await response;
    if (data?.token) {
      setToken(data.token); 
    }
    return data;
  };

  const register = async (username, password, confirmPassword) => {
    console.log("register?");
    
    return await getResponse(api.register(username, password, confirmPassword));
  }
  
  return <AppContext.Provider value={{ register }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
