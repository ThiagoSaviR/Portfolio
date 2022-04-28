import React, { useContext, useState, createContext, Dispatch, SetStateAction } from "react";
import { getGitRepositories } from "../../api/gitRepositories/index";
import { IGitRepositoriesResponse } from "../../api/gitRepositories/types";

interface IGitRepositoriesData {
  data: IGitRepositoriesResponse[];
  setData: Dispatch<SetStateAction<IGitRepositoriesResponse[]>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  generateGitRepositoriesData: () => Promise<void>;
  error: string | null;
}

export const GitRepositoriesApiContext = createContext<IGitRepositoriesData>(
  {} as IGitRepositoriesData
);

export const GitRepositoriesApiProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<IGitRepositoriesResponse[]>([] as IGitRepositoriesResponse[]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    
    const generateGitRepositoriesData = async () => {
        setLoading(true);

        await getGitRepositories ()
      .then((res: IGitRepositoriesResponse[]) => {
        setData(res);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError('Erro ao carregar...');
      });
  };

  return (
    <GitRepositoriesApiContext.Provider
      value={{
        data,
        setData,
        loading,
        setLoading,
        generateGitRepositoriesData,
        error,
      }}
    >
      {children}
    </GitRepositoriesApiContext.Provider>
  );
};
    
export const useGitRepositories = () => useContext(GitRepositoriesApiContext);