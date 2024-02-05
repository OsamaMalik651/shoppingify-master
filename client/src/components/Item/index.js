import React from 'react'
import { MdAdd } from "react-icons/md";
const Item = ({ name, onAddButtonClick, onItemNameClick, listViewMode, item }) => {
    if (listViewMode) {
        return (<div className='flex flex-shrink-0 w-[182px] px-4 py-4 h-fit items-center justify-between bg-white text-base rounded-lg shadow-md'>
            <h1 className='text-basefont-medium cursor-pointer hover:font-bold'>
                {item.name}
            </h1>
            <span className='text-bgOrange text-xs font-bold cursor-pointer text-center'
            >{item.count} pcs</span>
        </div>)
    }
    return (
        <div className='flex flex-shrink-0 w-[182px] px-4 py-4  h-fit items-center justify-between bg-white text-base rounded-lg shadow-md'>
            <h1 className='text-base font-medium cursor-pointer hover:font-bold' onClick={() => onItemNameClick(true)}>
                {name}
            </h1>
            <span className='cursor-pointer pl-0'>
                <MdAdd className='font-bold text-2xl text-iconGray' onClick={onAddButtonClick} />
            </span>
        </div>
    )
}

export default Item