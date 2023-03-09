import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import './buttonModal.css'

const ButtonModal = ({ type, onClick = x => x }) => {
  return (
    <>
      {
        type === 'createMovie' &&
        <a onClick={onClick}>Add movie</a>
      }
      {
        type === 'editMovie' &&
        <button onClick={onClick}><FontAwesomeIcon icon={faPen} /></button>
      }
    </>
  )
}

export default ButtonModal
