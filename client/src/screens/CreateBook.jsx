import { useState } from 'react'
import fillerImg from '../assets/images/fillerimg.jpeg'

export default function CreateBook(props) {
  const { handleCreate, categories, currentStudent } = props;
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    edition: 0,
    year: 2000,
    description: "",
    img_url: "",
    exchange_item: "",
    student: currentStudent.id,
    category: 1,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
    setBookData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log("After", name, value);
  }
  return (
    <form id="createBook" onChange={handleChange} onSubmit={handleCreate}>
      <label htmlFor="title">Title:</label>
      <input type="text" name="title" value={bookData.title} required />
      <label htmlFor="author">Author:</label>
      <input type="text" name="author" value={bookData.author} required />
      <label htmlFor="edition">Editon:</label>
      <input
        type="number"
        name="edition"
        value={bookData.edition}
        defaultValue="0"
        required
      />
      <label htmlFor="year">Year:</label>
      <input
        type="number"
        name="year"
        value={bookData.year}
        minLength="4"
        maxLength="4"
        defaultValue="2000"
        required
      />
      <label htmlFor="description">Description:</label>
      <input
        type="text"
        name="description"
        value={bookData.description}
        required
      />
      <label htmlFor="imgUrl">Image URL:</label>
      <input
        type="url"
        name="imgUrl"
        value={bookData.img_url}
        defaultValue={fillerImg}
        required
      />
      <label htmlFor="exchItem">Exchange Item:</label>
      <input
        type="text"
        name="exchItem"
        value={bookData.exchange_item}
        placeholder="Item that you wish to exchange for."
      />
      <label htmlFor="category"></label>
      <select name="category">
        {categories.map((category) => {
          return <option value={category.id}>{category.name}</option>;
        })}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}
