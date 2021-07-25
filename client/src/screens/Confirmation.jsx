import React from "react";

export default function Confirmation() {
  return (
    <div id="confirmReq">
      <h2 className="subtitles">Confirmation</h2>
      <section id="confirmBody">
        <p>
          Your exchange request has been confirmed! To contact the barterer for
          approval or more information <u id="confirmLink">click here</u>.
        </p>
      </section>
    </div>
  );
}
