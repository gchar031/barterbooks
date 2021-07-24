import { Link } from "react-router-dom";
import fillerImg from "../assets/images/fillerimg.jpeg";

export default function Books(props) {
  const { bookList} = props;
  console.log(bookList);
  console.log(fillerImg, typeof fillerImg)
  return (
    <div className="booksList" key={1}>
      {bookList.map(book => {
        return (
          <Link to={`/books/${book.id}`}>
          <div className="bookDiv" key={book.id}>
            <h2>{book.title}</h2>
            <section className="bookPreview">
              <p>Exchange Item: {book.exchange_item}</p>
              <p>Request Counter: {book.req_counter}</p>
              <p>Barterer: </p>
            </section>
            </div>
          </Link>
        );
        
      })}
    </div>
  )
}
