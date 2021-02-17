import React, {useContext, useEffect, useState} from 'react'
import API from '../../utils/API'
import { UserContext } from '../../utils/UserContext'
import './UpcomingSchedule.css'

function UpcomingSchedule() {
    const {userId} = useContext(UserContext)
    const [schedule, setSchedule] = useState([])
    useEffect(()=>{
        API.getApptByCustomer(userId)
        .then(res =>{
            setSchedule(res.data[0])
        })
    },[userId])
    return (
        <div>
            <div className="upcoming__schedule__container">
                <div className="upcoming__schedule__wrap">
                    <h1 className="upcoming__schedule__title">Upcoming Schedule</h1>
                    {schedule ?
                        <>
                            <div className="upcoming__schedule__data">Date: {schedule.apptDate}</div>
                            <div className="upcoming__schedule__time">At: {schedule.apptTime}</div>
                        </>
                    : 
                        <div>No upcoming data</div>
                    }   
                </div>
            </div>
        </div>
    )
}

export default UpcomingSchedule
