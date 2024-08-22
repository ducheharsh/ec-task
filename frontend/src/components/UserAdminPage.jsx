import React from 'react'
import "../stylesheet/UserAdminPage.css"
import Nav from './Nav'
import UserDetails from './UserDetails/UserDetails'

const UserAdminPage = () => {
  return (
    <>
    <Nav/>
    <div className='relative h-full w-full px-52 my-12'>
        <div className='UserAdminPageDetails h-full w-full'>
            <UserDetails/>
        </div>
    </div>
    </>
  )
}

export default UserAdminPage
