import api from "./api-config";

export const getAllBooks = async () => {
  const resp = await api.get("/books");
  return resp.data;
};
