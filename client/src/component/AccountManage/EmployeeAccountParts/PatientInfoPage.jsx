import React, {useEffect, useState} from 'react'
import API from '../../../utils/API';
import '../AccountManage.css'

export default function PatientInfoPage() {
    const [patient, setPatient] = useState([]);
    useEffect(()=>{
        API.getUser()
        .then(res => {
            setPatient(res.data)
        })
    },[])
    return (
        <>
        <div className='patient-info-container container'>
        <h1 className='patient-info-title'>Patient Information</h1>
            {patient && patient.map(data =>(
                <div className='patient-info-wrap'>
                    <h1>NAME: {data.firstName} {data.lastName}</h1>
                    <h1>CONTACT NUMBER: {data.tel}</h1>
                    <h1>EMAIL: {data.email}</h1>
                </div>
            ))}
        </div>
        </>
    )
}