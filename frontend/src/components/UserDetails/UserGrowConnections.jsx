import React from 'react'
import { Link } from 'react-router-dom'

const UserGrowConnections = () => {
  return (
    <>
    <div className='UserGrowConnectionsWrapper absolute h-auto w-full mt-4 bg-gray-800 rounded-md'>
        <div className='UserGrowConnections relative h-auto w-full py-2 px-4 text-base'>
            More Profile To Browse
        </div>
        <div className='UserGrowConnectionsPeople relative h-full w-full py-2 px-4'>
            <div className='UserGrowConnectionsPeople0 flex gap-2 justify-between items-start mt-4 pb-4 border-b-2 border-gray-700'>
                <div className='UserGrowConnectionsPeopleImage relative h-2/3 w-1/3 bg-gray-500 rounded-full object-contain object-center'>
                    <img className='relative h-1/2' src='https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png' alt='img'></img>
                </div>
                <div className='UserGrowConnectionsPeopleDetails relative h-full w-full'>
                    <div className='UserGrowConnectionsPeopleDetailsName relative h-1/3 w-full text-lg font-semibold'>
                        Jhon Wick
                    </div>
                    <div className='UserGrowConnectionsPeopleDetailsConnectionLevel relative h-1/3 w-full text-gray-400 text-base'>
                        2nd
                    </div>
                    <div className='UserGrowConnectionsPeopleDetailsInfo relative h-1/3 w-full font-light'>
                        Virmata jijabai Technology
                    </div>
                <div className='UserGrowConnectionsPeopleContact w-2/3 mt-4'>
                    <Link to="/ViewProfile">
                        <div className='UserGrowConnectionsPeopleContactViewProfile px-3 py-2 flex items-center justify-center rounded-full bg-gray-700'>
                            View Profile
                        </div>
                    </Link>
                </div>
                </div>
            </div>
            <div className='UserGrowConnectionsPeople0 flex gap-2 justify-between items-start mt-4 pb-4 border-b-2 border-gray-700'>
                <div className='UserGrowConnectionsPeopleImage relative h-2/3 w-1/3 bg-gray-500 rounded-full object-contain object-center'>
                    <img className='relative h-1/2' src='https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png' alt='img'></img>
                </div>
                <div className='UserGrowConnectionsPeopleDetails relative h-full w-full'>
                    <div className='UserGrowConnectionsPeopleDetailsName relative h-1/3 w-full text-lg font-semibold'>
                        Jhon Wick
                    </div>
                    <div className='UserGrowConnectionsPeopleDetailsConnectionLevel relative h-1/3 w-full text-gray-400 text-base'>
                        2nd
                    </div>
                    <div className='UserGrowConnectionsPeopleDetailsInfo relative h-1/3 w-full tracking-tight font-light'>
                        Virmata jijabai Technology
                    </div>
                <div className='UserGrowConnectionsPeopleContact w-2/3 mt-4'>
                    <Link to="/ViewProfile">
                        <div className='UserGrowConnectionsPeopleContactViewProfile px-3 py-2 flex items-center justify-center rounded-full bg-gray-700'>
                            View Profile
                        </div>
                    </Link>
                </div>
                </div>
            </div>
            <div className='UserGrowConnectionsPeople0 flex gap-2 justify-between items-start mt-4 pb-4 border-b-2 border-gray-700'>
                <div className='UserGrowConnectionsPeopleImage relative h-2/3 w-1/3 bg-gray-500 rounded-full object-contain object-center'>
                    <img className='relative h-1/2' src='https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png' alt='img'></img>
                </div>
                <div className='UserGrowConnectionsPeopleDetails relative h-full w-full'>
                    <div className='UserGrowConnectionsPeopleDetailsName relative h-1/3 w-full font-semibold text-lg'>
                        Jhon Wick
                    </div>
                    <div className='UserGrowConnectionsPeopleDetailsConnectionLevel relative h-1/3 w-full text-gray-400 text-base'>
                        2nd
                    </div>
                    <div className='UserGrowConnectionsPeopleDetailsInfo relative h-1/3 w-full tracking-tight font-light'>
                        Virmata jijabai Technology
                    </div>
                <div className='UserGrowConnectionsPeopleContact w-2/3 mt-4'>
                    <Link to="/ViewProfile">
                        <div className='UserGrowConnectionsPeopleContactViewProfile px-3 py-2 flex items-center justify-center rounded-full bg-gray-700'>
                            View Profile
                        </div>
                    </Link>
                </div>
                </div>
            </div>
            <div className='UserGrowConnectionsPeople0 flex gap-2 justify-between items-start mt-4 pb-4 border-b-2 border-gray-700'>
                <div className='UserGrowConnectionsPeopleImage relative h-2/3 w-1/3 bg-gray-500 rounded-full object-contain object-center'>
                    <img className='relative h-1/2' src='https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png' alt='img'></img>
                </div>
                <div className='UserGrowConnectionsPeopleDetails relative h-full w-full'>
                    <div className='UserGrowConnectionsPeopleDetailsName relative h-1/3 w-full text-lg font-semibold'>
                        Jhon Wick
                    </div>
                    <div className='UserGrowConnectionsPeopleDetailsConnectionLevel relative h-1/3 w-full text-gray-400 text-base'>
                        2nd
                    </div>
                    <div className='UserGrowConnectionsPeopleDetailsInfo relative h-1/3 w-full tracking-tight font-light'>
                        Virmata jijabai Technology
                    </div>
                <div className='UserGrowConnectionsPeopleContact w-2/3 mt-4'>
                    <Link to="/ViewProfile">
                        <div className='UserGrowConnectionsPeopleContactViewProfile px-3 py-2 flex items-center justify-center rounded-full bg-gray-700'>
                            View Profile
                        </div>
                    </Link>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default UserGrowConnections
