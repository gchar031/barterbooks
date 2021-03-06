import api from "./api-config";

export const getAllBooks = async () => {
  const resp = await api.get("/books");
  return resp.data;
};

export const getBook = async (id) => {
  const resp = await api.get(`/books/${id}`);
  return resp.data;
};

export const createBook = async (studntID, formData) => {
  const resp = await api.post(`/students/${studntID}/books`, {
    book: formData,
  });
  return resp.data;
};

export const updateBook = async (studntID, bookId, formData) => {
  const resp = await api.put(`/students/${studntID}/books/${bookId}`, {
    book: formData,
  });
  return resp.data;
};

export const deleteBook = async (studntID, bookId) => {
  const resp = await api.delete(`/students/${studntID}/books/${bookId}`);
  return resp.data;
};
