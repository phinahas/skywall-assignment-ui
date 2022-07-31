import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../../axios";

function ReleaseAfter2010() {
  const [moviesList, setMoviesList] = useState([]);
  useEffect(() => {
    
    axios.get("/movies-2010").then((response) => {
      //console.log(response.data.data);
      setMoviesList(response.data.data);
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
