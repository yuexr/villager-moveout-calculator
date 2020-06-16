import { createContext } from "react";

export const ResidentsContext = createContext({
    residents: undefined,
    setResidents: () => {
        throw new Error('setResidents() not implemented');
    }
});