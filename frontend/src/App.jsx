import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserAdminPage from './components/UserAdminPage'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<UserAdminPage/>}/>
    </Routes>
    </>
  )
}

export default App
