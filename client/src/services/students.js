import api from "./api-config";

export const getAllStudents = async () => {
  const resp = await api.get("/students");
  return resp.data;
};
