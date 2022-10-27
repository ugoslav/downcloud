import React from 'react'

const Item = ({img,name,category}) => {
    if (category === "site")
    return(
        <>
            <div id="category-item">
                <a href="#"><img src={img} alt={name} id="category-image-site"/></a>
                <h4 id="category-name">{name}</h4>
            </div>
        </>
    )
    else
    return(
        <>
            <div id="category-item">
                <a href="#"><img src={img} alt={name} id="category-image-model"/></a>
                <h4 id="category-name">{name}</h4>
            </div>
        </>
    )
}

const CategoryView = ({data,category}) => {
    const dataSet = [...data]
    console.log(dataSet);
  return (
    <>
        <h2 id="category-heading">Our most popular {category}s</h2>
        <div id="category-view">
            {dataSet.map(item => {
                return <Item key={item.id} img={item.img} name={item.name} category={category}/>
            })}
        </div>
    </>
  )
}

export default CategoryView
