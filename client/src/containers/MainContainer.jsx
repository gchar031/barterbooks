import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import fillerImg from "../assets/images/fillerimg.jpeg";

import {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
} from "../services/books";
import { getAllCategories } from "../services/categories";
import { getAllStudents } from "../services/students";
import { verifyStudent } from "../services/auth";

import CreateBook from "../screens/CreateBook";
import EditBook from "../screens/EditBook";
import BookDetail from "../screens/BookDetail";
import Confirmation from "../screens/Confirmation";
import Books from "../screens/Books";
import Home from "../screens/Home";

export default function MainContainer() {
  const [currentStudent, setCurrentS] = useState(null);
  const [bookList, setBookList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [students, setStudents] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await getAllBooks();
      setBookList(response);
    };
    const fetchCategories = async () => {
      const response = await getAllCategories();
      setCategories(response);
    };
    const fetchStudents = async () => {
      const response = await getAllStudents();
      setStudents(response);
    };
    const handleVerify = async () => {
      const studentData = await verifyStudent();
      setCurrentS(studentData);
    };
    handleVerify();
    fetchBooks();
    fetchCategories();
    fetchStudents();
  }, []);

  async function handleCreate(studentID, data) {
    // to have default value for images
    if (data.img_url === "" || data.img_url === null) {
      data.img_url = fillerImg;
    }
    const newBook = await createBook(studentID, data);
    setBookList((prevState) => [...prevState, newBook]);
    history.push(`/books`);
  }

  async function handleUpdate(studentID, bookID, data) {
    // to have default value for images
    if (data.img_url === "" || data.img_url === null) {
      data.img_url = fillerImg;
    }
    const updatedBook = await updateBook(studentID, bookID, data);
    setBookList((prevState) =>
      prevState.map((book) => {
        return book.id === Number(updatedBook.id) ? updatedBook : book;
      })
    );
    history.push(`/books`);
  }

  async function handleDelete(studentID, bookID) {
    await deleteBook(studentID, bookID);
    setBookList((prevState) => prevState.filter((item) => item.id !== bookID));
    history.push(`/books`);
  }

  return (
    <Switch>
      <Route path="/edit/:id">
        <EditBook
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
          categories={categories}
          bookList={bookList}
          currentStudent={currentStudent}
        />
      </Route>
      <Route path="/books/:id">
        <BookDetail
          students={students}
          currentStudent={currentStudent}
          categories={categories}
        />
      </Route>
      <Route path="/books/confirmation">
        <Confirmation bookList={bookList} currentStudent={currentStudent} />
      </Route>
      <Route path="/create">
        <CreateBook
          handleCreate={handleCreate}
          categories={categories}
          currentStudent={currentStudent}
        />
      </Route>
      <Route path="/books">
        <Books categories={categories} students={students} />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
