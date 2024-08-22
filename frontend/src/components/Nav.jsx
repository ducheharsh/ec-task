import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <div className='navWrapper flex items-center justify-between absolute h-[3rem] w-full bg-red-400 px-52'>
        <div className='navLeft flex items-center justify-center'>
            <div className='navIcon'>
                <img src="" alt='img'></img>
            </div>
        </div>
        <div className='navRight flex items-center justify-center'>
            <div className='navComponents'>
                <Link to="/" >
                    <div className='navComponentsHome'>
                        
                    </div>
                </Link>
                <Link to="/" >
                    <div className='navComponents'>
                        
                    </div>
                </Link>
                <Link to="/" >
                    <div className='navComponents'>
                        
                    </div>
                </Link>
                <Link to="/" >
                    <div className='navComponents'>
                        
                    </div>
                </Link>
                <Link to="/" >
                    <div className='navComponents'>
                        
                    </div>
                </Link>
                <Link to="/" >
                    <div className='navComponents'>
                        
                    </div>
                </Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Nav
