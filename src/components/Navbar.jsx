'use client';

import { useState } from 'react';
import { DarkModeToggle } from './DarkModeToggle';
import Link from 'next/link';
import { TextAlignJustifyIcon } from '@radix-ui/react-icons';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <>
            <div className="hidden lg:flex backdrop-filter backdrop-blur-3xl opacity-80 bg-background dark:bg-background text-black dark:text-white dark:border-gray-700 border-2 border-gray-200 w-[90vw] h-16 fixed top-0 z-50 items-center justify-between px-4 sm:px-8 lg:px-16 transition-all duration-300 ease-in-out shadow-md rounded-lg my-3">
                <div className="flex items-center space-x-4 w-1/3 text-start">
                    <h1 className="font-bold text-2xl text-black dark:text-white">
                        Real Estate
                    </h1>
                </div>
                <div className="flex items-center space-x-8">
                    <Link
                        href="/"
                        className="font-semibold text-md hover:scale-125 transition-all duration-175 ease-[cubic-bezier(0.95,0.05,0.795,0.035)]"
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className="font-semibold text-md hover:scale-125 transition-all duration-175 ease-[cubic-bezier(0.95,0.05,0.795,0.035)]"
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className="font-semibold text-md hover:scale-125 transition-all duration-175 ease-[cubic-bezier(0.95,0.05,0.795,0.035)]"
                    >
                        Contact
                    </Link>
                    <Link
                        href="/blogs"
                        className="font-semibold text-md hover:scale-125 transition-all duration-175 ease-[cubic-bezier(0.95,0.05,0.795,0.035)]"
                    >
                        Blogs
                    </Link>
                </div>
                <div className=" w-1/3 text-end">
                    <DarkModeToggle />
                </div>
            </div>
            <div className="lg:hidden flex backdrop-filter backdrop-blur-3xl bg-background dark:bg-background dark:text-white dark:border-gray-700 border-b-2 border-gray-200 w-full h-16 fixed top-0 z-50 items-center justify-between px-4 sm:px-8 lg:px-16 xl:px-24 shadow-md">
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
