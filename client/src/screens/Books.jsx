import React from 'react'

export default function Books(props) {
  const { bookList} = props;
  console.log(bookList);
  return (
    <div className="booksList" key={1}>
      {bookList.map(book => {
        return (
          <div className="bookDiv" key={book.id}>
            <h2>{book.title}</h2>
            <section className="bookPreview">
              <p>Exchange Item: {book.exchange_item}</p>
              <p>Request Counter: {book.req_counter}</p>
              <p>Barterer: </p>
            </section>
          </div>
        );
        
      })}
    </div>
  )
}
