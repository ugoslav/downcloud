import React from 'react'
import Navbar from '../parts/Navbar'
import Intro from '../parts/Intro'
import HomePagePics from '../database/HomePagePics'
import GalleryView from '../parts/GalleryView'
import CategoryView from '../parts/CategoryView'
import CategoryPics from '../database/CategoryPics'
import Footbar from '../parts/Footbar'
import "../../assets/Home.css"

const Home = () => {

  const categoryData = [...CategoryPics]

  const siteData = categoryData.filter(checkSite);
  function checkSite(data)
  {
    if (data.type === "site")
      return data;
  }
  
  const modelData = categoryData.filter(checkModel);
  function checkModel(data)
  {
    if (data.type === "artist")
      return data;
  }
  let index = 0
    return(
      <div id="body">
        <Navbar />
        <div className="division"></div>

        <Intro />
        <GalleryView picAdress={HomePagePics[index].pic} vName={HomePagePics[index].name} mName={HomePagePics[index].artist} duration={HomePagePics[index].duration} dLink={HomePagePics[index++].d_link}/>
        <div className="division"></div>
        
        <CategoryView data={siteData} category="site"/>
        <GalleryView picAdress={HomePagePics[index].pic} vName={HomePagePics[index].name} mName={HomePagePics[index].artist} duration={HomePagePics[index].duration} dLink={HomePagePics[index++].d_link}/>
        <div className="division"></div>
        
        <CategoryView data={modelData} category="model"/>
        <GalleryView picAdress={HomePagePics[index].pic} vName={HomePagePics[index].name} mName={HomePagePics[index].artist} duration={HomePagePics[index].duration} dLink={HomePagePics[index++].d_link}/>
        
        <Footbar />
      </div>
    )
}

export default Home