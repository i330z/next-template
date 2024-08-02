import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='w-full py-4 px-10 bg-blue-300 text-white flex justify-between'>
        <div>Header</div>
        <div className='flex gap-x-4'>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/">Project</Link>
        </div>
    </div>
  )
}

export default Header