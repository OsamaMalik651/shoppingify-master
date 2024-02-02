import React, { useEffect, useState } from 'react'
import Item from '../../components/Item'
import { MdSearch } from "react-icons/md";
import ShoppingList from '../../components/ShoppingList';
import AddItem from '../../components/AddItem';
import ItemDetails from '../../components/ItemDetails';

const ItemsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selected, setSelected] = useState('shoppingList');
    const [shoppingListEditMode, setShoppingListEditMode] = useState(false);

    const handleShowShoppingListComponent = () => {
        setSelected('shoppingList')
    }
    const handleShowAddItemComponent = (e) => {
        e === true ? setSelected('addItem') : handleShowShoppingListComponent();
    }
    const handleShowItemDetailsComponent = (e) => {
        e === true ? setSelected('itemDetails') : handleShowShoppingListComponent();
    }

    const onItemAddClick = () => {
        // function to add item to list
        console.log("onItemAddClick Function ran")
    }

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
    const handleShoppingListEditMode = (e) => {
        setShoppingListEditMode(!shoppingListEditMode)
    }

    const renderedItems = items.map((item) => {
        return (
            <div key={item.category} className='flex flex-col flex-wrap gap-4 text-lg font-md text-black'>
                <h6 className='text-lg font-bold'>{item.category}</h6>
                <div className='flex flex-wrap gap-4 '>
                    {item.items.map((listItem,) => {
                        return (
                            <Item key={listItem} name={listItem} onAddButtonClick={onItemAddClick} onItemNameClick={handleShowItemDetailsComponent} />
                        )
                    })}
                </div>
            </div>
        )
    });

    return (
        <div className='flex flex-1'>
            <div className='flex flex-1 flex-col gap-12 ps-20 pe-14 py-7 bg-pageBackground '>
                {/* Heading Div */}
                <div className='flex justify-between py-2'>
                    <div className='text-[26px] max-w-[450px] font-medium'>
                        <h1><span className='text-highlight'>Shoppingify</span> allows you take your shopping list wherever you go</h1>
                    </div>
                    <div className='flex flex-1 items-start justify-end'>
                        <div className='bg-white flex flex-1 max-w-[276px] h-14 px-4 rounded-xl items-center shadow-md focus-within:ring-2 ring-bgOrange'>
                            <MdSearch className='w-6 h-6 text-iconBlack' />
                            <input
                                type="text"
                                placeholder='search item'
                                className='flex flex-1 px-2 h-full bg-transparent outline-none placeholder-placeholderGray text-sm font-medium border-none ring-0 focus:ring-0 focus:ring-offset-0 focus:outline-none'
                                value={searchTerm}
                                onChange={handleSearchTerm}
                            />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col flex-wrap gap-12'>
                    {renderedItems}
                </div>
            </div>
            <div className=' max-w-[390px] flex flex-col basis-1/3' >
                {selected === 'shoppingList' && <ShoppingList
                    shoppingList={{}}
                    onAddItemClick={handleShowAddItemComponent}
                    shoppingListEditMode={shoppingListEditMode}
                    handleShoppingListEditMode={handleShoppingListEditMode}

                />}
                {selected === 'addItem' && <AddItem onCancelButtonClick={handleShowAddItemComponent} />}
                {selected === 'itemDetails' && <ItemDetails item={{}} handleShowItemDetailsComponent={handleShowItemDetailsComponent} />}
            </div>
        </div>

    )
}

export default ItemsPage