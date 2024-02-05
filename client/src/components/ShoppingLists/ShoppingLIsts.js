import React from 'react'
import { useOutletContext } from 'react-router-dom'

const ShoppingLists = () => {
    const renderedShoppingLists = useOutletContext();
    return (
        <>
            <div className='text-[26px] max-w-[450px] font-medium'>
                <h1>Shopping History</h1>
            </div>
            <div className='flex flex-1 flex-col gap-16 flex-wrap'>
                {renderedShoppingLists}
            </div>
        </>
    )
}

export default ShoppingLists