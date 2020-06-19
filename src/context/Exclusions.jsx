import { createContext } from "react";

export const ExclusionsContext = createContext({
  exclusions: undefined,
  setExclusions: () => {
    throw new Error("setExclusions() not implemented");
  },
});
