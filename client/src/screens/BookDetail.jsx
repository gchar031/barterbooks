import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getBook } from "../services/books";
import "../styles/Details.css";

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

  const postedDate = new Date(book.created_at).toLocaleDateString();
  const student = students.find((student) => student.id === book.student_id);
  const category = categories.find((catg) => catg.id === book.category_id);

  return (
    <div className="book-details">
      <h2 className="detail-title">Book Detail</h2>
      <div className="details-container">
        <h3 className="book-title">{book.title}</h3>
        <div className="img-detail-div">
          <img src={book.img_url} alt={book.title} />
        </div>
        <div id="hr-div">
          <span className="diamond" />
          <hr id="detail-divider" />
          <span className="diamond" />
        </div>
        <section className="details">
          <p>Author: {book.author}</p>
          <p>
            Edition, Year: {book.edition}, {book.year}
          </p>

          {category ? <p>Category: {category.name}</p> : <p>Category: N/A </p>}

          <p>Exchange Item: {book.exchange_item}</p>
          <p>Exchange Counter: {book.exchange_counter}</p>
          <p>Request Counter: {book.req_counter}</p>
          {student ? (
            <p>Barterer: {student.username}</p>
          ) : (
            <p>Barterer: N/A </p>
          )}
          <label htmlFor="descDetail" id="desc-detail-lbl">
            Description:
          </label>
          <br />
          <textarea
            id="descDetail"
            name="descDetail"
            rows="10"
            cols="25"
            readOnly
            value={book.description}
          />

          <br />
          <p>Date Posted: {postedDate}</p>
        </section>
        {currentStudent === null ? (
          <div className="details-btns-div">
            <Link to="/register" className="details-btns">
              <button>Request Exchange</button>
            </Link>
            <Link to="/register" className="details-btns">
              <button>Edit</button>
            </Link>
          </div>
        ) : (
          <div className="details-btns-div">
            <Link
              to={`/books/confirmation/${student?.id}`}
              className="details-btns"
            >
              <button>Request Exchange</button>
            </Link>
            <Link to={`/edit/${id}`} className="details-btns">
              <button>Edit</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
