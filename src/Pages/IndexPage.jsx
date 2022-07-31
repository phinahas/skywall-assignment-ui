import React from "react";
import ReleaseAfter2010 from "../Components/ReleaseAfter2010/ReleaseAfter2010";
import "./IndexPageStyle.css";

function IndexPage() {
  return (
    <div className="container">
      <h1>IMDB-QUERIES</h1>
      <div className="nav mt-5">
        <button className="btn btn-info btn-lg">Release aftre 2010</button>
        <button className="btn btn-info btn-lg">Rating 8.0</button>
        <button className="btn btn-info btn-lg">Cast Search</button>
      </div>
      <hr />
      <div>
        <ReleaseAfter2010/>
      </div>
    </div>
  );
}

export default IndexPage;
