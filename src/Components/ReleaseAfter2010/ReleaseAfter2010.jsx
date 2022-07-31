import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../../axios";

function ReleaseAfter2010() {
  const [moviesList, setMoviesList] = useState([]);
  useEffect(() => {
    axios
      .get("/movies-2010", {
        headers: {
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InBoaW5haGFzIiwiaWF0IjoxNjU5MjYxNzUwfQ.9jhk57xRs6L1EEcXOBedLg-1XcZ0V4BVXAcgMuEkauA",
        },
      })
      .then((response) => {
        //console.log(response.data.data);
        setMoviesList(response.data.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        window.alert(err.response.data.message);
      });
  }, []);

  return (
    <div>
      <h5>Movies released on and after 2010</h5>
      <div className="mt-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Movie Name</th>
              <th scope="col">Year of release</th>
            </tr>
          </thead>
          <tbody>
            {moviesList.map((movie) => {
              return (
                <tr>
                  <th scope="row">{movie.movieName}</th>
                  <td>{movie.yearOfRelease}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReleaseAfter2010;
