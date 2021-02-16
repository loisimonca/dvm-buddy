import React, {useState, useEffect} from "react";
import UserPage from './UserAccountParts/UserPage'
import Wrapper from "../Wrapper/Wrapper";

function UserAccountSelectBar({ userData, setUserData}) {
    const [state, setState] = useState('personal-info')
    const handleClick = (e)=>{
        const target = e.target.name
        setState(target)
    }
  return (
      <>
    <div className="tabs is-centered">
      <ul>
        <li className="is-active" onClick={handleClick}>
          <a name='personal-info'>
            Personal Information
          </a>
        </li>
        {/* <li onClick={handleClick}>
          <a name='patient-info'>
            Payment History
          </a>
        </li >
        <li onClick={handleClick}>
          <a name='employee-info'>
          Employee Management
          </a>
        </li>
        <li>
          <a>
            <span className="icon is-small">
              <i className="far fa-file-alt" aria-hidden="true"></i>
            </span>
            <span>Documents</span>
          </a>
        </li> */}
      </ul>
    </div>
  {state==="personal-info" && <UserPage userData={userData} setUserData={setUserData} />}

<Wrapper>
  <strong>Upcoming Appointments</strong>
  <div class="notification">
  <button class="delete"></button>
 
</div>
<div class="notification">
  <button class="delete"></button>
  
</div>
<div class="notification">
  <button class="delete"></button>
  
</div>
<div class="notification">
  <button class="delete"></button>
  
</div>
<div class="notification">
  <button class="delete"></button>
  
</div>
</Wrapper>
  
    </>
  );
}

export default UserAccountSelectBar;
