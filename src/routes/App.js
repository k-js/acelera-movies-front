import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Login } from '../pages/Login/login'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} exact />
      </Routes>
    </BrowserRouter>
  )
}
