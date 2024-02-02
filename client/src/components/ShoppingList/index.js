import React from "react";
import { ReactComponent as BottleIcon } from "../../assets/bottle.svg";
import { ReactComponent as ShoppingCart } from "../../assets/shoppingCart.svg";


import ShoppingListItem from "../ShoppingListItem";
import { MdEdit } from "react-icons/md";

const ShoppingList = ({ onAddItemClick, shoppingListEditMode, handleShoppingListEditMode }) => {
    const rows = [];
    let lastCategory = null;
    var shoppingList = [
        { id: "1", name: "Avocado", count: "3", category: "Fruits and vegetables" },
        { id: "2", name: "Pre-cooked corn 450g", count: "1", category: "Fruits and vegetables" },
        { id: "3", name: "Chicken 1kg", count: "3", category: "Meat and Fish" },
        { id: "4", name: "Pork fillets 450g", count: "1", category: "Meat and Fish" },
        { id: "5", name: "Salmon 1kg", count: "1", category: "Meat and Fish" },
        { id: "6", name: "Mandarin Nadorcott", count: "1", category: "Meat and Fish" },
        { id: "7", name: "Piele De Sapo Melon", count: "2", category: "Meat and Fish" },
        { id: "8", name: "Chicken leg box", count: "3", category: "Meat and Fish" },
        { id: "9", name: "Piele De Sapo Melon", count: "4", category: "Meat and Fish" },
        { id: "10", name: "Watermelon", count: "6", category: "Meat and Fish" },
        { id: "11", name: "Piele De Sapo Melon", count: "2", category: "Meat and Fish" },
        { id: "12", name: "Chicken leg box", count: "3", category: "Meat and Fish" },
        { id: "13", name: "Piele De Sapo Melon", count: "4", category: "Meat and Fish" },
        { id: "14", name: "Watermelon", count: "6", category: "Meat and Fish" },
    ];

    shoppingList?.forEach((item) => {
        if (item.category !== lastCategory) {
            rows.push(
                <div className="text-[#828282] font-medium text-sm py-[10px]" key={`${item.category[0]}${item.id}`}>
                    <h6>{item.category}</h6>
                </div>
            );
        }
        rows.push(<ShoppingListItem item={item} key={item.id} isShoppingListEditMode={shoppingListEditMode} />);
        lastCategory = item.category;
    });

    return (
        <div className="bg-bgLightOrange h-full flex flex-col pt-11 items-stretch">
            <div className="flex flex-col flex-none">
                <div className="bg-[#80485B] flex flex-1 self-center max-h-[130px] min-w-[310px] rounded-3xl relative px-7">
                    <BottleIcon className="absolute -top-[18px] left-2" />
                    <div className="ml-auto flex flex-1 max-w-[160px] flex-col gap-2 py-[18px]">
                        <span className="text-white text-base font-bold">
                            Didn’t find what you need?
                        </span>
                        <button
                            className="bg-white text-iconBlack text-sm font-bold  py-[10px] h-10 w-[120px] rounded-xl"
                            onClick={() => onAddItemClick(true)}
                        >
                            Add item
                        </button>
                    </div>
                </div>
            </div>
            {rows.length ? (
                <div className="flex h-full flex-col items-stretch w-full ps-11 pe-5 pt-11 gap-10 overflow-y-scroll no-scrollbar">
                    <div className="text-2xl font-bold flex justify-between items-center">
                        <h1>Shopping List</h1>
                        <MdEdit
                            className="cursor-pointer"
                            onClick={handleShoppingListEditMode}
                        />
                    </div>
                    <div className="flex flex-col flex-1 overflow-y-scroll no-scrollbar">
                        {rows}
                    </div>
                </div>
            ) : (
                <div className="flex flex-col flex-1 w-full max-h-[756px] justify-center items-center relative">
                    <h1 className="text-iconBlack text-xl font-bold">No Items</h1>
                    <ShoppingCart className="absolute -bottom-3" />
                </div>
            )}

            <div className="bg-white flex min-h-[130px] w-full justify-self-end justify-center items-center">
                <div
                    className={`flex flex-1 h-full max-h-[60px] max-w-[310px] rounded-xl shadow-md
                   focus-within:outline focus-within:outline-2 focus-within:outline-bgOrange
                    ${!shoppingListEditMode
                            ? " outline outline-2 outline-iconGray"
                            : ""
                        }
                    `}
                >
                    <input
                        className="flex flex-1 rounded-xl px-[18px] active border-none ring-0 focus:ring-0 focus:ring-offset-0 focus:outline-none"
                        type="text"
                        placeholder="Enter List name"
                        disabled={!shoppingListEditMode}
                    />
                    <button
                        className={`flex flex-1 max-w-[86px] items-center justify-center bg-bgOrange rounded-lg text-white text-base font-bold translate-x-0 ${!shoppingListEditMode ? " bg-iconGray outline-iconGray" : ""
                            }`}
                        disabled={!shoppingListEditMode}
                    >
                        Save
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ShoppingList;
