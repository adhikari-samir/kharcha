import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState([
    {
      email: "Dashboard@gmail.com",
      password: "Dashboard",
      role: "Admin",
      Token: "",
    },
    {
      email: "User@gmail.com",
      password: "User",
      role: "User",
      Token: "abc",
    },
    {
      email: "hancy@gmail.com",
      password: "User",
      role: "User",
      Token: "",
    },
  ]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

export { UserProvider, useUserContext };
