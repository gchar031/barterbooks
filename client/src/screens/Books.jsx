import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllBooks } from "../services/books";

export default function Books(props) {
  const { students, categories } = props;
  const [bookList, setBookList] = useState([])
  const [allList, setAllList] = useState(bookList)
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
    <div className="booksList" key={1}>
      <button type="button" onClick={resetList}>Reset</button>
      <select name="category" id="sortCategory" onChange={(e) => sortBooks(e.target.value)} defaultValue="all">
        <option value="all" >Select A Category to Sort By</option>
        {categories.map((category) => {
          return (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          );
        })}
      </select>
      { bookList.map((book) => {
        return (
          <Link to={`/books/${book.id}`}>
            <div className="bookDiv" key={book.id}>
              <h2>{book.title}</h2>
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
              </section>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
