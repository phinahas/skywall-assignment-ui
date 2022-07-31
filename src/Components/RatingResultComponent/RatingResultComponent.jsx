import React, { useEffect, useState } from 'react'
import axios from '../../axios'

function RatingResultComponent() {
    const [moviesList, setMoviesList] = useState([])
    useEffect(() => {

        axios.get("/movies-rating-8.0").then((response) => {
            //console.log(response.data.data);
            setMoviesList(response.data.data)
        })

      
    }, [])
    
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
  )
}

export default RatingResultComponent