import React, {useState,useEffect} from 'react'
import Calendar from '../../../components/Calendar';
import InputModal from '../../../components/InputModal';
// interface taskIterface {
    //     title: String,
    //     startDate: String,
    //     endDate: String,
    //     description: String,
    // }
    const myData = [{
        title: 'Fixed event',
        start: '2023-02-13T06:00',
        end: '2023-02-13T09:00',
        color: '#9e9e9e',
        editable: false
    }, {
        title: 'Fixed event',
        start: '2023-02-14T12:00',
        end: '2023-02-14T14:00',
        color: '#9e9e9e',
        editable: false
    }, {
        title: 'Tech call',
        start: '2023-02-12T11:00',
        end: '2023-02-12T15:00',
        color: '#cc9900'
    }];                      
const Home: React.FC = () => {
    const [taskInfo,setTaskInfo] = useState([{}]);
    useEffect(() => {
      setTaskInfo(myData);
    }, [])
    interface taskIterface {
        title: String,
        startDate: String,
        endDate: String,
        description: String,
    }
    const hideDisplay = () => {
        setDisplay(false);
    }
    const createNewTask = (task:taskIterface) => {
        const {startDate:start,endDate:end,...rest} = task;
        const new_obj = {start,end,...rest};
        setTaskInfo([...taskInfo,new_obj]);
        console.log(taskInfo);
    }
    const [display, setDisplay] = useState(false);
    const showInputModal = () => {
        setDisplay(true)
    }
    return (
        <div className='box-border  max-w-screen h-screen'>
            <div className="flex flex-col  items-center box-border w-full h-full px-4 py-6">
                <header className='w-full grid grid-cols-3 h-10 items-center'>
                    <div className='items-center'>
                        <h1>Today's schedule</h1>
                    </div>
                    <div className='flex justify-center items-center'>
                        Tittle
                    </div>
                    <div className='flex justify-end space-x-2'>

                        <div className="right">

                            <div
                                className="bg-gradient-to-tr from-yellow-500 to-yellow-400 w-[20] h-[20]  rounded-full shadow-xl shadow-yellow-400 border-white   border-2  flex justify-center items-center ">
                                <button className="text-white text-md px-2">OK</button>
                            </div>
                        </div>
                        <div>
                            <div className="flex">
                                img
                            </div>
                        </div>
                    </div>
                </header>
                <span className='w-full  h-1 rounded-sm border-x-purple-200 border-2  my-4'>

                </span>
                <div className='flex justify-between w-full max-md:w-full max-md:h-full h-full'>
                    <div className='flex w-full h-full'>
                        <div className='flex justify-between items-sat flex-col w-1/6 px-2 py-4 mx-3 border-2 rounded-md'>

                            <div className='md:my-1 w-full h-40 rounded-md shadow-xl bg-blue-300'>
                                <div className='flex justify-center py-4'>
                                    <h1>Calendar</h1>
                                    <div className='grid'>

                                    </div>
                                </div>

                            </div>
                            {/* User List */}
                            <div>
                                <h1 className='mb-3 border-dotted border-b border-gray-200'>User List</h1>
                                <div className='w-full flex flex-col justify-between space-y-2 font-mono px-6' >
                                    <div className='grid grid-cols-2 items-center'>
                                        <span className='place-self-start'>name1</span>
                                        <input className='place-self-center self-center' type="checkbox" name="" id="" />
                                    </div>
                                    <div className='grid grid-cols-2 items-center'>
                                        <span className='place-self-start'>name2</span>
                                        <input className='place-self-center self-center' type="checkbox" name="" id="" />
                                    </div>
                                    <div className='grid grid-cols-2 items-center'>
                                        <span className='place-self-start'>name3</span>
                                        <input className='place-self-center self-center' type="checkbox" name="" id="" />
                                    </div>
                                    <div className='grid grid-cols-2 items-center'>
                                        <span className='place-self-start'>names4</span>
                                        <input className='place-self-center self-center' type="checkbox" name="" id="" />
                                    </div>
                                </div>
                            </div>
                            {/*My Schedule  */}
                            <div className='mt-3'>
                                <h3 className='border-dotted border-b border-gray-200'>My Task</h3>
                                <div className='flex w-full justify-start hover:shadow-sm'>
                                    <div className='px-4 mt-3'>
                                        <ul className='space-y-3'>
                                            <li className='border-b border-gray-200'>
                                                <button className='bg-gradient-to-tr from-amber-500-500 to-yellow-400 w-[20] h-[20] text-center text-blue-400'>Task1</button>
                                            </li>
                                            <li className='border-b border-gray-200'>Task2</li>
                                            <li className='border-b border-gray-200' >Task3</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>

                        </div>
                    
                        <main id='event' className='grow-0 w-full overflow-scroll'>
                            <Calendar taskInfo={taskInfo} />
                            {/* Change Component */}
                            <table>
                                <thead>
                                    <tr>
                                        <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                                            <span className="xl:block lg:block md:block sm:block hidden">Sunday</span>

                                        </th>
                                        <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                                            <span className="xl:block lg:block md:block sm:block hidden">Monday</span>

                                        </th>
                                        <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                                            <span className="xl:block lg:block md:block sm:block hidden">Tuesday</span>

                                        </th>
                                        <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                                            <span className="xl:block lg:block md:block sm:block hidden">Wednesday</span>

                                        </th>
                                        <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                                            <span className="xl:block lg:block md:block sm:block hidden">Thursday</span>

                                        </th>
                                        <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                                            <span className="">Friday</span>

                                        </th>
                                        <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                                            <span className="xl:block lg:block md:block sm:block hidden">Saturday</span>

                                        </th>
                                    </tr>
                                </thead>

                            </table>
                            {/* Add Calendar component */}
                        </main>
                        {/* Task Box */}
                        <div className='w-1/12 m-2'>
                            <div className="flex flex-col w-full h-full shadow-lg   bg-transparent bg-white-300 px-2 py-6">
                                {/* Add Task */}

                                <div className='mx-auto'>
                                    <button onClick={showInputModal} className='hover:animate-bounce w-[10] h-[10] text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'>Add Task</button>

                                </div>
                                {/* Add User */}
                                <div>
                                    <button className='w-[10] h-[10] text-white bg-pink-700 hover:bg-purple-800 hover:animate-bounce focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'>Add User</button>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Task Input Modal */}
                <div className=''>
                    <InputModal display={display} setDisplay={hideDisplay} inputTask={createNewTask} />
                </div>
                {/* Component */}
                <div>

                </div>
                <footer className='w-full'>
                    <div className=''>
                        ok
                    </div>

                </footer>
            </div>
        </div>
    )
}
export default Home;