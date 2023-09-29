import React, { useState, useEffect } from "react";
import '../App.css';
import Profiles from '../Database/ProfileDatabase';
import '../CSS/CreatePostBox.css';

const CreatePostComment = (props) => {

    const [inputValue, setInputValue] = useState("");
    const [database, setDatabase] = useState(Profiles);

    useEffect(() => {
        setInputValue(typeof props.reply === 'string' ? props.reply + inputValue : inputValue);
    }, [props.reply]);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const postStyle = {
        backgroundColor: Profiles[props.commentor].color
    };


    const handleSubmit = () => {

        if (inputValue.trim() !== '') {
            console.log(props.index)
            const newPost = {
                id: Profiles[props.commentor].id,
                color: Profiles[props.commentor].color,
                content: inputValue,
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString(),
                likes: [],
                comments: []
            }

            Profiles[props.profile].posts[props.index].comments.push(newPost);
            props.updateProfiles(props.Profiles);
            props.updatePosts();
            setInputValue('');  
        };
    }

    return (
        <div id="CreatePost" style={postStyle}>
            <input 
            type="text" 
            name="post" 
            size="30" 
            onChange={handleChange} 
            value={inputValue} 
            placeholder="Comment on this post?" 
            id="PostInputBox"
            />
            <button onClick={handleSubmit} id="PostButton">Post</button>
        </div>
    )
}

export default CreatePostComment;