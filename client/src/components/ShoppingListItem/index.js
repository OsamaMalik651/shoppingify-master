import React, { useState } from 'react'
import { MdDeleteOutline, MdRemove, MdOutlineAdd } from "react-icons/md";


const ShoppingListItem = ({ item, edit }) => {
    const [itemcount, setItemCount] = useState(parseInt(item.count));
    const [isEditItem, setIsEditItem] = useState(edit);

    const handleCountClick = () => {
        setIsEditItem(!isEditItem)
        // update the item count in the parent component through passed update funciton in the future.
    }

    return (
        <div className='shoppingListItem' >
            <h1 className=''>{item.name}</h1>
            {!isEditItem && <button className='shoppingListItemCount' onClick={() => setIsEditItem(!isEditItem)}>{item.count} pcs</button>}
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