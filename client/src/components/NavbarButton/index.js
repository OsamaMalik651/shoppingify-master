import React from 'react'

const NavbarButton = ({ children, title, isActive }) => {

    return (
        <div className="cursor-pointer flex w-full group h-11" >
            <span className={` ${isActive ? 'block' : 'hidden'}  border-r-4 border-r-[#F9A109] rounded-r-lgh-11}`}></span>
            <div className="flex flex-1 justify-center items-center relative">
                {children}
                <span className='hidden absolute triangle group-hover:flex -right-12 w-16 h-5 justify-center items-center bg-[#454545] rounded text-white text-xs font-medium'>{title}</span>
            </div>
        </div>
    )
}

export default NavbarButton