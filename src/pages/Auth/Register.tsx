import React,{useState,useEffect} from 'react';
const Register = () => {
    return (<>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="px-8 py-6 mt-4 w-2/6 text-left bg-white shadow-lg">
                <h3 className="text-2xl font-bold text-center">Create your account</h3>
                <form action="">
                    <div className="mt-4">
                        <div>
                            <label className="block" htmlFor="email">Username</label>
                            <input type="text" name='username' placeholder="Username"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div className="mt-4">
                            <label className="block">Email</label>
                            <input type="password" name='email' placeholder="Email"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div className="mt-4">
                            <label className="block">Password</label>
                            <input type="password" name='password' placeholder="Password"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div className="mt-4">
                            <label className="block">Confrim Password</label>
                            <input type="password" name='repassword' placeholder="Password"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div className="flex items-baseline justify-between">
                            <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Register</button>
                            <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>)
}

export default Register; 