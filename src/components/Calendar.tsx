
import React from 'react'
import { Eventcalendar, setOptions,getJson, toast, MbscCalendarEvent, MbscEventcalendarView } from '@mobiscroll/react';


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
<Eventcalendar
    view={{
        schedule: { type: 'week' }
    }}
    data={myData}
    // clickToCreate={true}
    // dragToCreat={true}
    // dragToMove={true}
    // dragToResize={true}
    dragTimeStep={15}
    eventDelete={true}
/>

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
        <Eventcalendar
            theme="ios" 
            themeVariant="light"
            clickToCreate={true}
            dragToMove={true}
            data={myData}
            view={view}
          
       />
   </div>)
}
export default Calendar
