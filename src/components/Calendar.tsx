
import React, { useEffect } from 'react'
import { Eventcalendar, setOptions, getJson, toast, MbscCalendarEvent, MbscEventcalendarView } from '@mobiscroll/react';

// move type description to config file
interface taskIterface {
    title: String,
    startDate: String,
    endDate: String,
    description: String,
}
// 

// change type taskinfo:any to array<interface>

const Calendar = ({ taskInfo }: { taskInfo: any }) => {
    const showNotification = () => {
        var options = {
            body: 'Notification_Body',
            icon: 'https://www.vkf-renzel.com/out/pictures/generated/product/1/356_356_75/r12044336-01/general-warning-sign-10836-1.jpg?    auto=compress&cs=tinysrgb&dpr=1&w=500'
            
        }
        new Notification("Hello",options);
    }
    useEffect(() => {
        return () => {
            if (!("Notification" in window)) {
                console.log("Browser does not support desktop notification");
            } else {
                Notification.requestPermission();
                console.log("Notifications are supported");
                showNotification();
            }
        };
    }, [])

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
