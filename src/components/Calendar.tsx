
import React from 'react'
import { Eventcalendar, setOptions,getJson, toast, MbscCalendarEvent, MbscEventcalendarView } from '@mobiscroll/react';


const Calendar = () => {
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
        <Eventcalendar view = {view}/>
   </div>)
}
export default Calendar
