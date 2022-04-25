import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", 'success')
    }
    const handleLoClick = () => {
        // console.log("LowerCase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", 'success')
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared!", 'warning')
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied To Clipboard", "success");
    }
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter Text here..')
    // text = "New Text"; //Wrong way to change the state
    // setText("New text"); // Right way to change the state
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#252548':'white' , color: props.mode==='dark'?'white':'black' }} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-info mx-2 my-1" onClick={handleUpClick}>Convert to UPPERCASE</button>
            <button disabled={text.length===0} className="btn btn-info mx-2 my-1" onClick={handleLoClick}>Convert to lowerCase</button>
            <button disabled={text.length===0} className="btn btn-info mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-info mx-2 my-1" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your Text summary</h2>
            <p><b>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length}</b> words & <b>{text.length}</b> characters.</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes to read.</p>

            <h2>Preview Text</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
