import Modal from '../Modal/modal'
import './canvas.css'
export const Canvas = () => {
  return (
    <>
    <div className="box">
      <div className="box-left">
        <div className="box-title-left">
          <h3 className="title-welcome">Hello, User!</h3>
        </div>
        <div className="box-modal-movie">
          <Modal type='createMovie'/>
          <hr/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Canvas
