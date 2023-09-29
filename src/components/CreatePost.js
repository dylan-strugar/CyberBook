import React, { useState, useEffect } from "react";
import '../App.css';
import Profiles from '../Database/ProfileDatabase';
import '../CSS/CreatePostBox.css';

const CreatePost = (props) => {

    const [inputValue, setInputValue] = useState("");
    const [database, setDatabase] = useState(Profiles);
    const [postType, setPostType] = useState(null)

    useEffect(() => {
        if (Profiles[props.index].id === props.page) {
            console.log("You are on your page")
        }
        else {
            console.log("You are on" + props.name + "'s page.")
        }
    })

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const postStyle = {
        backgroundColor: props.Profiles[props.index].color
    };

    

    const handleSubmit = () => {
        if (props.name === Profiles[props.index].id || props.page === "Home") {
            console.log("You are on" + props.name + "'s page.")
            console.log(props.logged)
            console.log(Profiles)
            if (inputValue.trim() !== '') {
                const newPost = {
                    id: Profiles[props.logged].id,
                    color: Profiles[props.logged].color,
                    content: "@" + props.name + " " + inputValue,
                    date: new Date().toLocaleDateString(),
                    time: new Date().toLocaleTimeString(),
                    likes: [],
                    comments: []
                }

                console.log("creating post for fiends pages")
            
                props.Profiles[props.index].posts.push(newPost);
                props.updateProfiles(props.Profiles);
                props.updatePosts();
                setInputValue('');
            }   
        } else {
            console.log("You are on your page")
            if (inputValue.trim() !== '') {
                const newPost = {
                    id: Profiles[props.index].id,
                    color: Profiles[props.index].color,
                    content: inputValue,
                    date: new Date().toLocaleDateString(),
                    time: new Date().toLocaleTimeString(),
                    likes: [],
                    comments: []
                }
                console.log("creating post for my pages")
    
                props.Profiles[props.index].posts.push(newPost);
                props.updateProfiles(props.Profiles);
                props.updatePosts();
                setInputValue('');
            }
        } ;
    }

    return (
        <div id="CreatePost" style={postStyle}>
            <input type="text" name="post" size="30" onChange={handleChange} value={inputValue} placeholder="What's on your mind?" id="PostInputBox"/>
            <button onClick={handleSubmit} id="PostButton">Post</button>
            <button>Upload image</button>
        </div>
    )
}

export default CreatePost;