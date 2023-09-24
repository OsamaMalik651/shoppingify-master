import React from 'react'
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
    return (
        <div className='flex flex-1 h-screen max-w-screen' >
            <Navbar />
            {children}
        </div>
    )
}

export default Layout;