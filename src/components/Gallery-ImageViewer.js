import React, { useState, useEffect } from "react";

const GalleryImageViewer = (props) => {

    const [postType, setPostType] = useState(null)

    const Profiles = props.Profiles;
    const Image = props.image
    
    useEffect(() => {
        console.log(Profiles[profile].gallery[Image])
    })
    
    return (
        <div>
            <h1>SINGLE IMAGE</h1>
                <img src={imageFullView} />
        </div>
    )  
}

export default GalleryImageViewer;