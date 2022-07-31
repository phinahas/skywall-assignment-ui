import React, { useEffect, useState } from "react";
import axios from "../../axios";

function RatingResultComponent() {
  const [moviesList, setMoviesList] = useState([]);
  useEffect(() => {
    axios
      .get("/movies-rating-8.0", {
        headers: {
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InBoaW5haGFzIiwiaWF0IjoxNjU5MjYxNzUwfQ.9jhk57xRs6L1EEcXOBedLg-1XcZ0V4BVXAcgMuEkauA",
        },
      })
      .then((response) => {
        //console.log(response.data.data);
        setMoviesList(response.data.data);
      })
      .catch((error) => {
        window.alert(error.response.data.message);
      });
  }, []);

  return (
    <div>
      <h5>Movies with minimum rating 8.0</h5>
      <div className="mt-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Director</th>
              <th scope="col">Movie Name</th>
              <th scope="col">IMDB Rating</th>
            </tr>
          </thead>
          <tbody>
            {moviesList.map((movie) => {
              return (
                <tr>
                  <td>{movie.movieDirector}</td>
                  <td>{movie.movieName}</td>
                  <th>{movie.rating}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RatingResultComponent;
