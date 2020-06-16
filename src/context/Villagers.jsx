import { createContext } from "react";

export const VillagersContext = createContext({
    villagers: undefined,
    setVillagers: () => {
        throw new Error('setVillagers() not implemented');
    }
});