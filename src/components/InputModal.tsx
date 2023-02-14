import React, { useState } from 'react'


const InputModal = ({ display, setDisplay, inputTask }: { display: boolean, setDisplay: Function, inputTask: Function }) => {



    const [newTask, setNewTask] = useState({
        title: String,
        startDate: String,
        endDate: String,
        description: String,
    });

    const handleInputTask = (event: any) => {
        event.preventDefault();
        console.log('click');
        inputTask(newTask);
    }
    const handleChangeInput = (event: any) => {
        // console.log(event.target.value);
        setNewTask({ ...newTask, [event.target.name]: event.target.value });

    }
    if (display)
        return (

            <div className='fixed top-2 left-2 h-[600px] z-50 border-double border-4 border-indigo-600 border-collapse  border-spacing-2  font-bold  p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4'>
                <form onSubmit={handleInputTask} onChange={handleChangeInput}>
                    <div className="flex flex-col items-center">
                        <div className='flex'>
                            <span className='inline'>Avatar</span>
                            <div>Name</div>
                        </div>
                        <div className='flex flex-col px-4 divide-y-4 justify-items-center space-y-4 text-blue-900'>
                            <div className='flex flex-col mt-4 space-y-2'>
                                <label htmlFor='name' className='first-letter:font-semibold'>Title</label>
                                <input type="text" name="title" id="name" className='border rounded-md border-blue-200' required />
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <label htmlFor='date'>Start Date</label>
                                <input type="datetime-local" name="startDate" id="date" className='border rounded-md border-blue-200' required />
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <label htmlFor='date'>End Date</label>
                                <input type="datetime-local" name="endDate" id="date" className='border rounded-md border-blue-200' required />
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <label htmlFor='description'>Description</label>
                                <textarea  name="description" id="description" className='border rounded-md border-blue-200' cols={5} rows={5} required>

                                </textarea>
                            </div>
                        </div>
                        <div className="flex mt-4">
                            <button onClick={() => setDisplay()} className='px-2 py-2'>Complete</button>
                            <button className='' type='submit'>Add</button>
                        </div>
                    </div>
                </form>
            </div>);
    else return (<></>)
}
export default InputModal;