import React, { useState } from 'react'
import { client } from '../../service/client'
import './editMovie.css'

const EditMovie = ({ id, onClick = x => x }) => {
  const [data, setData] = useState({
    title: '',
    subtitle: '',
    resume: '',
    gender: '',
    classification: '',
    image: '',
    release_date: '',
    director: '',
    writer: '',
    studio: '',
    actors: '',
    awards: '',
    note: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
    console.log(data)
  }

  const handleClick = async (e) => {
    e.preventDefault()
    await client.put(`/movies/${id}`, data)
      .then(() => {
        alert('Filme editado com sucesso!')
        return onClick()
      })
      .catch(error => {
        alert(error)
        onClick()
      })
  }

  return (
    <div className='conteinerForm'>
    <form className='form' method='POST'>
    <div className='boxForm'>
      <label className='label' htmlFor='title'>Title</label>
      <input className='input' type='text' name='title' id='title' onChange={handleChange} />
    </div>
    <div className='boxForm'>
      <label className='label' htmlFor='subtitle'>Subtitle</label>
      <input className='input' type='text' name='subtitle' id='subtitle' onChange={handleChange} />
    </div>
    <div className='textarea-cont'>
      <label className='label' htmlFor='resume'>Resume</label>
      <textarea className='inputTextarea' name='resume' id='resume' onChange={handleChange}></textarea>
    </div>
    <div className='boxForm'>
      <label className='label' htmlFor='gender'>Gender</label>
      <input className='input' type='text' name='gender' id='gender' onChange={handleChange} />
    </div>
    <div className='boxForm'>
      <label className='label' htmlFor='classification'>Classification</label>
      <select className='select' name='classification' id='classification' onChange={handleChange}>
        <option value=''>Select</option>
        <option value='L'>Livre</option>
        <option value='10'>10 Anos</option>
        <option value='12'>12 Anos</option>
        <option value='14'>14 Anos</option>
        <option value='16'>16 Anos</option>
        <option value='18'>18 Anos</option>
      </select>
    </div>
    <div className='boxForm'>
      <label className='label' htmlFor='image'>Image</label>
      <input className='input' type='text' name='image' id='image' onChange={handleChange} />
    </div>
    <div className='boxForm'>
      <label className='label' htmlFor='release_date'>Release Date</label>
      <input className='input' type='text' name='release_date' id='releaseDate' onChange={handleChange} />
    </div>
    <div className='boxForm'>
      <label className='label' htmlFor='director'>Director</label>
      <input className='input' type='text' name='director' id='director' onChange={handleChange} />
    </div>
    <div className='boxForm'>
      <label className='label' htmlFor='writer'>Writter</label>
      <input className='input' type='text' name='writer' id='writer' onChange={handleChange} />
    </div>
    <div className='boxForm'>
      <label className='label' htmlFor='studio'>Studio</label>
      <input className='input' type='text' name='studio' id='studio' onChange={handleChange} />
    </div>
    <div className='boxForm'>
      <label className='label' htmlFor='actors'>Actors</label>
      <input className='input' type='text' name='actors' onChange={handleChange} />
    </div>
    <div className='boxForm'>
      <label className='label' htmlFor='awards'>Awards</label>
      <input className='input' type='text' name='awards' id='awards' onChange={handleChange} />
    </div>
    <div className='boxForm'>
      <label className='label' htmlFor='note'>Stars</label>
      <input className='input' type='Number' name='note' id='note' onChange={handleChange} />
    </div>
    <button className='submit' onClick={handleClick}>Edit Movie</button>
  </form>
    </div>
  )
}

export default EditMovie
