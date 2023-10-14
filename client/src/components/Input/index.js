import React from 'react'

const Input = ({ title, type }) => {
    return (<>
        {type !== "textarea" ? <div className='flex flex-col gap-y-1.5 self-stretch' >
            <label htmlFor={title} className='text-[#34333A] text-sm font-medium'>{title}</label>
            <input
                className='h-[62px] px-4 border-2 border-[#BDBDBD] rounded-xl outline-none text-base text-iconBlack font-medium focus:border-bgOrange'
                type={type}
                name={title}
                // placeholder={
                //     `${type === 'url' && 'https://example.com'}` ||
                //     `${type === 'text' && 'Enter item name'}`}
                placeholder={(type === 'url' && 'https://example.com') || (type === 'text' && 'Enter item name')}
            />
        </div> : <div className='flex flex-col gap-y-1.5 self-stretch' >
            <label htmlFor={title} className='text-[#34333A] text-sm font-medium'>{title}</label>
            <textarea name={title} className='px-4 py-2 border-2 border-[#BDBDBD] rounded-xl outline-none focus:border-bgOrange text-base text-iconBlack font-medium' rows="4" placeholder="Enter a note" />
        </div>}
    </>


    )
}

export default Input