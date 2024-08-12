import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='flex flex-row w-full h-24 px-12 md:px-28 justify-between items-center overflow-hidden'>
            <div className='flex'>
                <Image
                    alt='Website logo.'
                    priority={true}
                    src='/basic.png'
                    width={100}
                    height={100}
                    className='w-24'
                />
            </div>
            <div className='hidden md:flex flex-wrap gap-8 items-center'>
                <Link href='/'>Home</Link>
                <Link href='/'>About</Link>
                <Link href='/'>Contact</Link>
                <Link href='/'>Services</Link>
                <Link href='/'>Subscribe</Link>
                <Link href='/' className='button-1'>Request a quote</Link>
            </div>
        </div>
    )
}

export default Navbar
