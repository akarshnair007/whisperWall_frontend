import axios from "axios";

export const CommonApi = async (httpsMethod, url, reqBody, reqHeader) => {
  const config = {
    method: httpsMethod,
    url,
    data: reqBody,
    headers: reqHeader ? reqHeader : { "Content-Type": "application/json" },
  };

  return await axios(config)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
};
