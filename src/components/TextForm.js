import React, { useState } from 'react'

function TextForm(props) {
    const [text, setText] = useState('');

    const handleOnchange = (event) => {
        setText(event.target.value);
    }

    const handleUpclick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowclick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClear = () => {
        setText('');
    }
    return (
        <>
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpclick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-2' onClick={handleLowclick}>Convert to lowercase</button>
                <button className="btn btn-primary" onClick={() => { navigator.clipboard.writeText(text) }}>Copy Text</button>
                <button className="btn btn-danger mx-2" onClick={handleClear}>Clear</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}

export default TextForm;
