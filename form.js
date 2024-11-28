import React, {useState} from 'react';

function App() {
    const [name, setName]=useState(' ');

    const handelChange=(event)=>{
        setName(event.target.value);
    }

    return(
        <div>
        <input
            type="text" 
            value={name}
            onChange={handelChange}
            placeholder="Enter u r Name"
            ></input>
            <p>This is u r Name:{name}</p>

            <select > 
                 <option value="goa">Goa</option>
        <option value="hassan">Hassan</option>
            </select>
        </div>
    );   
}

export default App;
