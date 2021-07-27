import { useParams } from "react-router-dom";
import "../styles/Confirmation.css";

export default function Confirmation(props) {
  const { students } = props;
  const { id } = useParams();
  const barterer = students.find((student) => student.id === Number(id));

  return (
    <div id="confirmReq">
      <h2 className="subtitles confirm-title">Confirmation</h2>
      <section id="confirmBody">
        <p>
          Your exchange request has been confirmed! To contact the barterer for
          approval or more information{" "}
          <a href={"mailto:" + barterer?.email}>click here</a>.
        </p>
      </section>
    </div>
  );
}
