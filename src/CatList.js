import React from 'react'

const CatList = props => {
    console.log(props.catPics)
    return <div>
        {props.catPics.map(pic => <img src={`${pic.url}`} />)}
    </div>
}

export default CatList