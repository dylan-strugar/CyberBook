import React from "react";
import ProfileBanner from "./ProfileBanner";





const ProfilePage = (props) => {

    const goToGallery = props.goToGallery;
    
    return (
        <ProfileBanner name={props.name}
        goToGallery={goToGallery}/> )
}

export default ProfilePage;