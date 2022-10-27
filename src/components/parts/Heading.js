import React from 'react'
import "../../assets/Heading.css"

const Heading = ({ content }) => {
  return (
    <div id="heading-div">
      <h2 id="heading">Here are our most popular {content}</h2>
    </div>
  )
}

export default Heading