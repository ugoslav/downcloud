import React from 'react'

const WelcomeMessage = ({imgLink, imgNametext , day}) => {
    return (
        <div>
            <img src={imgLink} id="images"></img>
            <h2>{imgNametext}</h2>
            <h3>{day}</h3>
        </div>
    )
}

export default WelcomeMessage
