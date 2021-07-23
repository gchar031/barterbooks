import { useState, useEffect } from "react"
import { Switch, Route, useHistory } from "react-router-dom"

import { getAllBooks, getBook, createBook, updateBook, deleteBook} from '../services/books'
import { getAllCategories } from '../services/categories'

import CreateBook from "../screens/CreateBook"
import EditBook from "../screens/EditBook"
import BookDetail from '../screens/BookDetail'
import Books from "../screens/Books";
import Home from '../screens/Home'

export default function MainContainer() {
  const [bookList, setBookList] = useState([])
  const [book, setBook] = useState({})
  const [catergories, setCategories] = useState([])
  const history = useHistory()

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await getAllBooks()
      setBookList(response)
    }
    const fetchCategories = async () => {
      const response = await getAllCategories()
      setCategories(response)
    }
    fetchBooks()
    fetchCategories()
  }, [])

  async function handleCreate(studentID, data) {
    const newBook = await createBook(studentID, data)
    setBookList((prevState) => [
      ...prevState,
      newBook
    ])
    history.push(`/books/${newBook.id}`)
  }
  
  async function handleUpdate(studentID, bookID, data) {
    const updatedBook = await updateBook(studentID, bookID, data)
    setBookList((prevState) => prevState.map(book => {
      return book.id === Number(updatedBook.id) ? updatedBook : book
    }));
    history.push(`/books`);
  }

  async function handleDelete(studentID, bookID) {
    await deleteBook(studentID, bookID)
    setBookList((prevState) => prevState.filter(item => item.id !== bookID))
  }

  async function handleDetails(id) {
    const found = await getBook(id)
    setBook(found)
  }

  async function categoriesList() {
    const list = await getAllCategories()
    setCategories(list)
  }
  
  return (
    <Switch>
      <Route path="/edit/:id">
        <EditBook
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
          catergories={catergories}
        />
      </Route>
      <Route path="/books/:id">
        <BookDetail handleDetails={handleDetails} />
      </Route>
      <Route path="/create">
        <CreateBook handleCreate={handleCreate} catergories={catergories} />
      </Route>
      <Route path="/books">
        <Books bookList={bookList} />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
