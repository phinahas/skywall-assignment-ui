import React, { useState } from "react";
import CastSearchComponent from "../Components/CastSearchComponent/CastSearchComponent";
import RatingResultComponent from "../Components/RatingResultComponent/RatingResultComponent";
import ReleaseAfter2010 from "../Components/ReleaseAfter2010/ReleaseAfter2010";
import "./IndexPageStyle.css";

function IndexPage() {
  const [releaseButton, setReleaseButton] = useState(false);
  const [ratingButton, setRatingButton] = useState(false);
  const [castButton, setCastButton] = useState(false);
  return (
    <div className="container">
      <h1>IMDB-QUERIES</h1>
      <div className="nav mt-5">
        <button
          className="btn btn-info btn-lg"
          onClick={() => {
            setReleaseButton(!releaseButton);
            setCastButton(false);
            setRatingButton(false);
          }}
        >
          Release aftre 2010
        </button>
        <button
          className="btn btn-info btn-lg"
          onClick={() => {
            setRatingButton(!ratingButton);
            setReleaseButton(false);
            setCastButton(false);
          }}
        >
          Rating 8.0
        </button>
        <button
          className="btn btn-info btn-lg"
          onClick={() => {
            setCastButton(!castButton);
            setRatingButton(false);
            setReleaseButton(false);
          }}
        >
          Cast Search
        </button>
      </div>
      <hr />
      <div>{releaseButton ? <ReleaseAfter2010 /> : null}
      {ratingButton ? <RatingResultComponent/> : null}
      {castButton ? <CastSearchComponent/> : null}

      
      
      </div>
    </div>
  );
}

export default IndexPage;
