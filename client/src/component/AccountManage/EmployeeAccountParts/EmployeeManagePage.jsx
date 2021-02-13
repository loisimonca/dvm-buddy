import React, {useEffect, useState} from 'react'
import API from '../../../utils/API';

function EmployeeManagePage() {
    const [employee, setEmployee] = useState([]);
    useEffect(()=>{
        API.getEmployee()
        .then(res => {
            setEmployee(res.data)
        })
    },[])
    return (
        <>
        <div className='patient-info-container container'>
        <h1 className='patient-info-title'>Employee Information</h1>
            {employee && employee.map(data =>(
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

export default EmployeeManagePage
