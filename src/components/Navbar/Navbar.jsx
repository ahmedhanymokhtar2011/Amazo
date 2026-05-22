import React, { useState } from 'react'
import Logo from '../../../src/assets/images/img/Logo.png'
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import DarkMode from './DarkMode';
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";

// Navbar menu links
const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/",
    },
    {
        id: 2,
        name: "Top Rated",
        link: "/top",
    },
    {
        id: 3,
        name: "Womens Wear",
        link: "/womens",
    },
    {
        id: 4,
        name: "Mens Wear",
        link: "/mens",
    },
    {
        id: 5,
        name: "Electronics",
        link: "/elctronics",
    },
];

// Dropdown menu links
const DropdownLinks = [
    {
        id: 1,
        name: "Trending Products",
        link: "/#",
    },
    {
        id: 2,
        name: "Best Selling",
        link: "/#",
    },
    {
        id: 3,
        name: "Top Rated",
        link: "/top",
    },
];

const Navbar = ({ handleOrderPopup, searchTerm, setSearchTerm }) => {
    // Mobile menu state
    const [isOpen, setIsOpen] = useState(false)



    return (
        <div className='sticky top-0 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>

            {/* Top navbar */}
            <div className='bg-primary/40 py-2'>
                <div className='container flex justify-between items-center '>

                    {/* Logo */}
                    <div>
                        <a href="#"
                            className='font-bold text-2xl sm:text-3xl flex gap-2'>
                            <img
                                src={Logo}
                                alt="logo"
                                className='w-40 uppercase'
                            />
                        </a>
                    </div>

                    {/* Search bar + buttons */}
                    <div className='flex justify-between items-center gap-4 '>

                        


                        {/* Search input */}
                        <div className='relative group hidden sm:block'>
                            <input
                                type="text"
                                placeholder='search...'
                                value={searchTerm}
                                onChange={(e)=>setSearchTerm(e.target.value)}
                                className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary'
                            />

                            




                            {/* Search icon */}
                            <IoSearchOutline
                                className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3'
                            />
                        </div>

                        {/* Order button */}
                        <Link to="/cart">
                        <button
                        // onClick={() => handleOrderPopup()}
                            className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'
                        >

                            {/* Order text */}
                            <span
                                className='group-hover:block hidden transition-all duration-200'
                            >
                                Order
                            </span>

                            {/* Cart icon */}
                            <IoCartOutline
                                className='text-xl text-white drop-shadow-sm cursor-pointer'
                            />
                        </button>
</Link>
                        {/* Dark mode toggle */}
                        <div>
                            <DarkMode />
                        </div>

                        {/* Hamburger button */}
                        <div className='sm:hidden'>
                            <button onClick={() => setIsOpen(!isOpen)}>

                                {/* Hamburger lines */}
                                <div className='w-6 h-5 flex flex-col justify-between'>

                                    {/* Top line */}
                                    <span
                                        className={`h-0.5 bg-black dark:bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
                                    ></span>

                                    {/* Middle line */}
                                    <span
                                        className={`h-0.5 bg-black dark:bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
                                    ></span>

                                    {/* Bottom line */}
                                    <span
                                        className={`h-0.5 bg-black dark:bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
                                    ></span>

                                </div>
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom navbar */}
            <div
                data-aos="zoom-in"
                className='flex justify-center'
            >

                {/* Desktop menu */}
                <ul className='sm:flex hidden items-center gap-4'>

                    {/* Navbar links */}
                    {
                        Menu.map((data) => (
                            <li key={data.id}>
                                <Link
                                    to={data.link}
                                    className='inline-block px-4 hover:text-primary duration-200'
                                >
                                    {data.name}
                                </Link>
                            </li>
                        ))
                    }

                    {/* Dropdown menu */}
                    <li className='group relative cursor-pointer'>

                        {/* Dropdown title */}
                        <a
                            href="#"
                            className='flex items-center gap-[2px] py-2'
                        >
                            Trending items

                            {/* Dropdown icon */}
                            <span>
                                <FaCaretDown
                                    className='transition-all duration-200 group-hover:rotate-180'
                                />
                            </span>
                        </a>

                        {/* Dropdown content */}
                        <div className='absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md '>

                            <ul>

                                {/* Dropdown links */}
                                {DropdownLinks.map((data) => (
                                    <li key={data.id}>
                                        <a
                                            href={data.link}
                                            className='inline-block w-full rounded-md p-2 hover:bg-primary/20'
                                        >
                                            {data.name}
                                        </a>
                                    </li>
                                ))}

                            </ul>

                        </div>
                    </li>
                </ul>
            </div>

            {/* Dark overlay */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/50 z-30"
                ></div>
            )}

            {/* Mobile sidebar menu */}
            <div
                className={`fixed top-0 left-0 w-[250px] h-full bg-white dark:bg-gray-900 z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >

                <div className='p-5'>

                    {/* Mobile menu links */}
                    <ul className='flex flex-col gap-4'>

                        {Menu.map((data) => (
                            <li key={data.id}>

                                <Link
                                    to={data.link}
                                    onClick={() => setIsOpen(false)}
                                    className='block py-2 border-b'
                                >
                                    {data.name}
                                </Link>

                            </li>
                        ))}

                    </ul>

                </div>
            </div>

        </div>
    )
}

export default Navbar