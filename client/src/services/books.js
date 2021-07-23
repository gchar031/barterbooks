import api from "./api-config";

export const getAllBooks = async () => {
  const resp = await api.get("/books");
  return resp.data;
};

export const getBook = async (studntID, bookId) => {
  const resp = await api.get("/books");
  return resp.data;
};

export const createBook = async (studntID, bookId,formData) => {
  const resp = await api.get(`/students/${studntID}/books${bookId}`, {
    book: formData,
  });
  return resp.data;
};

export const updateBook = async (studntID, bookId, formData) => {
  const resp = await api.get(`/students/${studntID}/books${bookId}`, { book: formData});
  return resp.data;
};

export const deleteBook = async (id) => {
  const resp = await api.delete("/books");
  return resp.data;
};