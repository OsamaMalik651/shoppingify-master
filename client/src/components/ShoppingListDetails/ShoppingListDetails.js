import React from 'react'
import { MdOutlineArrowRightAlt, MdOutlineEventNote } from 'react-icons/md'
import Item from '../Item';
import { useNavigate } from 'react-router-dom';

const ShoppingListDetails = () => {
    const navigate = useNavigate();
    let shoppingList = {
        id: 2,
        title: "Eero's farewell party",
        createdOn: new Date('8/24/2020'),
        status: "completed",
        items: [{
            category: "Cookies",
            items: [{ id: "1", name: "Cookies Chocolate", count: "3" }, { id: "2", name: "Doris Truffle", count: "3" },]
        },
        {
            category: "Beverages",
            items: [{ id: "3", name: "Soft Drink 1.5 l", count: "2" }, { id: "4", name: "Beer", count: "3" }, { id: "5", name: "Cider", count: "6" },]
        }
        ]
    }
    const renderedItems = shoppingList.items.map((item) => {
        return (
            <div key={item.category} className='flex flex-col flex-wrap gap-4 text-lg font-md text-black'>
                <h6 className='text-lg font-bold'>{item.category}</h6>
                <div className='flex flex-wrap gap-4 '>
                    {item.items.map((listItem,) => {
                        return (
                            <Item key={listItem.id} item={listItem} listViewMode={true} />
                        )
                    })}
                </div>
            </div>
        )
    });
    return (
        <div className='flex flex-col gap-9'>
            <div className="flex gap-1 text-bgOrange font-bold cursor-pointer">
                <MdOutlineArrowRightAlt className="w-6 h-6 rotate-180" onClick={() => navigate(-1)} />
                back
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-[26px] font-bold'>{shoppingList.title}</h1>
                <div className='text-iconGray flex flex-1 max-w-[140px] gap-2 text-sm items-center'>
                    <MdOutlineEventNote className='w-6 h-6' />
                    <p>{shoppingList.createdOn.toLocaleDateString('en-us', { weekday: 'short' })} {shoppingList.createdOn.toLocaleDateString('en-GB').replace(/\//g, '.')}</p>
                </div>
            </div>
            <div className='flex flex-col flex-wrap gap-12'>
                {renderedItems}
            </div>

        </div>
    )
}

export default ShoppingListDetails