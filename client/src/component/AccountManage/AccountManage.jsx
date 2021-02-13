import React, {useContext, useState, useEffect} from 'react'
import {UserContext} from '../../utils/UserContext';
import API from '../../utils/API';
import './AccountManage.css'
import EmployeeAccountSelectBar from './EmployeeAccountSelectBar';
import UserAccountSelectBar from './UserAccountSelectBar'


function AccountManage() {
    const {value, token, userId}  = useContext(UserContext);
    const [userData, setUserData] = useState({})
    useEffect(() =>{
        API.getUserById(userId)
        .then(res =>{
            setUserData(res.data)
        })
    },[userId])


    return (
        <div>
        {value ==='Employee' &&<EmployeeAccountSelectBar userType={value} userData={userData} setUserData={setUserData}/>}
        {value ==='User' &&<UserAccountSelectBar userType={value} userData={userData} setUserData={setUserData}/>}
        </div>
    )
}

export default AccountManage
