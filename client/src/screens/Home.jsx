import '../styles/Home.css'
import { Link } from 'react-router-dom';

export default function Home() {
  
  return (
    <div className="about">
      <h2 className="subtitles about-title">About</h2>
      <p>
        College supllies can be very expensive and add up over time especially
        when it comes to books. If you need a book for an upcoming course view
        all the barters we have by clicking the button below!
      </p><p id="about-link">
      <Link to="/books">
        View Barters for Books
      </Link></p>
    </div>
  );
}
