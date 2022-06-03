import React, {useState} from 'react'


export default function TextForm(props) {
    // Javascript
    const [text, setText] = useState("Enter Text Here")

    const handleUpCase = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    // HTMl
    return(
        <>
        <div className="container my-3">
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpCase}>Convert to UpperCase</button>
        </div>
        </>
    );
}