import React, {useState, useEffect} from "react";
import CreatePost from "./CreatePost.js";
import '../CSS/CommentsFeed.css';

const CommentsProfilePage = (props) => {
    
    const [reRender, setReRender] = useState(false)
    const [Profiles, setProfiles] = useState(props.profileDatabase);
    const [AllPosts, setAllPosts] = useState(props.AllPosts);
    const [liked, setLiked] = useState(false);

    const comment = Profiles[props.poster].posts[props.postIndex].comments[props.commentIndex];

    useEffect(() => {
        if (!props.likes.includes(Profiles[props.logged].id)) {
            setLiked(false);
            
        }
        else {
            setLiked(true);
        }
    }, []);

    

    function updateProfiles(newProfiles) {
        setProfiles(newProfiles);
    }

    const incrementLikes = () => {
        // Check if props.logged already exists in the likes array
        if (!comment.likes.includes(props.profileDatabase[props.logged].id)) {
            comment.likes.push(props.profileDatabase[props.logged].id);
            setLiked(true);
        }
        else {
            comment.likes = comment.likes.filter(item => item !== props.profileDatabase[props.logged].id);
            setLiked(false);
        }
    }
  

    return (
        <>
            <div id="CommentsFeed">
                <img id="CommentImage" src={props.picture}/>
                <div id="CommentBox">
                    <h3>{props.name} <h4> on {props.date} at {props.time}</h4></h3>
                    <p>{props.comment}</p>
                    {comment.likes.length === 0 ? null : 
                        (
                            <p id="commentLike">
                                {comment.likes.length === 1
                                ? `${comment.likes[0]} likes this post.`
                                : `${comment.likes[0]} and ${
                                    comment.likes.length - 1
                                } others like this post.`}
                            </p>
                        )
                        }
                    </div>
                
                
            </div>
            <div id="CommentButtonsContainer">
                <button onClick={() => incrementLikes()} style={{ color : liked ? 'red' : 'black'}} id="LikeButton"> 
                    {comment.likes.length} likes
                </button>
                <button class="CommentButtons" onClick={() => {props.reply(props.name)}}>Reply</button>
                <button class="CommentButtons">Share</button>
            </div>
        </>
            )
        }
        

        

export default CommentsProfilePage;