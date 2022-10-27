import React from 'react'
import "../../assets/GridView.css"


const DisplayGrid = ({name,pic,link}) => {
  return(
    <>
      <div id="thumbnail">
        <a href={link}><img src={pic} alt={name} id="img-size"/></a>
        <h4>{name}</h4>
      </div>
    </>
  )
}

const GridView = ({ database }) => {
const contentArray = [...database];
function shuffleArray(array) {
for (let i = array.length - 1; i > 0; i--) {

	let j = Math.floor(Math.random() * (i + 1));
				
	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}
	
return array;
}
const shuffledArray = shuffleArray(contentArray);

  return (
    <div id="grid-view">
      {shuffledArray.map(item => {
        return <DisplayGrid name={item.name} pic={item.pic} link={item.link}/>
      })}
    </div>
  )
}

export default GridView