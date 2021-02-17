import React from 'react'

function TimeInput({onChange}) {
    return (
<select name="time" id="time" onChange={onChange}>
<option disabled selected value>Select Time</option>
<option value="9:00 AM">9:00 AM</option>
<option value="9:30 AM">9:30 AM</option>
 
<option value="10:00 AM">10:00 AM</option>
<option value="10:30 AM">10:30 AM</option>
 
<option value="11:00 AM">11:00 AM</option>
<option value="11:30 AM">11:30 AM</option>

<option value="12:00 PM">12:00 PM</option>
<option value="12:30 PM">12:30 PM</option>
 
<option value="1:00 PM">1:00 PM</option>
<option value="1:30 PM">1:30 PM</option>
 
<option value="2:00 PM">2:00 PM</option>
<option value="2:30 PM">2:30 PM</option>
 
<option value="3:00 PM">3:00 PM</option>
<option value="3:30 PM">3:30 PM</option>
 
<option value="4:00 PM">4:00 PM</option>

 
</select>
    )
}

export default TimeInput
