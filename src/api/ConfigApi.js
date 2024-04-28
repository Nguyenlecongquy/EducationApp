import { create } from "apisauce";

const api = create({
  baseURL: "https://e-learning-421208.as.r.appspot.com/api",
  // headers: { "X-API-KEY": process.env.EXPO_PUBLIC_TOKEN_API },
});

export default api;
