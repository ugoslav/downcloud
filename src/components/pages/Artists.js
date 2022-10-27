import React from "react";
import Navbar from "../parts/Navbar";
import ArtistDB from "../database/ArtistDB";
import GridView from "../parts/GridView";
import Heading from "../parts/Heading";
import Footbar from "../parts/Footbar";
import "../../assets/Home.css";

const Artists = () => {
    return(
        <div>
            <Navbar />
            <div className="division"></div>
            <Heading content={"artists"} />
            <GridView database={ArtistDB}/>
            <Footbar />
        </div>
    )
}

export default Artists;