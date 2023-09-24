import React from 'react'
import { MdAdd } from "react-icons/md";
const Item = ({ name }) => {
    return (
        <div className='flex flex-shrink-0 w-[182px] px-4 py-4  h-fit items-center justify-between bg-white text-base rounded-lg shadow-md'>
            {name}
            <span className='cursor-pointer pl-0'>
                <MdAdd className='font-bold text-2xl text-iconGray' />
            </span>
        </div>
    )
}

export default Item