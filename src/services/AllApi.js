import { serverUrl } from "./BaseUrl";
import { CommonApi } from "./CommonApi";

export const regiserUserAPI = async (reqBody) => {
  return await CommonApi("POST", `${serverUrl}/register`, reqBody, "");
};

export const loginUserAPI = async (reqBody) => {
  return await CommonApi("POST", `${serverUrl}/login`, reqBody, "");
};

export const messageUserAPI = async (reqBody, reqHeader) => {
  return await CommonApi(
    "POST",
    `${serverUrl}/userMessages`,
    reqBody,
    reqHeader
  );
};
export const getMessageUserAPI = async () => {
  return await CommonApi("GET", `${serverUrl}/message`, "", "");
};
