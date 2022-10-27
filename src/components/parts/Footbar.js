import React from 'react'

const Join = () => {
    return(
        <>
            <p>Didn't have enough?</p>
            <p><span style={{fontFamily : "Pacifico"}}><a href="#" style={{textDecoration : "none",color : "rgb(131,99,0)"}}>Join</a></span> us now for more exclusive content</p>
        </>
    )
}

const Contact = () => {
    return(
        <>
            <p>Contact us at :-<br />
                <a href="#">vicmartello2020@gmail.com</a>
            </p>
        </>
    )
}


const Footbar = () => {
  return (
    <div id="footbar">
      <Join />
      <Contact />
    </div>
  )
}

export default Footbar