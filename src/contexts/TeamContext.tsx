import { createContext, ReactNode, useContext, useState } from "react";

type Type = {
  type: { name: string };
};

type Pokemon = {
  id: string;
  name: string;
  types?: Type[];
  type: string;
  img: string;
};

type IteamContextData = {
  team: Pokemon[] | undefined;
  setTeam: React.Dispatch<React.SetStateAction<Pokemon[]>>;
  removeMember: Pokemon[] | undefined;
  setRemoveMenber: React.Dispatch<React.SetStateAction<Pokemon[]>>;
  isChange: boolean;
  setIsChange: React.Dispatch<React.SetStateAction<boolean>>;
};

export const teamContext = createContext({} as IteamContextData);

interface teamProviderProps {
  children: ReactNode;
}

export function TeamProvider({ children }: teamProviderProps) {
  const [team, setTeam] = useState([]);
  const [removeMember, setRemoveMenber] = useState([]);
  const [isChange, setIsChange] = useState(false);

  return (
    <teamContext.Provider
      value={{
        setTeam,
        team,
        removeMember,
        setRemoveMenber,
        isChange,
        setIsChange,
      }}
    >
      {children}
    </teamContext.Provider>
  );
}

export const useTeam = () => useContext(teamContext);
