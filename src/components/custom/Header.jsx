import React from 'react'
import { Button } from '../ui/Button'

function Header() {
  return (
    <div className='p-2 shadow-md flex justify-between items-center px-5 bg-gray-200 w-full'>
        <img src="/logo.svg" />
        <div>
            <Button className='bg-black text-white'>Sign In</Button>
        </div>
    </div>
  )
}

export default Header
