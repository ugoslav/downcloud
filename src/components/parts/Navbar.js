import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="flex-headings">
          <a href="/Artists" style={{textDecoration : "none"}}><h4 id="sub-heading">Artists</h4></a>
          <a href="/Albums" style={{textDecoration : "none"}}><h4 id="sub-heading">Albums</h4></a>
          <a href="/Home" style={{textDecoration : "none"}}><h2 id="main-heading">DownCloud</h2></a>
          <a href="/Categories" style={{textDecoration : "none"}}><h4 id="sub-heading">Categories</h4></a>
          <a href="/Downloads" style={{textDecoration : "none"}}><h4 id="sub-heading">Download</h4></a>
        </div>
    </div>
  )
}

export default Navbar