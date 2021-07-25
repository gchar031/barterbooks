import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getBook } from "../services/books";

export default function BookDetail(props) {
  const { students, categories, currentStudent } = props;
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    async function handleDetails(id) {
      const found = await getBook(id);
      setBook(found);
    }
    handleDetails(id);
  }, [id]);

  console.log(currentStudent)
  const postedDate = new Date(book.created_at).toLocaleDateString();
  const student = students.find((student) => student.id === book.student_id);
  const category = categories.find((catg) => catg.id === book.category_id);
  
  return (
    <div className="bookDetails">
      <h2 className="subtitles">Book Detail</h2>
      <h3>{book.title}</h3>
      <img src={book.img_url} alt={book.title} />
      <hr id="detail_divider" />
      <section className="details">
        <p>Author: {book.author}</p>
        <p>
          Edition, Year: {book.edition}, {book.year}
        </p>
        <label>Description:</label>
        <br />
        <textarea
          id="descDetail"
          rows="5"
          cols="15"
          readOnly
          value={book.description}
        />

        <br />
        {category ? <p>Category: {category.name}</p> : <p>Category: N/A </p>}

        <p>Exchange Item: {book.exchange_item}</p>
        <p>Exchange Counter: {book.exchange_counter}</p>
        <p>Request Counter: {book.req_counter}</p>
        {student ? <p>Barterer: {student.username}</p> : <p>Barterer: N/A </p>}
        <p>Date Posted: {postedDate}</p>
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
            <Link to={`/books/confirmation/${student?.id}`}>
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
