import React from 'react'

const Home: React.FC = () => {
    return (
        <div className='box-border w-screen h-screen'>
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
                <div className='flex justify-between w-full h-full'>
                    <div className='flex w-full h-full'>
                        <div className='flex justify-start items-sat flex-col w-1/6 px-2 py-4 mx-3 border-2 rounded-md'>

                            <div className='md:my-2 w-full h-40 bg-red-300'>

                            </div>
                            {/* User List */}
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
                            
                            {/*My Schedule  */}

                            <div className='flex w-full justify-start'>
                                <div>
                                <h3 className='mx-auto'>My Task</h3>
                                </div>

                            </div>


                        </div>
                        <main className='grow-0 w-full h-full'>

                        </main>
                        {/* Task Box */}
                        <div className='w-1/6 m-2'>
                            <div className="flex w-full h-full shadow-lg   bg-transparent bg-white-300">

                            </div>
                        </div>
                    </div>
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