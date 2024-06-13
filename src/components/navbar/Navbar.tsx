import Link from "next/link";
import React from "react";
const Navbar = () => {

    return (
        <>
            <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="./logo.png" className="h-8" alt="Flowbite Logo" />
                        {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-6   rtl:space-x-reverse">
                        <button className="header-contact-btn mt-2 from-semibold text-base
                        inline-flex items-center px-2 py-2 text-center 
                        justify-center text-gray-500 rounded-lg 
                         hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200
                          dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">Contact</button>

                        <button type="button" className="text-white mt-2 bg-purple-700 hover:bg-purple-800 from-semibold text-base
                        focus:ring-4 focus:outline-none focus:ring-purple-500  rounded-lg  px-4 py-2 text-center
                         dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Log In</button>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar;