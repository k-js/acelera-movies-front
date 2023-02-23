import './canvas.css'
export const Canvas = ({ href }) => {
  return (
    <>
    <div className="box">
      <div className="box-left">
        <div className="box-title-left">
          <h3 className="title-welcome">Hello, User!</h3>
        </div>
        <div className="box-modal-movie">
            <a href = { href }>Add Movie</a>
          <hr/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Canvas
