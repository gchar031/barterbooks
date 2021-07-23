import React from 'react'

export default function Books(props) {
  const { bookList } = props
  console.log(bookList)
  return (
    <div className="booksList">
      {bookList.map(book => {
        return (
          <div className="bookDiv">
          <h2>{book.title}</h2>
          <section className="bookPreview">
            <p>Exchange Item:{book.exchange_item}</p>
            <p>Request Counter:{book.req_counter}</p>
            <p>Barterer:{book.student.username}</p>
          </section>
        </div>
        )
        
      })}
    </div>
  )
}
