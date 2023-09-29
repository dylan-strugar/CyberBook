import React, { useState, useEffect } from "react";
import ImageContainer from "./galleryImageContainer";
import '../CSS/Gallery.css';

const Gallery = (props) => {

    const [postType, setPostType] = useState(null)
    const [view, setView] = useState(null)

    const Profiles = props.Profiles;
    const profile = Profiles.findIndex(obj => obj.id === props.profile)
    
    useEffect(() => {
        console.log(Profiles[profile])
    })
    
    const viewSingleImage = (ImageIndex) => {
        setView(ImageIndex)
        console.log("viewing")
        console.log(ImageIndex)
    }

    const closeSingleImage = () => {
        setView(null)
    }


    {if (view === null) {
        return (
            <>  <div id="GalleryHeading">
                    <h1 id="GalleryHeaderItems">GALLERY</h1>
                </div>
                

                <div id="Gallery">
                    {Profiles[profile].gallery.map((image, i) => {
                        return (
                            <ImageContainer 
                                viewType={"GalleryImageContainer"}
                                profile={profile} 
                                galleryIndex={i}
                                Profiles={props.Profiles}
                                viewSingleImage={viewSingleImage}
                            />
                        )
                    })}
                </div>
            </>
        )
    } else {
        return (
            <>  
                <div id="GalleryHeading">
                    <button id="GalleryHeaderItems" onClick={ () => { closeSingleImage() } }>X</button>
                    <h1 id="GalleryHeaderItems">{Profiles[profile].gallery[view].caption}</h1>
                    <h2 id="GalleryHeaderItems">{Profiles[profile].gallery[view].date} @ {Profiles[profile].gallery[view].time}</h2>
                </div>
                <div id="Gallery">
                    <ImageContainer 
                        viewType={"singleImage"}
                        profile={profile}
                        galleryIndex={view}
                        Profiles={Profiles}
                        viewSingleImage={viewSingleImage}
                    />
                </div>
            </>
        )

    }

}}

export default Gallery;