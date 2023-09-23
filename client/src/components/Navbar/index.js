import React from "react";
import { ReactComponent as AppLogo } from "../../assets/logo.svg";
import { FaListUl } from "react-icons/fa6";
import { MdReplay, MdInsertChartOutlined, MdOutlineShoppingCart } from "react-icons/md";
import NavbarButton from "../NavbarButton";
import ShoppingCartButton from "../ShoppingCartButton";

const Navbar = () => {
    return (
        <div className="flex flex-col justify-between w-24 py-8 items-center">
            <div className="w-full flex justify-center">
                <AppLogo />
            </div>
            <div className="flex flex-col gap-14 w-full ">
                <NavbarButton title="Items">
                    <FaListUl className="w-7 h-7" />
                </NavbarButton>
                <NavbarButton title="History">
                    <MdReplay className="w-7 h-7" />
                </NavbarButton>
                <NavbarButton title="Statistics">
                    <MdInsertChartOutlined className="w-7 h-7" />
                </NavbarButton>
            </div>
            <ShoppingCartButton value={3} />

        </div>
    );
};

export default Navbar;
