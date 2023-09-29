import React from "react";
import '../App.css';
import Profiles from '../Database/ProfileDatabase';



const ProfileBanner = (props) => {

    const index = Profiles.findIndex(obj => obj.id === props.name);
    const colour = Profiles[index].color; 
    const banner_style = {
        backgroundColor: colour
    }

    const goToGallery = props.goToGallery


    return (
        <> 
            <div id="ProfilePage">
                <div id="ProfileBanner" style={banner_style}>
                    <img src={Profiles[index].picture} alt="Image not found"/>
                    <div id="info">
                        <h1>{Profiles[index].firstName}</h1>
                        <h3>Age: {Profiles[index].age}</h3>
                        <h3>About me: {Profiles[index].description}</h3>
                    </div> 
                </div>
                <div id="ProfileNav" style={banner_style}>
                    <button class="NavButton">Posts</button>
                    <button class="NavButton" onClick={goToGallery}>Gallery</button>
                    <button class="NavButton">Friends</button>
                    <button class="NavButton">Likes</button>
                </div>
            </div>
        </>
            
    )
}

export default ProfileBanner;