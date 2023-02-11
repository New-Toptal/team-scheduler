import React from 'react'
import { Eventcalendar, setOptions } from '@mobiscroll/react';

const Home = () => {
    return(
        <div>
            <Eventcalendar theme='ios' themeVariant='light' clickToCreate={true} dragToCreate={true} />
        </div>
    )
}
export default Home;