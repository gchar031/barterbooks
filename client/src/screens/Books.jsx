import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllBooks } from "../services/books";
import '../styles/Books.css'

export default function Books(props) {
  const { students, categories } = props;
  const [bookList, setBookList] = useState([])
  const [allList, setAllList] = useState(bookList)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await getAllBooks();
      setBookList(response);
      setAllList(response)
    };
    fetchBooks()
  }, [])
  
  
  function sortBooks(categoryID) {
    if (categoryID !== "all") {
      const list = allList.filter(
        (book) => book.category_id === Number(categoryID)
      );
      setBookList(list);
    } else {
      setBookList(allList);
    }
  }
  // reset to show all books on page
  function resetList() {
    setBookList(allList)
  }

  
  return (
    <div className="books-list" key={1}>
      <h2 className="subtitles">Books</h2>
      <div id="control-list">
        <p onClick={resetList} id="reset">
          Reset
        </p>
        <select
          name="category"
          className={"sort-category " + selected}
          onChange={(e) => {
            sortBooks(e.target.value)
            setSelected('selected')
          }
          }
          defaultValue="all"
        >
          <option value="all">Select A Category to Sort By</option>
          {categories.map((category) => {
            return (
              <option value={category.id} key={category.id} className="options">
                {category.name}
              </option>
            );
          })}
          </select>
      </div>
      {bookList.map((book) => {
        return (
          <Link to={`/books/${book.id}`} className="book-div-tablet">
            <div className="book-div" key={book.id}>
              <div className="img-container">
                <img src={book.img_url} alt={book.title} className="list-img" />
              </div>
              <h4 className="books-titles">{book.title}</h4>
              <section className="bookPreview" key={book.id}>
                <p key={book.exchange_item}>
                  Exchange Item: {book.exchange_item}
                </p>
                <p key={book.req_counter}>
                  Request Counter: {book.req_counter}
                </p>
                {students.map((student) => {
                  return student.id === book.student_id ? (
                    <p>Barterer: {student.username}</p>
                  ) : (
                    ""
                  );
                })}
                <br />
              </section>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
