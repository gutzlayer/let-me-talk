import { useContext } from "react";
import { AuthContext } from "../component/contexts/AuthContext";

export function useAuth() {
  const value = useContext(AuthContext);

  return value;
  
}
