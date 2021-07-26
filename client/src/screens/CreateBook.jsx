import { useState } from "react";
import { Redirect } from "react-router-dom";
import "../styles/CreateEditForm.css";

export default function CreateBook(props) {
  const { handleCreate, categories, currentStudent } = props;
  console.log(currentStudent)
  if (currentStudent.id === null) {
    <Redirect exact path="/create"/>
  }
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    edition: 0,
    year: 2000,
    description: "",
    img_url: "",
    exchange_item: "",
    student_id: currentStudent.id,
    category_id: 1,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setBookData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <form
      id="createBook"
      className="book-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(currentStudent.id, bookData);
      }}
    >
      <h2 className="subtitles">Create Book</h2>
      <label htmlFor="title">Title: </label>
      <input
        type="text"
        name="title"
        value={bookData.title}
        required
        onChange={handleChange}
      />
      <br />
      <label htmlFor="author">Author: </label>
      <input
        type="text"
        name="author"
        value={bookData.author}
        required
        onChange={handleChange}
      />
      <br />
      <label htmlFor="year">
        Year:
        <input
          type="number"
          name="year"
          value={bookData.year}
          min="1700"
          max="2099"
          step="1"
          required
          onChange={handleChange}
        />
      </label>
      <label htmlFor="edition">
        Editon:
        <input
          type="number"
          name="edition"
          value={bookData.edition}
          min="0"
          max="100"
          required
          onChange={handleChange}
        />{" "}
      </label>
      <br />
      <label htmlFor="category">Category: </label>
      <select name="category">
        {categories.map((category) => {
          return (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          );
        })}
      </select>
      <br />
      <label htmlFor="img_url">Image URL: </label>
      <input
        type="text"
        name="img_url"
        value={bookData.img_url}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="exchange_item">Exchange Item: </label>
      <input
        type="text"
        name="exchange_item"
        value={bookData.exchange_item}
        placeholder="Item that you wish to exchange for."
        onChange={handleChange}
        required
      />
      <br />
      <label htmlFor="description">Description: </label>
      <br />
      <br />
      <textarea
        name="description"
        value={bookData.description}
        required
        onChange={handleChange}
        rows="5"
        cols="20"
      ></textarea>
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
