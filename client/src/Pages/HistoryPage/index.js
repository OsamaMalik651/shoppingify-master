import React, { Fragment } from 'react';
import ListItem from '../../components/ListItem';
import { Outlet } from 'react-router-dom';


const HistoryPage = () => {

    // static data.
    let shoppingLists = [{
        id: 1,
        title: "Grocery List",
        createdOn: new Date('8/27/2020'),
        status: "completed"
    }, {
        id: 2,
        title: "Eero's farewell party",
        createdOn: new Date('8/24/2020'),
        status: "completed"
    },
    {
        id: 3,
        title: "Board game week 2",
        createdOn: new Date('7/27/2021'),
        status: "completed"
    },
    {
        id: 4,
        title: "Grocery List",
        createdOn: new Date('7/16/2021'),
        status: "cancelled"
    },
    ];
    // data from backend will be received as this function's output
    const groupedShoppingList = shoppingLists.reduce((group, shoppingList) => {
        const groupDate = `${shoppingList.createdOn.getMonth()}-${shoppingList.createdOn.getFullYear()}`;
        if (!group[groupDate]) {
            group[groupDate] = [];
        }
        group[groupDate].push(shoppingList);
        return group;
    }, {});

    var renderedShoppingLists = Object.keys(groupedShoppingList).map((key) => {
        const shoppingListGroup = groupedShoppingList[key];
        const groupTitle = new Date(shoppingListGroup[0].createdOn).toLocaleDateString('en-us', { month: 'short', year: 'numeric' });
        return (<div key={key} className='flex flex-col gap-4'>
            <div className='text-xs font-medium'>
                {groupTitle}
            </div>
            <div className='flex flex-col gap-7'>
                {shoppingListGroup.map((shoppingList) => {
                    return <ListItem shoppingList={shoppingList} key={shoppingList.id} />
                })}
            </div>
        </div>
        )
    });
    return (
        <div className='flex flex-1'>
            <div className='flex flex-1 flex-col gap-12 ps-20 pe-14 py-7 bg-pageBackground'>
                {/* <div className='text-[26px] max-w-[450px] font-medium'>
                    <h1>Shopping History</h1>
                </div>
                <div className='flex flex-1 flex-col gap-16 flex-wrap'>
                    {renderedShoppingLists}
                </div> */}
                <Outlet context={renderedShoppingLists} />
            </div>
            <div className=' max-w-[390px] flex flex-col basis-1/3' ></div>
        </div>
    )
}

export default HistoryPage