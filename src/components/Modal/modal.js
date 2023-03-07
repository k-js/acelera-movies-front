import React, { useState } from 'react'
import ButtonModal from '../ButtonModal/buttonModal'
import CreateMovie from '../CreateMovie/createMovie'
import EditModal from '../EditModal/editModal'
import './modal.css'

const Modal = ({ id, type }) => {
  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    return setToggle(!toggle)
  }

  return (
    <>
      <ButtonModal type={type} className='open' onClick={() => setToggle(toggle => !toggle)} />
      {toggle &&
      <div className='mascara'>
        <div >
            <button className='ModalContainer' onClick={handleClick}>X</button>
          <div className='modal'>
            {type === 'createMovie' &&
              <CreateMovie onClick={() => setToggle(toggle => !toggle)}/>
            }
            {type === 'editMovie' &&
              <EditModal id={id} onClick={() => {
                setToggle(toggle => !toggle)
                location.reload()
              }} />
            }
          </div>
        </div>
      </div>
      }
    </>
  )
}

export default Modal
