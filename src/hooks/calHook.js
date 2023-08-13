import { CalContext } from "../Context/CalContext";
import { useContext, useState } from "react";

export const useCal = () => {
  return useContext(CalContext);
};

export const useCalProvider = () => {
  const [cal, setCal] = useState({ num: 0, res: 0, sign: "" });
  return { cal, setCal };
};
