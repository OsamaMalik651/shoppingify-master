import React, { useState } from "react";
import { MdKeyboardArrowDown, MdClose } from "react-icons/md";

const DropDown = ({ title }) => {
    const [showDropDownMenu, setShowDropDownMenu] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [categoryInput, setCategoryInput] = useState('');
    const [categoryOptions, setCategoryOptions] = useState([
        { id: 1, category: "Fruits and vegetables" },
        { id: 2, category: "Meat and Fish" },
        { id: 3, category: "Beverages" },
        { id: 4, category: "Beverages" },
    ]);

    const handleDropDownClick = () => {
        setShowDropDownMenu(!showDropDownMenu);
    };
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setShowDropDownMenu(false);
    }
    const handleDropDownCloseClick = () => {
        setSelectedCategory(null);
        setShowDropDownMenu(true);
    }

    const handleCategoryInput = (e) => {
        setCategoryInput(e);
    }

    let dropDownOptions = categoryOptions.map((category) => {
        return <li key={category.id} className="rounded-xl flex flex-1 min-h-[46px] items-center px-5 text-lg text-textGray font-medium hover:bg-bgHoverGray hover:text-iconBlack hover:cursor-pointer" onClick={() => handleCategorySelect(category)}>
            {category.category}
        </li>
    })

    return (
        <div className="flex flex-col gap-y-1.5 font-medium self-stretch">
            <label htmlFor={title} className="text-[#34333A] text-sm font-medium">
                {title}
            </label>
            <div className="h-[62px] p-1 border-2 border-[#BDBDBD] rounded-xl outline-none focus-within:border-bgOrange flex item-center justify-center bg-white">
                {!selectedCategory ? <input
                    type="text"
                    className="flex flex-1 rounded outline-none px-2"
                    placeholder="Enter a category"
                    value={categoryInput}
                    onChange={(e) => handleCategoryInput(e.target.value)}
                /> : <span className="w-[310px] h-full flex items-center p-1 px-2 text-base rounded-xl">{selectedCategory.category}</span>}
                {!selectedCategory ? <MdKeyboardArrowDown
                    className="h-full self-stretch text-2xl cursor-pointer"
                    onClick={handleDropDownClick}
                /> : <MdClose
                    className="h-full self-stretch text-2xl cursor-pointer"
                    onClick={handleDropDownCloseClick}
                />}
            </div>
            {showDropDownMenu && (
                <div className="bg-white h-[168px] px-2 py-2 border rounded-xl flex items-stretch z-10">
                    <ul className="flex flex-col flex-1 items-stretch gap-1 overflow-y-scroll no-scrollbar ">
                        {dropDownOptions}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropDown;
