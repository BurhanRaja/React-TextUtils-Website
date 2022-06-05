import React, {useState} from 'react'


export default function TextForm(props) {
    // Javascript
    const [text, setText] = useState("")

    // UPPERCASE
    const handleUpCase = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    // lowercase
    const handleLowCase = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }
    // 'empty'
    const handleclearCase = () => {
        setText("")
    }
    // Copy Clipboard
    const handleCopy = () => {
        let newText = document.getElementById("exampleFormControlTextarea1")
        newText.select()
        navigator.clipboard.writeText(newText.value)
    }
    // Remove Extra Space
    const handlePunctuation = () => {
        let newText = text
        .replace(/[.,;:'"!#$%*?]/g, "")
        .replace(/s{2,}/g, " ")
        console.log(text)
        setText(newText)
    }

    const handleSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }

    // TextArea onchange
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    // HTMl
    return(
        <>
        <div className="container my-3" style={{color: props.mode === 'light' ? 'black': 'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? 'white': 'black', color: props.mode === 'light' ? 'black': 'white'}} placeholder="Enter text here"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpCase}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowCase}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleclearCase}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy to Clipboard</button>
            <button className="btn btn-primary mx-1" onClick={handlePunctuation}>Remove Punctuation</button>
            <button className="btn btn-primary mx-1" onClick={handleSpace}>Remove Extra Space</button>
        </div>

        {/* Adding text summary */}
        <div className="container" style={{color: props.mode === 'light' ? 'black': 'white'}}>
            <h4>Your text summary</h4>
            <p>{text.split(" ").length-1} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to Read</p>

            <h3>Preview</h3>
            <p>{text.length>0 ? text: "Enter Text to Preview here"}</p>
        </div>
        </>
    );
}