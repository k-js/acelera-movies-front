import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { client } from '../../../service/client'
import Rating from './rating'
import './movie.css'

export const Movie = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([])

  useEffect(() => {
    client
      .get('/movies')
      .then((response) => {
        setData(response.data.movies)
      })
      .catch((error) => {
        return Error(error)
      })
  }, [])
  return (
    <>
      {data &&
        data.map((movies) => {
          return (
            <div className="box-movies" key={movies.id}>
              <img src={movies.image} />
              <div className="">
                <h2 className='title' onClick={() => navigate(`/movies/${movies.id}`)}>
                  {movies.title}
                </h2>
                <p className="date">Data: {movies.release_date}</p>
                <h3 className='title-resume'>Resume:</h3>
                <p className="resume">{movies.resume}</p>
              </div>
              <div className="rating">
                <Rating rating={movies.note}/>
              </div>
            </div>
          )
        })}
    </>
  )
}

export default Movie
