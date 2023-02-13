import React from 'react'
const InputModal = ({display,setDisplay}: {display: boolean,setDisplay:Function}) => {
    if (display)
        return (

            <div className='fixed top-0 left-0 z-50  border-2 shadow-inner bg-slate-400  rounded-lg border-blue-400 border-y-yellow-400 px-4 py-4'>
                <div className="flex flex-col items-center">
                    <div>
                        <span className='inline'>Avatar</span>
                        <div>Name</div>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='name'>Title</label>
                        <input id="name" type="text" name="" />
                        <label htmlFor='date'>Date</label>
                        <input type="date" name="" id="date" />
                        <label htmlFor='date'>DeadLine</label>
                        <input type="time" name="" id="date" />
                        <label htmlFor='description'>Description</label>
                        <textarea name="" id="description" cols={10} rows={10}></textarea>
                    </div>
                    <button onClick={ ()=> setDisplay()} className='px-2 py-2 mt-4'>Complete</button>
                </div>
            </div>);
    else return (<></>)
}
export default InputModal;