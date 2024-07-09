import './App.css'

import { Route, Routes } from 'react-router-dom'

import UserRegister from './pages/UserRegister'

function App() {
  return (
    <>
      <Routes>
        <Route path="/user/register" element={<UserRegister />} />
      </Routes>
    </>
  )
}

export default App
