import React, { useState } from 'react'
const SingUp = () => {
    const [error, setError] = useState(true);
    const clickLogin = (e: any) => {
        e.preventDefault();
    }
    return (<>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
                <h3 className="text-2xl font-bold text-center">Login to your account</h3>
                <form action="" onSubmit={clickLogin}>
                    <div className="mt-4">
                        <div>
                            <label className="block" htmlFor="email">Email</label>
                            <input type="text" placeholder="Email"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div className="mt-4">
                            <label className="block">Password</label>
                            <input type="password" placeholder="Password"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div className="flex items-baseline justify-between">
                            <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button>
                            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
                        </div>
                    </div>
                    <button onClick={()=>setError((a)=> !a)}>ok</button>
                    {error &&
                        <div id='alert-1' role='alert' data-dismissible="alert" className='w-full animate-pulse flex mb-4 mt-4 text-sm duration-300 text-blue-800 border border-blue-200 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800 px-2 py-4 border-x-2 rounded bg-red-200'>

                            <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                            <div>
                                <strong>Warning</strong> <span> Incoreect your email or Password</span>
                            </div>
                        </div>
                    }
                </form>
            </div>
        </div >
    </>)
}
export default SingUp;