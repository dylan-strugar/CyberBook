import React, { useState, useEffect } from "react";
import '../CSS/GalleryImageContainer.css';

const ImageContainer = (props) => {

    const Profiles = props.Profiles;
    const [database, setDatabase] = useState(Profiles);
    const [postType, setPostType] = useState(null)
    
    const profile = props.profile;
    const image = props.galleryIndex;
    const viewType = props.viewType;

    useEffect(() => {
        console.log(Profiles[profile].gallery[image])
    })

    const galleryImage = Profiles[props.profile].gallery[image].picture;

    const viewImage = (a) => {
        props.viewSingleImage(a)
    }

    return (
        <button id="imageButton" onClick={ () => {viewImage(image)} }>
            <img id={viewType} src={galleryImage}/>
        </button>
    )
}

export default ImageContainer;