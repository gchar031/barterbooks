import { useState, useEffect } from "react";
import fillerImg from "../assets/images/fillerimg.jpeg";
import { verifyStudent } from "../services/auth";
export default function CreateBook(props) {
  const { handleCreate, categories} = props;
  const [currentStudent, setCurrentS] = useState(null);

    useEffect(() => {
      const handleVerify = async () => {
        const studentData = await verifyStudent();
        setCurrentS(studentData);
      };
      handleVerify();
    }, []);
  
  console.log("My student", currentStudent);
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
    setBookData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  return (
    <form id="createBook" onSubmit={handleCreate}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        name="title"
        value={bookData.title}
        required
        onChange={handleChange}
      />
      <br />
      <label htmlFor="author">Author:</label>
      <input
        type="text"
        name="author"
        value={bookData.author}
        required
        onChange={handleChange}
      />
      <br />
      <label htmlFor="edition">Editon:</label>
      <input
        type="number"
        name="edition"
        value={bookData.edition}
        required
        onChange={handleChange}
      />
      <br />
      <label htmlFor="year">Year:</label>
      <input
        type="number"
        name="year"
        value={bookData.year}
        minLength="4"
        maxLength="4"
        required
        onChange={handleChange}
      />
      <br />
      <label htmlFor="description">Description:</label>
      <input
        type="text"
        name="description"
        value={bookData.description}
        required
        onChange={handleChange}
      />
      <br />
      <label htmlFor="img_url">Image URL:</label>
      <input
        type="text"
        name="img_url"
        value={bookData.img_url}
        required
        onChange={handleChange}
      />
      <br />
      <label htmlFor="exchange_item">Exchange Item:</label>
      <input
        type="text"
        name="exchange_item"
        value={bookData.exchange_item}
        placeholder="Item that you wish to exchange for."
        onChange={handleChange}
      />
      <br />
      <label htmlFor="category">Category:</label>
      <select name="category">
        {categories.map((category) => {
          return <option value={category.id} key={category.id}>{category.name}</option>;
        })}
      </select>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
