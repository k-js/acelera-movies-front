import Canvas from '../../components/Canvas/canvas'
import Title from '../../components/Title/title'
import Movie from './components/movie'

export const Home = () => {
  return (
    <>
    <div className="box">
      <div className="box-left">
        <Canvas/>
      </div>
      <div className="box-right">
        <Title title={'All Movies'} />
        <Movie/>
      </div>
    </div>
    </>
  )
}
