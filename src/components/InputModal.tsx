import React, { useState } from 'react'


const InputModal = ({ display, setDisplay,inputTask }: { display: boolean, setDisplay: Function,inputTask:Function }) => {

    

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
        setNewTask({...newTask,[event.target.name]:event.target.value});
        
    }
    if (display)
        return (

            <div className='fixed top-0 left-0 z-50  border-2 shadow-inner bg-slate-400  rounded-lg border-blue-400 border-y-yellow-400 px-4 py-4'>
                <form onSubmit={handleInputTask} onChange={handleChangeInput}>
                    <div className="flex flex-col items-center">
                        <div>
                            <span className='inline'>Avatar</span>
                            <div>Name</div>
                        </div>
                        <div className='flex flex-col'>

                            <label htmlFor='name'>Title</label>
                            <input type="text" name="title" id="name" required  />

                            <label htmlFor='date'>Start Date</label>
                            <input type="datetime-local" name="startDate" id="date" required/>

                            <label htmlFor='date'>End Date</label>
                            <input type="datetime-local" name="endDate" id="date" required/>

                            <label htmlFor='description'>Description</label>
                            <textarea name="description" id="description" cols={10} rows={10} required>

                            </textarea>
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