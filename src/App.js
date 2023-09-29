import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import ProfilePage from './components/profile';

import PostFeed from './components/PostFeed';
import Gallery from './components/gallery';

import React, {useState} from 'react';
import AllPostsDatabase from './Database/AllPostsDataBase';
import ProfilesDatabase from './Database/ProfileDatabase';


function App() {

  const [page, setPage] = useState("Home");
  const [profile, setProfile] = useState("Kuni");
  const [Profiles, setProfiles] = useState(ProfilesDatabase);
  const [AllPosts, setAllPosts] = useState(AllPostsDatabase);
  const [login, setLogin] = useState('Kuni')
  
  
  function updateProfiles(newProfiles) {
    setProfiles(newProfiles);
  }

  const changeProfile = (name) => {
    setProfile(name);
    setPage("Profile");
  }
  function updateAllPosts() {
    setAllPosts(newAllPosts());
  }

  const newAllPosts = () => {
    return Profiles.map(profile => profile.posts).flat(); 
  }

  const goToHome = () => {
    setPage("Home");
    setProfile("Home")
  }

  const goToGallery = () => {
    setPage("gallery")
  }


  {if (page === "Home") {
    return (
      <>
        <Nav goToHome={goToHome}/>
        <PostFeed 
          name={profile} 
          type={page} 
          changeProfile={changeProfile} 
          Profiles={Profiles}
          AllPosts={AllPosts} 
          updateProfiles={updateProfiles}
          updateAllPosts={updateAllPosts}
          loggedIn={login}/>
      </>
      
    )
  } 
  else if (page === "gallery") {
    return(
      <>
        <Nav goToHome={goToHome}/>
        <Gallery profile={profile}
          Profiles={Profiles}
        /> 
      </>
    )
  }
  else {
    return (
      <>
        <Nav goToHome={goToHome}/>
        <ProfilePage name={profile}
        goToGallery={goToGallery}/>
        <PostFeed 
          name={profile} 
          type={page} 
          changeProfile={changeProfile}
          Profiles={Profiles}
          AllPosts={AllPosts} 
          updateProfiles={updateProfiles}
          updateAllPosts={updateAllPosts}
          loggedIn={login}/>
      </>
    )
  }}
}

export default App;
