import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserAdminPage from './components/UserAdminPage'
import SignUp from './components/Reg&Sign/SignUp'
import SignIn from './components/Reg&Sign/SignIn'
import EditDetails from './components/UserDetails/EditDetails'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<UserAdminPage/>}/>
      <Route path='/registration' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/edit' element={<EditDetails/>}/>
    </Routes>
    </>
  )
}

export default App
