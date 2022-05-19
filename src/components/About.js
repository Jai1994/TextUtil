import React,{useState} from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    //     border: '1px solid white'
    // });
let myStyle ={
  color: props.mode ==='dark'?'white':'#042743',
  backgroundColor: props.mode ==='dark'?'#042743':'white',
  borderColor: props.mode ==='dark'?'white':'#042743'
}
  return (
    <div className='container' style={myStyle}>
        <h1 className='my-2'>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={{color:props.mode ==='dark'?'white':'#042743'}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Analize your text 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      <strong>TextUtils gives you to analyze your text quickly and efficiently</strong>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" 
      data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseTwo" 
      aria-expanded="false" aria-controls="collapseTwo">
      Free to use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
     data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      <strong>this is free characters counter, Convert loewrcase to upppercase and uppercase 
        to loewrcase</strong>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button"
       data-bs-toggle="collapse" style={myStyle} 
      data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Borwser Compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" 
    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This words counter software works in any web brouser</strong> 
        
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
