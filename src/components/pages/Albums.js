import React from 'react'
import Navbar from '../parts/Navbar'
import "../../assets/Albums.css"

const AlbumView = () => {
  return(
    <div>

    </div>
  )
}

const AlbumComponent = () => {
    return(
        <div id="album-group">
            <div style={{borderRight : "5px orange solid",paddingRight : "50px"}}>
              <div>Big Image</div>
            </div>
            <div id="side-albums">
                <div>Side Album1</div>
                <div>Side Album2</div>
                <div>Side Album3</div>
            </div>
        </div>
    )
}

const Albums = () => {
  
  return (
    <div>
      <Navbar />
      <div className="division"></div>
        <div id="album-body">
            <AlbumComponent />
            <AlbumComponent />
            <AlbumComponent />
        </div>
    </div>
  )
}

export default Albums