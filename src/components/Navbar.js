import logo from './logo512.png';
import React from 'react';
import { Link } from 'react-router-dom';


const navigations = [
    {
        id: 0, // Used in JSX as a key
        name: 'Home',
        path: '/'
    },
    {
        id: 1, // Used in JSX as a key
        name: 'Products',
        path: '/products'
    },
    {
        id: 2, // Used in JSX as a key
        name: 'About',
        path: '/about'
    },
    {
        id: 3, // Used in JSX as a key
        name: 'Contact',
        path: '/contact'
    }
]

const Navbar = () => {
    return (
        <header className="text-gray-600 body-font shadow-lg">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to={'/'} className="flex title-font cursore-pointer font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={logo} width={42} alt='logo' />
                    <span className="ml-3 text-xl">e-Store</span>
                </Link>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    {
                        navigations.map((navigation) => {
                            return (
                                <Link to={navigation.path} key={navigation.id} className='mr-5 hover:text-grey-900'>{navigation.name}</Link>
                            )
                        })
                    }
                </nav>
                <button className="inline-flex text-white bg-orange-500 border-0 py-1 px-3 focus:outline-none hover:text-orange-500 hover:bg-white hover:border hover:border-orange-500 transition-all duration-300 rounded text-lg mt-4 md:mt-0">Cart 	&rarr;
                </button>
            </div>
        </header>
    )
}

export default Navbar
