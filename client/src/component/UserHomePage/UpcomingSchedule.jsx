import React, {useContext, useEffect, useState} from 'react'
import API from '../../utils/API'
import { UserContext } from '../../utils/UserContext'

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
                    <div className="upcoming__schedule__data">{schedule.apptDate}</div>
                    <div className="upcoming__schedule__time">{schedule.apptTime}</div>
                </div>
            </div>
        </div>
    )
}

export default UpcomingSchedule
