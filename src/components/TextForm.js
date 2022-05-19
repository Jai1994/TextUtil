
import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleUpClick=()=>{
     var newText = text.toUpperCase();
     setText(newText);
     props.showAlert('Converted to success !', 'success');
    }

    const handleOnChange=(event)=>{
    setText(event.target.value);
    }

    const handleLoClick=(event)=>{
      var newText = text.toLowerCase();
     setText(newText);
     props.showAlert('Converted to success !', 'success');
    }

    const handleClearClick=(event)=>{
      var newText = ' ';
     setText(newText);
     props.showAlert('Textclear to success !', 'success');
    }

    const handleCopy=()=>{
        var text = document.getElementById('myBox');
        text.select();
        text.setSelectionRange();
        navigator.clipboard.writeText(text.value);
        props.showAlert('TextCopy to clipboard!', 'success');
    }
    const handleExtraSpaces=()=>{
      var newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert(' Extraspace Removed !', 'success');
    }
  return (
    <>
    <div className='container my-2' style={{color: props.mode ==='dark'?'white':'black'}}>
        <h2 className='mb-2'>{props.heading}</h2>
            <div className="mb-3">
                 <textarea className="form-control" style={{backgroundColor: props.mode ==='dark'?'gray':'white', color: props.mode ==='dark'?'white':'black'}}
                  value={text} onChange={handleOnChange} id="myBox" 
                 rows="8"></textarea>
            </div>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' 
        onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1'
         onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' 
        onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' 
        onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1'
         onClick={handleExtraSpaces}>Remove ExtraSpace</button>
    </div>
    <div className='container my-3' style={{color: props.mode ==='dark'?'white':'black'}}>
    <h2> Your Text Summary</h2>
    <p>{text.split(/\s+/).filter((element)=>{ return element.length !==0}).length} words and {text.length} Characters</p>
    <p>{0.008 * text.split(' ').filter((element)=>{ return element.length !==0}).length} Characters read</p>
    <h2> Preview</h2>
    <p>{text.length>0?text:'Nothing to preview !'}</p>
    </div>
    </>
  )
}
