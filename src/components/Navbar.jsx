'use client';

import { useState } from 'react';
import { DarkModeToggle } from './DarkModeToggle';
import Link from 'next/link';
import { TextAlignJustifyIcon } from '@radix-ui/react-icons';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <>
            <div className="hidden md:flex backdrop-filter backdrop-blur-3xl opacity-80 bg-white/30 dark:bg-[#020816]/100 dark:text-white dark:border-gray-700 border-2 border-gray-200 w-[90vw] h-16 fixed top-0 z-50 items-center justify-between px-4 sm:px-8 lg:px-16 transition-all duration-300 ease-in-out shadow-md rounded-lg my-3">
                <div className="flex items-center space-x-4">
                    <h1 className="font-bold text-2xl">Real Estate</h1>
                </div>
                <div className="flex items-center space-x-7">
                    <Link href="/" className="font-semibold text-lg">
                        Home
                    </Link>
                    <Link href="/about" className="font-semibold text-lg">
                        About
                    </Link>
                    {/* <Link href="/houses" className="font-semibold text-lg">
                        Houses
                    </Link>
                    <Link href="/rentals" className="font-semibold text-lg">
                        Rentals
                    </Link> */}
                    <Link href="/contact" className="font-semibold text-lg">
                        Contact
                    </Link>
                    <Link href="/blogs" className="font-semibold text-lg">
                        Blogs
                    </Link>
                    <DarkModeToggle />
                </div>
            </div>
            <div className="md:hidden flex backdrop-filter backdrop-blur-3xl bg-white dark:bg-[#020816] dark:text-white dark:border-gray-700 border-b-2 border-gray-200 w-full h-16 fixed top-0 z-50 items-center justify-between px-4 sm:px-8 lg:px-16 xl:px-24 shadow-md">
                <div className="space-x-4">
                    <h1 className="font-bold text-2xl">Real Estate</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <DarkModeToggle />
                    <button
                        className="text-lg font-semibold"
                        onClick={() => setShowMenu(!showMenu)}
                    >
                        <TextAlignJustifyIcon className="w-6 h-6" />
                    </button>
                </div>

                {showMenu && (
                    <div className="absolute top-16 left-0 w-full bg-white dark:bg-[#020816] dark:text-white dark:border-gray-700 border-b-2 border-gray-200 p-4 shadow-md origin-top animate-open-menu">
                        <Link
                            href="/"
                            className="block font-semibold text-lg py-2 text-center"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="block font-semibold text-lg py-2 text-center"
                        >
                            About
                        </Link>
                        {/* <Link
                            href="/houses"
                            className="block font-semibold text-lg py-2 text-center"
                        >
                            Houses
                        </Link>
                        <Link
                            href="/rentals"
                            className="block font-semibold text-lg py-2 text-center"
                        >
                            Rentals
                        </Link> */}
                        <Link
                            href="/blogs"
                            className="block font-semibold text-lg py-2 text-center"
                        >
                            Blogs
                        </Link>
                        <Link
                            href="/contact"
                            className="block font-semibold text-lg py-2 text-center"
                        >
                            Contact
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}

export default Navbar;
