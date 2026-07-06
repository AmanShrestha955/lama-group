"use client";
import { useState, createContext, useContext, ReactNode } from "react";

const LoaderContext = createContext({
  isLoaded: false,
  setIsLoaded: (value: boolean) => {},
});

export const LoaderProvider = ({ children }: { children: ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <LoaderContext.Provider value={{ isLoaded, setIsLoaded }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => {
  return useContext(LoaderContext);
};
