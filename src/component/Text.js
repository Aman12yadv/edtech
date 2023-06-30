  import React, { useState } from 'react'

  function Text(props) {
  const[text, setText]=useState("Enter your text");
  const[split , clearText]=useState("Enter your text");
  const [copyState, setcopyState] = useState(false);

// let myData  document.querrySelector("myData");
//   function welcome(){ 
//     myData-success.innerHTMl ="Text has been change"
//   }
//   const starttime=(){
//     setTimeout(welcome,1000)
//   }
  

  const toUpperCase =() =>{
  console.log("convert into upperCase" + text);
  props.showAlert("Text converted to Uppercase", "  successfully");
  let newText =text.toUpperCase();
  setText(newText);

  };
  const toLowerCase = () => {
    console.log("convert into lowerCase" + text);
    props.showAlert("Text converted to LowerCase", "  successfully");
    let newtext1 = text.toLowerCase();
    setText(newtext1);
  }
  const onChange =(event) =>{
    console.log("onChange");
    setText(event.target.value);
  }
  const toClear = () => {
    console.log("clear all the text" );
    props.showAlert("Text Cleared", " successfully");

    let newtext= " ";
    setText(newtext);
  }

  const CopyToClipboard = () =>{ 
  let textarea = document.getElementById("textarea");
  props.showAlert("Text Copied to Clipboard", " successfully");

  textarea.select();
  navigator.clipboard.writeText(textarea.value);
  }
  
  const removespace =() =>{
  
    let newText =text.trim();
    props.showAlert("Extra Spaced Removed",  "  successfully");

    setText(newText);
    console.log("convert to extra space" + text);
    };

  const onBoldClick = ()=> {
    document.getElementById("textarea").style.fontWeight="bolder";;
    props.showAlert("Text converted to Bold "," successfully");

  }

  const onitalicClick = ()=> {
  document.getElementById("textarea").style.fontStyle="italic";;
  props.showAlert("Text converted to Italic", " successfully");


  }

  const onunderlineClick = () => {
    document.getElementById("textarea").style.textDecoration="underline";;
    props.showAlert("Underline Applied ","successfully");

  }

    return (
      <div>
        <div  className='container my-5'  style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 className="m-2"  >Enter Name</h1>
        <textarea  className="txta my-2"  rows="8" cols="100" placeholder='Enter your text' value={text}
        onChange={onChange} id='textarea' style={{backgroundColor:props.mode==='dark'?'grey':'white', 
        color:props.mode==='dark'?'white':'black'}}/><br/>
          <button className='btn m-2 btn btn-primary'  onClick={toUpperCase} >Convert to UpperCase</button>
          <button className='btn m-2 btn btn-primary' onClick={toLowerCase}>Convert to LowerCase</button>
          <button className='btn m-2 btn btn-primary' onClick={toClear}>toCLear</button>
          <button className='btn m-2 btn btn-primary' onClick={CopyToClipboard}>Copy to clipboard</button>
          <button className='btn m-2 btn btn-primary' onClick={removespace}>Remove space</button><br/>
          <button className='btn m-2 btn btn-primary' onClick={onBoldClick}>Bold</button>
          <button className='btn m-2 btn btn-primary' onClick={onitalicClick}>Italic</button>
          <button className='btn m-2 btn btn-primary' onClick={onunderlineClick}>Underline</button>
          </div>
        <div className='container-fluid' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 style={{marginLeft:"400px",}}>Character</h1>
        <p style={{marginLeft:"450px",}}>{text.length}</p><br/>
                <h1 style={{marginLeft:"400px",}}>Preview</h1>
                <p style={{marginLeft:"410px",}}>{text}</p>
        <h1 style={{ marginLeft:"400px",}}>WorldCounter</h1>
        <p style={{marginLeft:"410px",}}>{text.split(" ").filter((element)=>{
          return element.length !==0}).length} word &{text.length}Character</p>
          </div> 
      </div>
    )
  }

  

  export default Text;

