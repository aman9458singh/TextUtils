import React, { useState } from "react";

export default function TextArea(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("converted to uppercase", "success")
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("converted to lowercase", "success")
  };

  const handleClearText = () => {
    setText("");
    props.showalert("Text cleared", "success")
  };

  const handleCopyText = () => {
    var copyText = document.getElementById("my-box");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    document.getSelection().removeAllRanges();
    props.showalert("copied to clipboard", "success")
  };

  const handleSpaceText = () => {
    var mystring = text.split(/[ ] +/);
    setText(mystring.join(" "));
    props.showalert("extra spaces removed", "success")
  };

  return (
    <>
      <div>
        <h1 style={{color: props.mode === 'dark' ? 'white' : '#031632'}}>{props.heading}</h1>
        <div className="mb-3 my-4" style={{color: props.mode === 'light' ? '#031632' : 'black'}}>
          <textarea
            className="form-control" style={{backgroundColor: props.mode === 'light' ? 'white' : '#4bdd90'}}
            value={text}
            onChange={handleOnChange}
            id="my-box"
            rows="8"
          ></textarea>
        </div>
        <button disabled = {text.length===0} className="btn btn-secondary mx-1 my-1" onClick={handleUpClick}>
          UPPERCASE
        </button>
        <button disabled = {text.length===0} className="btn btn-secondary mx-1 my-1" onClick={handleLoClick}>
          LOWERCASE
        </button>
        <button disabled = {text.length===0} className="btn btn-info mx-1 my-1" onClick={handleSpaceText}>
          REMOVE EXTRA SPACES
        </button>
        <button disabled = {text.length===0} className="btn btn-secondary mx-1 my-1" onClick={handleCopyText}>
          COPY
        </button>
        <button disabled = {text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClearText}>
          CLEAR
        </button>
      </div>

      <div className="container my-2" style = {{color: props.mode === 'dark' ? 'white' : '#14057e'}}>
        <h2>summary :</h2>
        <p>
          No of words : {text.split(/\s+/).filter((element)=>{return element.length !==0}).length} and alphabets : {text.split("").length}
        </p>
        <h3>preview :</h3>
        <p>{text.length>0?text:"Nothing to preview!!"}</p>
        <h3>Average time to read : {0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length}</h3>
      </div>
    </>
  );
}
