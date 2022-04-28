import { AxiosResponse } from "axios";
import { BaseApi } from "../index";

import { IGitUserResponse } from "./types";

export const getGitUser = async (): Promise<IGitUserResponse> => {
  const response = await BaseApi.get<
    IGitUserResponse,
    AxiosResponse<IGitUserResponse>
  >(`/ThiagoSavir`);
  return response.data;
};
