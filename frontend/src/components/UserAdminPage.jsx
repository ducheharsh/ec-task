import React from 'react'
import "../stylesheet/UserAdminPage.css"
import Nav from './Nav'
import UserDetails from './UserDetails/UserDetails'
import UserPublic from './UserDetails/UserPublic'
import UserGrowConnections from './UserDetails/UserGrowConnections'
import UserExtraSections from './UserDetails/UserExtraSections'

const UserAdminPage = () => {
  return (
    <>
    <Nav/>
    <div className='relative h-full w-full flex gap-3 px-40 my-12'>
        <div className='UserAdminPageDetailsLeft relative h-full w-4/6'>
            <UserDetails/>
            <UserExtraSections name="Skills" Skill1="Html" Skill2="Css"/>
            <UserExtraSections name="Skills1" Skill1="Html1" Skill2="Css1"/>
            <UserExtraSections name="Skills2" Skill1="Html2" Skill2="Css2"/>
        </div>
        <div className='UserAdminPageDetailsRight relative h-full w-2/6'>
            <UserPublic/>
            <UserGrowConnections/>
        </div>
    </div>
    </>
  )
}

export default UserAdminPage
