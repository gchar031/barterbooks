import { useState, useEffect } from "react";
import { useParams } from "react-router";
import "../styles/CreateEditForm.css";

export default function EditBook(props) {
  const { handleUpdate, handleDelete, categories, bookList } = props;
  const { id } = useParams();
  // console.log(id)
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    edition: 0,
    year: 2000,
    description: "",
    img_url: "",
    exchange_item: "",
    student_id: 0,
    category_id: 1,
  });

  useEffect(() => {
    const prefillFormData = () => {
      const foundBook = bookList.find((book) => book.id === Number(id));
      setBookData({
        title: foundBook.title,
        author: foundBook.author,
        edition: foundBook.edition,
        year: foundBook.year,
        description: foundBook.description,
        img_url: foundBook.img_url,
        exchange_item: foundBook.exchange_item,
        student_id: foundBook.student_id,
        category_id: foundBook.category_id,
      });
    };
    if (bookList.length) {
      prefillFormData();
    }
  }, [bookList, id]);

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
    setBookData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  const categoryPrev = categories.find(
    (catg) => catg.id === bookData.category_id
  );

  return (
    <form
      id="editBook"
      className="book-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdate(bookData.student_id, id, bookData);
      }}
    >
      <h2 className="subtitles">Edit Book</h2>
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
      <label htmlFor="year" className="form-lbl">
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
      <label htmlFor="edition" className="form-lbl">
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
        Category:{" "}
      </label>
      <select
        name="category_id"
        className="category-selection"
        defaultValue={categoryPrev?.id}
        onChange={handleChange}
      >
        {categories.map((category) => {
          return categoryPrev?.id === category.id ? (
            <option value={category.id} key={category.id} selected>
              {category.name}
            </option>
          ) : (
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
      <button type="submit">Update</button>
      <button
        type="button"
        onClick={() =>
          // e.preventDefault();
          handleDelete(bookData.student_id, id)
        }
      >
        Delete
      </button>
    </form>
  );
}
