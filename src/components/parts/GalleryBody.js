import React from 'react'
import "../../assets/GalleryBody.css"

const DisplayItem = ({name,pic}) => {
    return(
        <>
            <div id="thumbnail">
                <img src={pic} alt={name}/>
                <h4>{name}</h4>
            </div>
        </>
    )
}



const GalleryBody = ({content}) => {
    const contentArray = [...content]
  return (
    <div id="gallery-body">
      {contentArray.map(item => {
        return <DisplayItem name={item.name} pic={item.pic} />
      })}
    </div>
  )
}

export default GalleryBody