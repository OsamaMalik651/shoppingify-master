import React, { useState } from 'react'
import { MdDeleteOutline, MdRemove, MdOutlineAdd } from "react-icons/md";


const ShoppingListItem = ({ item, edit, isShoppingListEditMode }) => {
    const [itemcount, setItemCount] = useState(parseInt(item.count));
    const [isEditItem, setIsEditItem] = useState(edit || false);

    const handleCountClick = () => {
        setIsEditItem(!isEditItem)
        // update the item count in the parent component through passed update funciton in the future.
    }
    const handleEditItem = () => {
        isShoppingListEditMode && setIsEditItem(!isEditItem)
    }

    return (
        <div className='shoppingListItem' >
            <div className='flex flex-1 items-center gap-3'>
                {!isShoppingListEditMode && <input type='checkbox' className='border-2 border-bgOrange w-6 h-6 rounded bg-transparent ring-0 focus:ring-0 checked:bg-bgOrange focus:ring-offset-0 focus:outline-none cursor-pointer  checked:hover:bg-bgOrange checked:focus:bg-bgOrange' />}
                <h1 className=''>{item.name}</h1>
            </div>

            {!isEditItem && <button className='shoppingListItemCount' onClick={handleEditItem}>{item.count} pcs</button>}
            {isEditItem &&
                <div className='shoppingListItemEdit'>
                    <div className='shoppingListItemDelete'><MdDeleteOutline /></div>
                    <div className='flex gap-2 items-center'>
                        <span className='shoppingListItemCountUpdate' onClick={() => { setItemCount(itemcount - 1) }}> <MdRemove /></span>
                        <span className='shoppingListItemCount'
                            onClick={handleCountClick}
                        >{itemcount} pcs</span>
                        <span className='shoppingListItemCountUpdate'
                            onClick={() => { setItemCount(itemcount + 1) }}
                        ><MdOutlineAdd /></span>
                    </div>
                </div>
            }
        </div>
    )
}

export default ShoppingListItem