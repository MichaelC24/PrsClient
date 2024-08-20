import { createContext, useContext, useState } from "react";
import { User } from "./Users";

export interface UserContextType {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

// Default context value
const defaultContextValue: UserContextType = {
  user: undefined,
  setUser: () => {}, // No-op function
};

export const UserContext = createContext<UserContextType>(defaultContextValue);

export function useUserContext(): UserContextType {
  const userContext = useContext(UserContext);
  if (userContext === undefined) {
    throw new Error("UserContext must be used within a UserContext.Provider");
  }
  return userContext;
}
