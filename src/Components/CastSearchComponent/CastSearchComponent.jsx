import React, { useState } from "react";
import axios from "../../axios";

function CastSearchComponent() {
  const [actor1, setActor1] = useState(null);
  const [actor2, setActor2] = useState(null);
  const [moviesList, setMoviesList] = useState([]);
  const [err, setErr] = useState(false);
  const [errMessage,setErrMessage]=useState("Opps! No moives found in our database");

  const searchButton = () => {
    setErr(false);
    if (actor1 != null && actor2 != null) {
      console.log(actor2, actor1);
      axios
        .post("/movies-cast-search", { actor1: actor1, actor2: actor2 },{headers: {
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InBoaW5haGFzIiwiaWF0IjoxNjU5MjYxNzUwfQ.9jhk57xRs6L1EEcXOBedLg-1XcZ0V4BVXAcgMuEkauA",
        }})
        .then((response) => {
          //console.log(response.data.data);
          setMoviesList(response.data.data);
        })
        .catch((err) => {
          //console.log(err.response.data);
          //setErrMessage(err.response.data)
          if(err.response.data.message){
            window.alert(err.response.data.message);
          }
          else{
            setErr(true);
          }
        
        });
    } else {
      window.alert("Please fill both input fields");
    }
  };

  return (
    <div>
      <h5>Search your favorite actors and find their movies together</h5>
      <div
        class="mt-4"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <input
          type="text"
          class="col-md-5"
          placeholder="Actor 1"
          required
          onChange={(e) => setActor1(e.target.value)}
        />
        <input
          type="text"
          class="col-md-5"
          placeholder="Actor 2"
          required
          onChange={(e) => setActor2(e.target.value)}
        />

        <button type="submit" class="btn btn-primary" onClick={searchButton}>
          Search
        </button>
      </div>
      {err ? (
        <h4 className="mt-4">{errMessage}</h4>
      ) : (
        <>
          <table class="mt-4 table">
            <thead>
              <tr>
                <th scope="col">Movie Name</th>
                <th scope="col">Cast</th>
              </tr>
            </thead>
            <tbody>
              {moviesList.map((movie) => {
                return (
                  <tr>
                    <th scope="row">{movie.movieName}</th>
                    <td>
                      {movie.cast+"    " }
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default CastSearchComponent;
