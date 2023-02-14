
import React from 'react'
import { Eventcalendar, setOptions,getJson, toast, MbscCalendarEvent, MbscEventcalendarView } from '@mobiscroll/react';
// move type description to config file
interface taskIterface {
    title: String,
    startDate: String,
    endDate: String,
    description: String,
}
// 

// change type taskinfo:any to array<interface>

const Calendar = ({taskInfo}:{taskInfo:any}) => {
    const view = React.useMemo<MbscEventcalendarView>(() => {
        return {
            schedule: { type: 'week' }
        };
    }, []);
    setOptions({
        theme: 'ios',
        themeVariant: 'light'
    });
   return (<div className='overflow-hidden'>
        <Eventcalendar
            theme="ios" 
            themeVariant="light"
            clickToCreate={true}
            dragToMove={true}
            data={taskInfo}
            view={view}
          
       />
   </div>)
}
export default Calendar
