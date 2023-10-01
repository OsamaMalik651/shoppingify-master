import React from 'react'
import Input from '../Input'

const AddItem = () => {
    return (
        <div className='bg-white flex flex-1 py-9 px-4 flex-col gap-10'>
            <div className=''>
                <h1 className='text-2xl font-medium'>Add a new item</h1>
            </div>
            <div className='flex flex-col gap-6'>
                <form action="" className='flex flex-col gap-6'>
                    <Input title="Name" type="text" />
                    <Input title="Note" type="textarea" />
                    <Input title="Image" type="url" />
                </form>
            </div>

        </div>
    )
}

export default AddItem
