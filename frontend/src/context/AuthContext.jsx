import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [authuser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const checkAuth = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/user/me`,
          { withCredentials: true }
        );
        setAuthUser(res.data.user);
      } catch (error) {
        setAuthUser(null);
      } finally {
        setLoading(false);
      }
    };
    

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ authuser, setAuthUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
