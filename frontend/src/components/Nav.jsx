import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <div className='navWrapper flex items-center justify-between relative h-[3rem] w-full bg-gray-700 px-52'>
        <div className='navLeft flex items-center justify-center'>
            <div className='navIcon'>
                <img src="" alt='img'></img>
            </div>
        </div>
        <div className='navRight flex items-center justify-center'>
            <div className='navComponents flex items-center justify-between gap-4'>
                <Link to="/" >
                    <div className='navComponentsHome'>
                        Home
                    </div>
                </Link>
                <Link to="/" >
                    <div className='navComponentsMyNetwork'>
                        My Network
                    </div>
                </Link>
                <Link to="/" >
                    <div className='navComponentsJobs'>
                        Jobs
                    </div>
                </Link>
                <Link to="/" >
                    <div className='navComponentsMesseging'>
                        Messaging
                    </div>
                </Link>
                <Link to="/" >
                    <div className='navComponentsNotification'>
                        Notification
                    </div>
                </Link>
                <Link to="/" >
                    <div className='navComponentsProfile'>
                        Profile
                    </div>
                </Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Nav
