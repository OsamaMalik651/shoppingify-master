import React from 'react'
import Item from '../../components/Item'

const ItemsPage = () => {
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
        }, {
            category: "Fruits and vegetables 2",
            items: ['Avocado', 'Banana', 'Bunch of Carrots 5pcs', 'Pre-cooked corn 450g',
                'Mandarin Nadorcott', 'Piele De Sapo Melon', 'Watermelon']
        },
        {
            category: "Meat and Fish 2",
            items: ['Chicken leg box', 'Chicken 1kg', 'Pork fillets 450g', 'Salmon 1kg',
                'Mandarin Nadorcott', 'Piele De Sapo Melon', 'Watermelon']
        }, {
            category: "Fruits and vegetables 2",
            items: ['Avocado', 'Banana', 'Bunch of Carrots 5pcs', 'Pre-cooked corn 450g',
                'Mandarin Nadorcott', 'Piele De Sapo Melon', 'Watermelon']
        },
        {
            category: "Meat and Fish 2",
            items: ['Chicken leg box', 'Chicken 1kg', 'Pork fillets 450g', 'Salmon 1kg',
                'Mandarin Nadorcott', 'Piele De Sapo Melon', 'Watermelon']
        }];
    const renderedItems = items.map((item) => {
        return (
            <div key={item.category} className='flex flex-col flex-wrap gap-4 text-lg font-md text-black'>
                <h6>{item.category}</h6>
                <div className='flex flex-wrap gap-4 '>
                    {item.items.map((listItem,) => {
                        return (
                            <Item key={listItem} name={listItem} />
                        )
                    })}
                </div>
            </div>
        )
    })

    return (
        <div className='bg-slate-700 flex flex-1 '>
            <div className='flex flex-col gap-12 px-20 py-7 bg-pageBackground basis-2/3 overflow-scroll'>
                {/* Heading Div */}
                <div className='flex justify-between py-2'>
                    {/* Heading Text */}
                    <div className='text-[26px] max-w-[450px] font-medium'>
                        <h1><span className='text-highlight'>Shoppingify</span> allows you take your shopping list wherever you go</h1>
                    </div>
                    {/* Input Div */}
                    <div>
                        Input div
                    </div>
                </div>
                {/* Items Div */}
                <div className='flex flex-col flex-wrap gap-12'>
                    {renderedItems}
                </div>
            </div>
            <div className='bg-pink-400 flex basis-1/3'>
                Shopping List
            </div>
        </div>

    )
}

export default ItemsPage