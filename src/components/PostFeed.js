import React, {useState} from "react";
import CreatePost from "./CreatePost.js";
import '../CSS/PostFeed.css';
import PostBoxHomePage from "./PostBox-HomePage.js";
import PostBoxProfilePage from "./PostBox-ProfilePage.js";

const PostFeed = (props) => {

    const Profiles = props.Profiles;
    const AllPosts = props.AllPosts;

    const [profile, setProfile] = useState('');
    const [database, setDatabase] = useState(Profiles);

    
    {if (props.type === "Profile") {
        const logged = props.Profiles.findIndex(obj => obj.id === props.loggedIn)
        const index = props.Profiles.findIndex(obj => obj.id === props.name)
        // will return your specific profile posts only
        return (
            <div id="PostFeed">
                <CreatePost 
                name={props.name}
                index={index} 
                Profiles={props.Profiles} 
                logged={logged} 
                updatePosts={props.updateAllPosts} 
                updateProfiles={props.updateProfiles}/>
    {/* mapping through all of the posts of a specific profile*/}
                {props.Profiles[index].posts.map((post, i) => {
                    const key = "Profile" + index + "" + i;
                    return (
                        <PostBoxProfilePage 
                            key={key} 
                            type={props.type} 
                            profile={index} 
                            index={i} 
                            changeProfile={props.changeProfile}
                            Profiles={Profiles}
                            AllPosts={AllPosts}
                            updateProfiles={props.updateProfiles}
                            updatePosts={props.updateAllPosts}
                            logged={logged}
                        />
                    )
                })}
            </div>
        )
    }
    else {
        const logged = props.Profiles.findIndex(obj => obj.id === props.loggedIn)
        const index = props.Profiles.findIndex(obj => obj.id === props.name)
//HOME PAGE
        return (
            <div id="PostFeed">
                <CreatePost 
                    name={props.name}
                    index={logged} 
                    Profiles={props.Profiles} 
                    logged={logged} 
                    updatePosts={props.updateAllPosts} 
                    updateProfiles={props.updateProfiles}
                />
{/* mapping through all of the posts of a specific profile*/}
                {props.AllPosts.map((post, i) => {
                    const key = "Home" + index + "" + i;
                    return (
                        <PostBoxHomePage 
                            key={key} 
                            type={props.type} 
                            profile={profile} 
                            index={i} 
                            changeProfile={props.changeProfile}
                            Profiles={Profiles}
                            AllPosts={AllPosts}
                            updateProfiles={props.updateProfiles}
                            updatePosts={props.updateAllPosts}
                            logged={logged}
                        />
                    ) 
                })}
            </div>
        )
    }
    }
}

export default PostFeed;