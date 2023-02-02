import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export function UserContextProvider({ children }) {
  const [city, setCity] = useState("");

  return (
    <UserContext.Provider
      value={{
        city,
        setCity,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
