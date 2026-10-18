"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from "next/image";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true'
        setDarkMode(isDarkMode)
        document.documentElement.classList.toggle('dark', isDarkMode)
    }, [])

    const toggleDarkMode = () => {
        const nextMode = !darkMode
        setDarkMode(nextMode)
        localStorage.setItem('darkMode', String(nextMode))
        document.documentElement.classList.toggle('dark', nextMode)
    }

    return (
        <nav className="bg-gray-100 text-black dark:bg-gray-900 dark:text-white p-4 sticky top-0 w-full z-50 shadow-md">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:justify-between">
                <div className="logo">
                    <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <Image src="/logo1.png" alt="WeatherX Logo" width={50} height={50} />
                        <h1 className="text-2xl font-bold pt-3">Weather<span className='text-blue-500'>X</span></h1></Link>
                </div>
                {/* <div>
                    <input className='bg-gray-200 border-2 border-gray-400 p-1 px-4 rounded-2xl w-full' type="text" placeholder='Search any city' />
                </div> */}
                <div className="nav-links flex flex-wrap justify-end gap-4">
                    <Link href="/" className="hover:text-blue-500 dark:hover:text-blue-400">Home</Link>
                    <Link href="/weather" className="hover:text-blue-500 dark:hover:text-blue-400">Weather</Link>
                    <Link href="/about" className="hover:text-blue-500 dark:hover:text-blue-400">About Us</Link>
                    <Link href="/contact" className="hover:text-blue-500 dark:hover:text-blue-400">Contact Us</Link>
                    <button
                        type="button"
                        onClick={toggleDarkMode}
                        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                        className="dark-mode-toggle flex justify-end hover:text-blue-500 dark:hover:text-blue-400"
                    >
                        {darkMode ? <MdOutlineLightMode size={24} /> : <MdOutlineDarkMode size={24} />}
                    </button>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
