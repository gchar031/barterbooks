import { useState } from "react";
import "../styles/CreateEditForm.css";

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
    student_id: currentStudent?.id,
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
      <label htmlFor="title" className="form-lbl">
        Title:{" "}
      </label>
      <input
        type="text"
        name="title"
        value={bookData.title}
        required
        onChange={handleChange}
      />
      <br />
      <label htmlFor="author" className="form-lbl">
        Author:{" "}
      </label>
      <input
        type="text"
        name="author"
        value={bookData.author}
        required
        onChange={handleChange}
      />
      <br />
      <label htmlFor="img_url" className="form-lbl">
        Image URL:{" "}
      </label>
      <input
        type="text"
        name="img_url"
        value={bookData.img_url}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="exchange_item" className="form-lbl">
        Exchange Item:{" "}
      </label>
      <input
        type="text"
        name="exchange_item"
        value={bookData.exchange_item}
        placeholder="Item that you wish to exchange for."
        onChange={handleChange}
        required
      />
      <br />
      <label htmlFor="year" className="year-input form-lbl">
        Year:
      </label>
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
      <label htmlFor="edition" className="edition-input form-lbl">
        Edition:
      </label>
      <input
        type="number"
        name="edition"
        value={bookData.edition}
        min="0"
        max="100"
        required
        onChange={handleChange}
      />{" "}
      <br />
      <label htmlFor="category" className="category-lbl">
        Category:
      </label>
      <select name="category" className="category-selection">
        {categories.map((category) => {
          return (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          );
        })}
      </select>
      <br />
      <label htmlFor="description" className="desc-lbl">
        Description:{" "}
      </label>
      <br />
      <div className="textarea-container">
        <textarea
          name="description"
          value={bookData.description}
          required
          onChange={handleChange}
          rows="10"
          cols="25"
        ></textarea>
      </div>
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
