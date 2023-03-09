import Canvas from '../../components/Canvas/canvas'
import Title from '../../components/Title/title'
import React, { useState, useEffect } from 'react'
import { client } from '../../service/client'
import { useNavigate, useParams } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Modal from '../../components/Modal/modal'
import './detaiMovie.css'
import Rating from '../Home/components/rating'

export const DetaiMovie = () => {
  const [movie, setMovie] = useState([])
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    client.get(`movies/${id}`)
      .then(res => setMovie(res.data))
      .catch(error => alert(error))
  }, [])

  const deleteMovie = async (e) => {
    const shouldDelete = confirm('Tem certeza que quer excluir este filme?')

    if (shouldDelete) {
      await client.delete(`movies/${id}`)
      return navigate('/home')
    }
    return null
  }

  return (
    <>
    <div className="box">
      <div className="box-left">
        <Canvas/>
      </div>
      <div className="box-right">
        <main>
          <ul>
          {movie.map((movies, key) => (
            <li key={key}>
                <div className='caben'>
                  <div className=' tit'>
                  <Title title={movies.title}/>
                  </div>
                  <div className='btn'>
                  <button className='delete' onClick={deleteMovie}><FontAwesomeIcon icon={faTrash} /></button>
                  <Modal id={id} type='editMovie'/>
                  </div>
                </div>
                <div className='bloco'>
                <div className='movies-container'>
                  <div className='note'>
                    <Rating rating={movies.note}/>
                  </div>
                  <img src={movies.image}/>
                  <div className='content'>
                    <div className='u'>
                    <p className='ti'>{movies.title}</p>
                    <p className='date'>Data: {movies.release_date}</p>
                    </div>
                    <h3 className='y'>Resume:</h3>
                    <p className='resume'>{movies.resume}</p>
                  </div>
                </div>
                <div className='details'>
                <div className='genders'>
                   <p className='gen'>{movies.gender}</p>
                </div>
                  <p ><span className='spn'>Classification</span>: {movies.classification}</p>
                  <p ><span className='spn'>Director</span>: {movies.director}</p>
                  <p ><span className='spn'> Writter</span>: {movies.writer}</p>
                  <p ><span className='spn'>Actors</span>: {movies.actors}</p>
                </div>
                </div>
            </li>
          ))}
          </ul>
        </main>
      </div>
    </div>
    </>
  )
}

export default DetaiMovie
