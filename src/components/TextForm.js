import React, { useState } from 'react'

function TextForm(props) {
    const [text, setText] = useState('Enter text here');

    const handleOnchange = (event) => {
        setText(event.target.value);
    }

    const handleUpclick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleClear = () => {
        setText('');
    }
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpclick}>Convert to Uppercase</button>
            <button className="btn btn-danger mx-2" onClick={handleClear}>Clear</button>
        </div>
    )
}

export default TextForm;
