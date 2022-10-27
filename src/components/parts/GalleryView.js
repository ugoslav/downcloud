import React from 'react'

const GalleryView = ({picAdress , vName , mName , duration,  dLink}) => {

  return (
    <div id="gallery-view">
      <div id="galleryPicDiv">
        <a><img src={picAdress} alt={vName} id="gallery-pic"/></a>
      </div>
      <h3 style={{textAlign : "center"}} id="gallery-title">{vName}</h3>
      <div id="gallery-details">
        <a href="#" className='links'><h5 id="model-name">{mName}</h5></a>
        <h5 id="duration">Duration : {duration}</h5>
        <div id="download-details">
            <h5 id="download">Download : </h5>
            <div id="resolution-slab">
                <a href={dLink[0]} className='links'><h6 id="resolutions" className="ld">360p</h6></a>
                <a href={dLink[1]} className='links'><h6 id="resolutions" className="hd">720p</h6></a>
                <a href={dLink[2]} className='links'><h6 id="resolutions" className="fhd">1080p</h6></a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryView