import React, {useState} from 'react';
import './Count.css';
const Count = props => {
    
    const [number, setNumber] = useState(0);
    const [id, setId] = useState("inputid");

    const handleChange = e => {
        setId(e.target.value);
    }

    return (
        <div className="Count">
            <br/>
            <form>
                <input type = "text" value={id} onChange={handleChange} />
            </form>
            
            
            <h2> hello {id} </h2>
            <p> number = {number}</p>
            <input type = "button" value = "↑" onClick = {() => setNumber(number + 1)} /> &nbsp;
            <input type = "button" value = "↓" onClick = {() => setNumber(number - 1)} />
        </div>
    );
}

export default Count;