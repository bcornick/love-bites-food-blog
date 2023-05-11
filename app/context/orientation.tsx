'use client';

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

const OrientationContext = createContext({});

interface OrientationContextProviderProps {
  children: React.ReactNode;
}

export type OrientationContextType = {
  orientation: boolean;
  setOrientation: Dispatch<SetStateAction<boolean>>;
};

export const OrientationContextProvider = ({
  children,
}: OrientationContextProviderProps) => {
  const [orientation, setOrientation] = useState(false); // true: vertical, false: horizontal

  return (
    <OrientationContext.Provider value={{ orientation, setOrientation }}>
      {children}
    </OrientationContext.Provider>
  );
};

export const useOrientationContext = () => useContext(OrientationContext);
