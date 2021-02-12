import React, {useContext} from 'react'
import {UserContext} from '../../utils/UserContext';
import EmployeeAccountManage from './EmployeeAccountManage';
import UserAccountManage from './UserAccountManage'
import API from '../../utils/API';
import jwt_decode from "jwt-decode";

function AccountManage() {
    const {value, token}  = useContext(UserContext);
    if(token){
        const decodedId = jwt_decode(token);
        console.log(decodedId)
    }

    return (
        <div>
            {value==="User" ? <UserAccountManage/> : <EmployeeAccountManage />}
        </div>
    )
}

export default AccountManage
