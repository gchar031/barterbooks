import { Link } from "react-router-dom";

export default function Books(props) {
  const { bookList, students} = props;
  console.log(bookList);
  return (
    <div className="booksList" key={1}>
      {bookList.map(book => {
        return (
          <Link to={`/books/${book.id}`}>
            <div className="bookDiv" key={book.id}>
              <h2>{book.title}</h2>
              <section className="bookPreview" key={book.id}>
                <p key={book.id}>Exchange Item: {book.exchange_item}</p>
                <p>Request Counter: {book.req_counter}</p>
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
  )
}
