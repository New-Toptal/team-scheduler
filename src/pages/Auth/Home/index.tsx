import React from 'react'

const Home: React.FC = () => {
    return (
        <div className='box-border w-screen h-screen'>
            <div className="flex flex-col  items-center box-border w-full h-full px-4 py-6">
                <div className='flex justify-center items-center  h-50 w-full'>
                    <div className='flex-shrink'>
                        <h1>Today's schedule</h1>
                    </div>
                    <div className='' >
                        <button className='rounded-full border-red-700'>
                            ok
                        </button>
                    </div>
                </div>
                <div className='flex justify-between w-full h-full'>
                    <div className='flex w-full h-full'>
                        <div className='flex justify-start items-center flex-col w-1/6 px-2 py-4 mx-3 border-2 rounded-md'>
                                <div className='rounded-md'>
                                    <div className='w-40 h-40 bg-red-300'>

                                    </div>
                                    {/* User List */}
                                    <div className='w-full flex flex-col space-y-2 font-mono px-4' >
                                        <div className='grid grid-cols-2 items-center'>
                                            <span className=''>name1</span>
                                            <input className='place-self-start self-center' type="checkbox" name="" id="" />
                                        </div>
                                        <div className='grid grid-cols-2 items-center'>
                                            <span className=''>name2</span>
                                            <input className='place-self-start self-center' type="checkbox" name="" id="" />
                                        </div>
                                        <div className='grid grid-cols-2 items-center'>
                                            <span className=''>name3</span>
                                            <input className='place-self-start self-center' type="checkbox" name="" id="" />
                                        </div>
                                        <div className='grid grid-cols-2 items-center'>
                                            <span className=''>name4</span>
                                            <input className='place-self-start self-center' type="checkbox" name="" id="" />
                                        </div>
                                    </div>

                            </div>
                            <div>
                                sdf
                            </div>
                        </div>
                        <div className='grow-0 w-full h-full'>

                        </div>
                        <div className='w-1/8 m-2'>
                            This is box
                        </div>
                    </div>
                </div>
                <footer>
                    ok
                </footer>
            </div>
        </div>
    )
}
export default Home;