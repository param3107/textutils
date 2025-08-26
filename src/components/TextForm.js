import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=> {
        // console.log("Uppercase was clicked: " + text);
		let newText = text.toUpperCase();
		setText(newText);    
	}

	const handleLoClick = ()=> {
		// console.log("Lowercase was clicked: " + text);
		let newText = text.toLowerCase();
		setText(newText);
	}

	const handleOnChange = (event) => {
		// console.log("On change");
		setText(event.target.value)
	}

	const handleExtraSpaces = () => {
		// console.log("Remove extra spaces was clicked: " + text);
		let newText = text.split(/[ ]+/);
		setText(newText.join(" "));
	}

	const copyText = () => {
		// console.log("Copy text was clicked: " + text);
		navigator.clipboard.writeText(text);
		props.showAlert("Text copied to clipboard!", "success");
		
	}

	const [text, setText] = useState("");
	return (
		<>
		<style>
        {`
          #myText::placeholder {
            color: ${props.mode === "dark" ? "lightgray" : "gray"};
          }
        `}
      </style>
		<div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
			{/* <div className="d-flex justify-content-between align-items-center">
			</div> */}
			<h1 className='mb-4'>{props.heading}</h1>
			<div className="mb-3">
				<textarea className="form-control" value={text} onChange={handleOnChange} id="myText" rows="8" placeholder="Enter text here" style={{color : props.mode === 'dark' ? 'white' : 'black', backgroundColor:  props.mode === 'dark' ? 'black' : 'white'}}></textarea>
			</div>
			<button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleUpClick}>Uppercase</button>
			<button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleLoClick}>Lowercase</button>
			<button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
			<button className="btn btn-success mx-1 my-1" disabled={text.length===0} onClick={copyText}>Copy Text</button>
			

			<button className="btn btn-danger mx-1 my-1 float-end" disabled={text.length===0} onClick={() => setText("")}>Clear Text</button>
		</div>
		<div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
			<h2>Your text summary</h2>
			<p>{text.split(/\s+/).filter((element)=>{return element.length!==0;}).length} words and {text.length} characters</p>
			<p>{Math.round(text.split(/\s+/).filter((element)=>{return element.length!==0;}).length / 200)} minutes and {Math.round((text.split(/\s+/).filter((element)=>{return element.length!==0;}).length % 200) * 60 / 200)} seconds to read</p>
			<h2>Preview</h2>
			<p>{text.length > 0 ? text : "Nothing to preview!"}</p>
		</div>
		</>
  )
}
