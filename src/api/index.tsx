import axios from "axios";

const { create } = axios;

export const BaseApi = create({ baseURL: `${process.env.REACT_APP_API_URL}` });
