import React from "react";
import { ReactComponent as AppLogo } from "../../assets/logo.svg";
import { FaListUl } from "react-icons/fa6";
import { MdReplay, MdInsertChartOutlined } from "react-icons/md";
import NavbarButton from "../NavbarButton";
import ShoppingCartButton from "../ShoppingCartButton";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex flex-col items-center justify-between w-24 py-8 ">
            <div className="w-full flex justify-center">
                <AppLogo />
            </div>
            <div className="flex flex-col gap-14 w-full ">
                <NavLink to="/">
                    {({ isActive, isPending }) => (
                        <NavbarButton
                            title="Items"
                            isActive={isActive}
                            isPending={isPending}
                        >
                            <FaListUl className="w-7 h-7" />
                        </NavbarButton>
                    )}
                </NavLink>
                <NavLink to="/history">
                    {({ isActive, isPending }) => (
                        <NavbarButton
                            title="History"
                            isActive={isActive}
                            isPending={isPending}
                        >
                            <MdReplay className="w-7 h-7" />
                        </NavbarButton>
                    )}
                </NavLink>
                <NavLink to="/statistics">
                    {({ isActive, isPending }) => (
                        <NavbarButton
                            title="Statistics"
                            isActive={isActive}
                            isPending={isPending}
                        >
                            <MdInsertChartOutlined className="w-7 h-7" />
                        </NavbarButton>
                    )}
                </NavLink>
            </div>
            <ShoppingCartButton value={3} />
        </div>
    );
};

export default Navbar;
