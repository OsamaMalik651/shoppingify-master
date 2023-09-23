import React from 'react'
import { MdOutlineShoppingCart } from 'react-icons/md'

const ShoppingCartButton = ({ value }) => {
    return (
        // Link Component will be used once router is introduced
        <div className="bg-[#F9A109] p-3 rounded-full text-white relative font-quicksand text-sm cursor-pointer">
            <span className="absolute w-7 h-7 flex items-center justify-center bg-red-500 rounded -top-2 -right-3">{value}</span>
            <MdOutlineShoppingCart className="w-7 h-7" />
        </div>
    )
}

export default ShoppingCartButton