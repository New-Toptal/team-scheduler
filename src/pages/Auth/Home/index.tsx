import React from 'react'
import { Eventcalendar, getJson, toast, MbscCalendarEvent, MbscEventcalendarView } from '@mobiscroll/react';

const Home: React.FC = () => {

    const view = React.useMemo<MbscEventcalendarView>(() => {
        return {
            schedule: { type: 'week' }
        };
    }, []);

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
                        <div className='flex justify-start items-center flex-col w-1/6 mx-3 border-2 border-spacing-2  rounded-md'>
                            <div>
                                <div className='box-border rounded-md w-100'>
                                    
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