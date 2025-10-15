import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Check user login status on refresh
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/user/me`, {
          withCredentials: true,
        });
        setUser(res.data.user);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const logout = async () => {
    await axios.get(`${import.meta.env.VITE_API_URL}/api/user/logout`, {
      withCredentials: true,
    });
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
