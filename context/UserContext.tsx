'use client'

import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
import { UserProps } from "@/types/user";

export interface UserContextType {
    user: UserProps | null;
    setUser: Dispatch<SetStateAction<UserProps | null>>;
}
export const UserContext = createContext<UserContextType | undefined>(undefined);


interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
    const [user, setUser] = useState<UserProps | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
