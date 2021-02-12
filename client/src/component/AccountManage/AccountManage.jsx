import React, {useContext, useState, useEffect} from 'react'
import {UserContext} from '../../utils/UserContext';
import EmployeeAccountManage from './EmployeeAccountManage';
import UserAccountManage from './UserAccountManage'
import API from '../../utils/API';
import './AccountManage.css'

function AccountManage() {
    const {value, token, userId}  = useContext(UserContext);
    const [userData, setUserData] = useState({})
    useEffect(() =>{
        API.getUserById(userId)
        .then(res =>{
            setUserData(res.data)
        })
    },[value])


    return (
        <div>
            {value==="User" ? <UserAccountManage userData={userData}setUserData={setUserData} />  : <EmployeeAccountManage userData={userData}setUserData={setUserData}/>}
        </div>
    )
}

export default AccountManage
