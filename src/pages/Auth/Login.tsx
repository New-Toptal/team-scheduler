import React from 'react'


const Login = () => {
    return (
        <section className='h-screen w-full p-6  box-border'>
            <div className="flex justify-center items-center h-full">
                <form className='md:w-4/12 lg:w-4/12 lg:ml-20' >
                    <div className="mb-6">
                        <input
                            type="text"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Uername"
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="text"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Email address"
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="text"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Password"
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="text"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Confirm password"
                        />
                    </div>
                    <div className="flex justify-between items-center mb-6">
                    <div className="form-group form-check">
                        <input
                            type="checkbox"
                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            id="exampleCheck3"
                        />
                        <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2"
                        >Remember me</label>
                        
                    </div>
                    </div>
                    <button
                        type="submit"
                        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                    >
                        Sign in
                    </button>

                </form>
            </div>
        </section>

    )
}
export default Login;