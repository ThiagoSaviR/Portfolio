import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface IbuttonProps {
  id: string;
  setId: Dispatch<SetStateAction<string>>;
  px: number;
  setPx: Dispatch<SetStateAction<number>>;
}

export const ButtonContext = createContext<IbuttonProps>({} as IbuttonProps);

export const ButtonProvider: React.FC = ({ children }) => {
  const [id, setId] = useState<string>("");
  const [px, setPx] = useState<number>(0);
  return (
    <ButtonContext.Provider value={{ id, setId, px, setPx }}>
      {children}
    </ButtonContext.Provider>
  );
};

export const useButton = () => useContext(ButtonContext);
