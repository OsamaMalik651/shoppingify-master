import React from "react";
import {
    MdOutlineArrowRightAlt,
} from "react-icons/md";
import Button from "../Button";

const ItemDetails = ({ handleShowItemDetailsComponent }) => {
    let item = {
        id: 1,
        url: "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Avocados-3d84a3a.jpg?resize=768,574",
        name: "Avocado",
        category: "Fruits and vegetables",
        description:
            "Nutrient-dense foods are those that provide substantial amounts of vitamins, minerals and other nutrients with relatively few calories. One-third of a medium avocado (50 g) has 80 calories and contributes nearly 20 vitamins and minerals, making it a great nutrient-dense food choice. ",
    };
    return (
        <div className="bg-pageBackground border h-full flex flex-col items-stretch pt-7 px-11 gap-8">
            <div className="flex gap-1 text-bgOrange font-bold cursor-pointer">
                <MdOutlineArrowRightAlt className="w-6 h-6 rotate-180" onClick={() => handleShowItemDetailsComponent()} />
                back
            </div>
            <div className="flex flex-1 flex-col gap-14">
                <div className="flex items-stretch">
                    <img
                        src={item.url}
                        alt=""
                        className="rounded-3xl flex-1 max-h-[220px] object-cover"
                    />
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-3">
                        <span className="text-iconGray text-xs font-medium">name</span>
                        <span className="text-black text-2xl font-medium">{item.name}</span>
                    </div>

                    <div className="flex flex-col gap-3">
                        <span className="text-iconGray text-xs font-medium">category</span>
                        <span className="text-black text-lg font-medium">{item.category}</span>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-iconGray text-xs font-medium">note</span>
                        <span className="text-black text-lg font-medium max-h-[210px] overflow-y-scroll no-scrollbar">{item.description}</span>
                    </div>
                    <div className='flex gap-7 justify-center flex-1 max-h-48 mt-10'>
                        <Button secondary >delete</Button>
                        <Button primary >Add to List</Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ItemDetails;
