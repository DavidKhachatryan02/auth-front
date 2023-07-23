import { useState, useMemo, useCallback, useEffect } from 'react';
import Cookies from "js-cookie";
import { UserContext } from '../contexts/userContext';
import api from "../services/api";

const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const setUser = useCallback((user) => {
      setUserData(user);
    }, []);
    
    const login = useCallback((user) => {
      Cookies.set("accessToken", user.accessToken);

      setUserData(user);
    }, []);

    const logout = useCallback(() => {
      Cookies.remove('accessToken');
      setUserData(null);
    }, []); 
  
    const contextValue = useMemo(() => ({
      login, 
      logout,
      loaded,
      setUser,
      user: userData,
    }), [userData, setUser, loaded]);
  
    useEffect(() => {
      let mounted = true;
      
      const loadUser = async () => {
        const accessToken = Cookies.get("accessToken");
      
        if (accessToken) {
          const { data } = await api.getMe();
          
          if (mounted) {
            setUser(data);
            setLoaded(true);
          }
        } else {
          setLoaded(true);
        }
      };

      loadUser();
        
      return () => {
        mounted = false;
      };
    }, []);

    return (
      <UserContext.Provider value={contextValue}>
        {children}
      </UserContext.Provider>
    );

};

export default UserProvider;