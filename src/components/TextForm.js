import React, { useState } from 'react'

export default function TextForm(props) {

    const upperCaseClick = () => {

        let newText = text.toUpperCase();
        setText(newText);
    }
    const lowerCaseClick = () => {

        let newText = text.toLowerCase();
        setText(newText);
    }


    const handleCopy = () => {

        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);


    }




    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    return (
        <>
        
            <div style={{color:props.mode === 'dark'?'white':'black'}}> 
                <h3 className="my-3" >{props.heading}</h3>
                <div className="mb-3" >
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8" ></textarea>
                </div>

                <button className="btn btn-success mx-2" onClick={upperCaseClick}>Convert to UpperCase</button>
                <button className="btn btn-success mx-2" onClick={lowerCaseClick}>Convert to LowerCase</button>
                <button className="btn btn-success mx-2" onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="conainer" style={{color:props.mode === 'dark'?'white':'black'}}>
                <h2 className="my-3">{text.split(" ").length} words and {text.length} characters</h2>
                <h3 className="my-3">Preview</h3>
                <p>{text}</p>
            </div>
     

        </>

    )
}
