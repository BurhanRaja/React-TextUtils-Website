import React, {useState} from 'react'


export default function TextForm() {
    // Javascript
    const [text, setText] = useState("")

    const handleUpCase = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleclearCase = () => {
        setText("")
    }

    const handleLowCase = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    // HTMl
    return(
        <>
        <div className="container my-3">
            <h1>Enter text to Analyze</h1>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange} placeholder="Enter text here"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpCase}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowCase}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleclearCase}>Clear Text</button>
        </div>

        {/* Adding text summary */}
        <div className="container">
            <h4>Your text summary</h4>
            <p>{text.split(" ").length-1} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to Read</p>

            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    );
}