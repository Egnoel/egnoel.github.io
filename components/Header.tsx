import React from 'react'
import { ModeToggle } from './ModeToggle'

const Header = () => {
  return (
    <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-col'>
            <span className='font-semibold text-lg'>Egnoel Neto</span>
            <span className='text-gray-400 text-xs'>Software Engineer</span>
        </div>
        <ModeToggle />
    </div>
  )
}

export default Header