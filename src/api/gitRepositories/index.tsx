import { AxiosResponse } from "axios";
import { BaseApi } from "../index";

import { IGitRepositoriesResponse } from "./types";

export const getGitRepositories = async (): Promise<IGitRepositoriesResponse[]> => {
  const response = await BaseApi.get<
    IGitRepositoriesResponse[],
    AxiosResponse<IGitRepositoriesResponse[]>
  >(`/ThiagoSavir/starred`);
  return response.data;
};
