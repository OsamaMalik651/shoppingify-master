import React from 'react'
import Input from '../Input'
import DropDown from '../DropDown'
import Button from '../Button'

const AddItem = () => {

    const handleSubmit = (event) => {

    }
    return (
        <div className='flex flex-1 py-9 px-6 flex-col gap-10 bg-pageBackground border'>
            <div className=''>
                <h1 className='text-2xl font-medium'>Add a new item</h1>
            </div>
            <div className='flex flex-col gap-6 justify-between flex-1'>
                <form action="" className='flex flex-col flex-1 gap-6 items-center' onSubmit={handleSubmit}>
                    <Input title="Name" type="text" />
                    <Input title="Note" type="textarea" />
                    <Input title="Image" type="url" />
                    <DropDown title="Category" />
                </form>
                <div className='flex gap-7 justify-center flex-1 max-h-48'>
                    <Button secondary>Cancel</Button>
                    <Button primary>Save</Button>
                </div>
            </div>
        </div>
    )
}

export default AddItem
