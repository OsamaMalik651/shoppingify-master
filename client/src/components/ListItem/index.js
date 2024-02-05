import React from 'react'
import { MdOutlineEventNote } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
const ListItem = ({ shoppingList }) => {
    return (
        <div className='ps-5 pe-1 py-2 flex items-stretch h-16 max-w-4xl bg-white text-base rounded-lg shadow-md' >
            <div className='flex flex-1 items-center justify-between'>
                <div className="text-base font-medium flex-1">{shoppingList.title}</div>
                <div className="flex flex-1 gap-5 justify-end items-end">
                    <div className='text-iconGray flex flex-1 max-w-[140px] gap-2 text-sm items-center'>
                        <MdOutlineEventNote className='w-6 h-6' />
                        <p>{shoppingList.createdOn.toLocaleDateString('en-us', { weekday: 'short' })} {shoppingList.createdOn.toLocaleDateString('en-GB').replace(/\//g, '.')}</p>
                    </div>
                    <div className={`max-w-[76px] h-6 px-2 py-1 border flex flex-1 rounded-md text-xs items-center justify-center ${shoppingList.status === 'completed' && 'border-info text-info'} ${shoppingList.status === 'cancelled' && 'border-danger text-danger'}`} >
                        {shoppingList.status}
                    </div>
                    <div className=' text-bgOrange'>
                        <MdKeyboardArrowRight className='font-bold h-6 w-6 cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListItem