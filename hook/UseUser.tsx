import { UserContext } from "@/context/UserContext";
import { useContext } from "react"

export const UseUser = () => {

    const context = useContext(UserContext);
    if (!context) {
        throw new Error("fora do escopo do contexto");
    }

    return context
    
}