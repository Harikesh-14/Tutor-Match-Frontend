import './App.css'

import { Route, Routes } from 'react-router-dom'

import UserRegister from './pages/UserRegister'
import UserLogin from './pages/UserLogin'

function App() {
  return (
    <>
      <Routes>
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLogin />} />
      </Routes>
    </>
  )
}

export default App
