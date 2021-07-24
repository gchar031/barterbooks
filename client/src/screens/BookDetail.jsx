import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getBook } from "../services/books";

export default function BookDetail(props) {
  const { students, currentStudent } = props;
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    async function handleDetails(id) {
      const found = await getBook(id);
      setBook(found);
    }
    handleDetails(id);
  }, [id]);

  console.log("2", book, book.created_at);
  // const postedDate = new Date(book.created_at);
  // // const postedDate = "";
  // console.log(postedDate);
  const date1 = new Date("2021-07-24T02:51:53.964Z");
  // Sun Dec 17 1995 03:24:00 GMT..

  console.log(date1);
  const student = students.find((student) => student.id === book.student_id);

  return (
    <div className="bookDetails">
      <h3>{book.title}</h3>
      <section className="details">
        <p>Author: {book.author}</p>
        <p>
          Edition, Year: {book.edition}, {book.year}
        </p>
        <p>Description: {book.description}</p>
        <p>Exchange Item: {book.exchange_item}</p>
        <p>Exchange Counter: {book.exchange_counter}</p>
        <p>Request Counter: {book.req_counter}</p>
        {student ? <p>Barterer: {student.username}</p> : <p>Barterer: N/A </p>}
        {/* <p>Date Posted:{postedDate}</p> */}
      </section>
      {currentStudent === null ? (
        <div className="detailsBtns">
          <Link to="/register">
            <button>Request Exchange</button>
          </Link>
          <Link to="/register">
            <button>Edit</button>
          </Link>
        </div>
      ) : (
        <div className="detailsBtns">
          <Link to="/books/confirmation">
            <button>Request Exchange</button>
          </Link>
          <Link to={`/edit/${id}`}>
            <button>Edit</button>
          </Link>
        </div>
      )}
    </div>
  );
}
