import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Chat from './Pages/Chat'
import { AuthContextProvider } from './Context/AuthContext'
import ProtectedRoute from './Components/ProtectedRoute'

const App = () => {
  return (
    <>
    <AuthContextProvider>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/chat' element={<ProtectedRoute><Chat/></ProtectedRoute>} />
      </Routes>
    </AuthContextProvider>
    </>
  )
}

export default App
