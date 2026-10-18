"use client"
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import Image from "next/image";


const Footer = () => {

    const [year, setYear] = useState(null);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="bg-neutral-primary-soft rounded-base shadow-xs border border-default m-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse dark:text-white">
                        <Image src="/logo1.png" alt="WeatherX Logo" width={80} height={80} />
                        <span className="text-heading self-center pt-5 text-3xl font-bold whitespace-nowrap">Weather<span className='text-blue-500'>X</span></span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-body sm:mb-0">
                        <li>
                            <Link href="/about" className="hover:underline me-4 md:me-6">About</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline me-4 md:me-6">Licensing</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-default sm:mx-auto lg:my-8" />
                <span className="block text-sm text-body sm:text-center">&copy; {year} WeatherX. All Rights Reserved.</span>
            </div>
        </footer>


    )
}

export default Footer
