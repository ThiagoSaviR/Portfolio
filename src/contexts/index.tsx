import React, { useContext, useState } from "react";
import { createContext, Dispatch, SetStateAction } from "react";
import { getGitUser } from "../api/gitUser/index";
import { IGitUserResponse } from "../api/gitUser/types";

interface IGitUserData {
  data: IGitUserResponse[];
  setData: Dispatch<SetStateAction<IGitUserResponse[]>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  generateGitUserData: () => Promise<void>;
  error: string | null;
}

export const GitUserApiContext = createContext<IGitUserData>(
  {} as IGitUserData
);

export const GitUserApiProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<IGitUserResponse[]>([] as IGitUserResponse[]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    
    const generateGitUserData = async () => {
        setLoading(true);

        await getGitUser ()
      .then((res: IGitUserResponse[]) => {
        setData(res);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError('Erro ao carregar...');
      });
  };

  return (
    <GitUserApiContext.Provider
      value={{
        data,
        setData,
        loading,
        setLoading,
        generateGitUserData,
        error,
      }}
    >
      {children}
    </GitUserApiContext.Provider>
  );
};
    
export const useGitUser = () => useContext(GitUserApiContext);