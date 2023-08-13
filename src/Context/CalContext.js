import { createContext } from "react";
import { useCalProvider } from "../hooks/calHook";

const initialState = {
  cal: {},
  setCal: () => {},
};

export const CalContext = createContext(initialState);

export const CalProvider = ({ children }) => {
  const calValue = useCalProvider();
  return <CalContext.Provider value={calValue}>{children}</CalContext.Provider>;
};
