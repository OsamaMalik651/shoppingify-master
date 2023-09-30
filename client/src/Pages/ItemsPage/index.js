import React, { useState } from 'react'
import Item from '../../components/Item'
import { MdSearch } from "react-icons/md";
import { ReactComponent as BottleIcon } from "../../assets/bottle.svg";

const ItemsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const items = [
        {
            category: "Fruits and vegetables",
            items: ['Avocado', 'Banana', 'Bunch of Carrots 5pcs', 'Pre-cooked corn 450g',
                'Mandarin Nadorcott', 'Piele De Sapo Melon', 'Watermelon']
        },
        {
            category: "Meat and Fish",
            items: ['Chicken leg box', 'Chicken 1kg', 'Pork fillets 450g', 'Salmon 1kg',
                'Mandarin Nadorcott', 'Piele De Sapo Melon', 'Watermelon']
        }];
    const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value);
    }

    const renderedItems = items.map((item) => {
        return (
            <div key={item.category} className='flex flex-col flex-wrap gap-4 text-lg font-md text-black'>
                <h6 className='text-lg font-bold'>{item.category}</h6>
                <div className='flex flex-wrap gap-4 '>
                    {item.items.map((listItem,) => {
                        return (
                            <Item key={listItem} name={listItem} />
                        )
                    })}
                </div>
            </div>
        )
    });

    return (
        <div className='bg-slate-700 flex flex-1 '>
            <div className='flex flex-col gap-12 ps-20 pe-14 py-7 bg-pageBackground overflow-y-scroll'>
                {/* Heading Div */}
                <div className='flex justify-between py-2'>
                    {/* Heading Text */}
                    <div className='text-[26px] max-w-[450px] font-medium'>
                        <h1><span className='text-highlight'>Shoppingify</span> allows you take your shopping list wherever you go</h1>
                    </div>
                    {/* Input Div */}
                    <div className='flex flex-1 items-start justify-end'>
                        <div className='bg-white flex flex-1 max-w-[276px] h-14 px-4 rounded-xl items-center shadow-md focus-within:border-2 border-bgOrange'>
                            <MdSearch className='w-6 h-6 text-iconBlack' />
                            <input
                                type="text"
                                placeholder='search item'
                                className='flex flex-1 px-2 h-full bg-transparent outline-none placeholder-placeholderGray text-sm font-medium'
                                value={searchTerm}
                                onChange={handleSearchTerm}
                            />
                        </div>
                    </div>
                </div>
                {/* Items Div */}
                <div className='flex flex-col flex-wrap gap-12'>
                    {renderedItems}
                </div>
            </div>
            <div className='bg-bgLightOrange max-w-[390px] flex flex-col basis-1/3 pt-11 overflow-y-scroll '>
                <div className='flex flex-col flex-1 ps-11 pe-7 items-center ' >
                    <div className='bg-[#80485B] flex flex-1 max-h-[130px] w-[310px] rounded-3xl px-7 relative py-4'>
                        <BottleIcon className='absolute -top-[18px] left-2' />
                        <div className='ml-auto flex flex-1 max-w-[160px] flex-col gap-2'>
                            <span className='text-white text-base font-bold'>Didn’t find what you need?</span>
                            <button className='bg-white text-iconBlack text-sm font-bold  py-[10px] h-10 w-[120px] rounded-xl'>Add item</button>
                        </div>

                    </div>
                    <div></div>
                </div>
                <div className='bg-white flex-1 max-h-[130px]'>
                    save button
                </div>
            </div>
        </div>

    )
}

export default ItemsPage