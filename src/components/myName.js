import React, { useState } from "react";

function MyName(){

    const [name, setName] = useState({firstName: '', lastName: ''})

    return(
        <div>
            <form>
                <label>First Name: </label>
                <input type="text" value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})}/>
                <br></br>
                <label>Last Name: </label>
                <input type="text" value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})}/>
                <h2>Your first name is - {name.firstName}.</h2>
                <h2>Your last name is - {name.lastName}.</h2>
            </form>
        </div>
    )
}

export default MyName;