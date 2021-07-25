import {useParams } from "react-router-dom";

export default function Confirmation(props) {
  const { students } = props
  const { id } = useParams()
  const barterer = students.find((student) => student.id === Number(id));
  console.log(barterer, students,id)
  return (
    <div id="confirmReq">
      <h2 className="subtitles">Confirmation</h2>
      <section id="confirmBody">
        <p>
          Your exchange request has been confirmed! To contact the barterer for
          approval or more information <a href={"mailto:" + barterer?.email}>click here</a>.
        </p>
      </section>
    </div>
  );
}
