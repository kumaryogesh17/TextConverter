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
    const removeEmoji =()=> {
        let newText = document.getElementById('mybox');
        newText = text.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
          setText(newText);
    }

    const removeExtraSpaces=()=>{
        let newText = document.getElementById('mybox');
           newText = text.replace(/\s+/g, " ");
           setText(newText)
    }
    
    const ClearText =()=>{
     let newText= document.getElementById('mybox').value = "";
     setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    return (
        <>
        
            <div style={{color:props.mode === 'dark'?'white':'black'}}> 
                <h3 className="my-3 text-center" >{props.heading}</h3>
                <div className="mb-3" >
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8" ></textarea>
                </div>

                <button className="btn btn-success mx-2" onClick={upperCaseClick}>Convert to UpperCase</button>
                <button className="btn btn-success mx-2" onClick={lowerCaseClick}>Convert to LowerCase</button>
                <button className="btn btn-success mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-success mx-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-success mx-2" onClick={removeEmoji}>Remove Emojis</button>
                <button className="btn btn-success mx-2" onClick={ClearText}>Clear Text</button>

            </div>
            <div className="conainer" style={{color:props.mode === 'dark'?'white':'black'}}>
                <h2 className="my-3">{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</h2>
                <h3 className="my-3">Preview</h3>
                <p>{text}</p>
            </div>
     

        </>

    )
}
