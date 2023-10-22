import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';


const Button = ({ children, primary, secondary, danger, info, onClick, rest }) => {
    const classes = twMerge(classNames('flex items-center h-fit px-6 py-5 rounded-xl text-base font-bold cursor-pointer', {
        'bg-bgOrange text-white': primary,
        'hover:bg-bgHoverGray ': secondary,
        'bg-danger text-white': danger,
        'bg-info text-white': info

    }));
    return (
        <div
            {...rest}
            className={`${classes}`}
            onClick={onClick}
        >{children}</div>
    )
}

export default Button