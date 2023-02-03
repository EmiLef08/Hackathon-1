import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

// eslint-disable-next-line react/prop-types
export function UserContextProvider({ children }) {
  const [city, setCity] = useState("");

  return (
    <UserContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        city,
        setCity,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
