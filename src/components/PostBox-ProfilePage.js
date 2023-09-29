import React, { useState, useEffect } from "react";
import '../App.css';
import '../CSS/PostBox.css';
import CommentsProfilePage from "./Comments-ProfilePage";
import CreatePostComment from "./CreatePostComment";
import PostBoxHomePage from "./PostBox-HomePage";

const PostBoxProfilePage = (props) => {

    const Profiles = props.Profiles;
    const AllPosts = props.AllPosts;
    const [liked, setLiked] = useState(false);
    const [profile, setProfile] = useState('');
    const [database, setDatabase] = useState(Profiles);
    const [showComments, setShowComments] = useState(false);
    const [makeComment, setMakeComment] = useState(false);
    const [replying, setReplying] = useState(null);
    
    const post = Profiles[props.profile].posts[props.index];
    const picIndex = Profiles.findIndex(obj => obj.id === post.id)

    const handleClick = () => {
        setLiked(!liked);
    };

    const postStyle = {
        backgroundColor: Profiles[picIndex].color,
    };

    const postStyle2 = {
        backgroundColor: AllPosts[props.index].color,
    }; 

    

    useEffect(() => {
        const userId = Profiles[props.logged].id;

        if (post.likes.includes(userId)) {
            setLiked(true);
        }
        else {
            setLiked(false);
        }
        }, []);

    const toggleLike = () => {
        
        const userId = Profiles[props.logged].id;
      
        if (post.likes.includes(userId)) {
          // User has already liked the post, so remove the like
          post.likes = post.likes.filter(item => item !== userId);
          setLiked(false);
        } else {
          // User has not liked the post, so add the like
          post.likes.push(userId);
          setLiked(true);
        }
      };

    const toggleComments = () => {
        setShowComments(!showComments)
    }

    const toggleMakeComment = () => {
        setMakeComment(!makeComment);
    }
{/* Comments-ProfilePage does the function on "Reply" press. CreatPostComment uses the result of the function and creates the comment.*/}
    const addReply = (replyId) => {
        setReplying( "@" + replyId + " ");
    }

       {/* PROFILE ONLY POSTS */}
    return (
            <div id="BoxParent">
            <div id="PostBox" style={postStyle}>
                <div id="InfoBox">
                    <img src={Profiles[picIndex].picture} alt="Image not found"/>
                    <div id="NameAndTime">
                        <button onClick={() => props.changeProfile(Profiles[props.profile].id)} type="Profile"><h1>{Profiles[picIndex].firstName} {Profiles[picIndex].lastName}</h1></button>
                        <h2>{post.date} at {post.time}</h2>
                    </div>
                </div>
                <div id="PostContentBox">
                    <h1>{post.content}</h1>
                    {post.likes.length === 0 ? null : (
                        <h2>
                            {post.likes.length === 1 
                            ? `${post.likes[0]} likes this post.`
                            : `${post.likes[0]} and ${
                                post.likes.length - 1
                                } others like this post.`}
                        </h2>
                    )}
                </div>
                <div id="LikesBox">
                    <h3>{post.likes.length} likes!</h3>
                    <button id="commentButton" onClick={toggleComments}>{post.comments.length} comments</button>
                    <h3>0 shares</h3>
                </div>
            </div>
        {/* THIS IS THE FUNCTION TO DISPLAY COMMENTS */}

            {makeComment === true ?  ( (() => {
                    
                const poster = props.profile;
                const posterPost = props.index;
                return (
                    <CreatePostComment 
                    Key={poster+posterPost} 
                    style={postStyle} 
                    Profiles={props.Profiles} 
                    profile={poster} 
                    index={posterPost} 
                    commentor={props.logged} 
                    updateProfiles={props.updateProfiles} 
                    updatePosts={props.updatePosts}
                    reply={replying}
                    /> 
                )
            }) () ): null }
        {/* SHOW COMMENTS WINDOW*/}
            {showComments === true ? 
            
                post.comments.map((comment, i) => {

                    const index = Profiles.findIndex(obj => obj.id === post.comments[i].id)
                    const key = "Profile" + props.index + "" + i;
                    return ( <CommentsProfilePage
                        AllPosts={AllPosts}
                        postIndex={props.index}
                        commentIndex={i}
                        poster={props.profile}
                        logged={props.logged}
                        profileDatabase={Profiles}

                        index={index}
                        key={key} 
                        name={post.comments[i].id} 
                        comment={post.comments[i].content} 
                        date={post.comments[i].date} 
                        time={post.comments[i].time} 
                        picture={Profiles[index].picture}
                        likes={post.comments[i].likes}
                        reply={addReply}
                        /> 
                    )})
            : null}
    {/* INTERACTION BOX E.X> LIKING AND COMMENTING*/}
            <div id="InteractionBox" style={postStyle}>
                <button onClick={() => {toggleLike()}} style={{ color : liked ? 'red' : 'black'}} id="LikeButton">
                    <img src={liked ? "https://cdn.discordapp.com/attachments/926512780775931945/1156240073940009080/like.png?ex=65143ffb&is=6512ee7b&hm=204b2a64b5a5303827cf4af23fdcb28a763e6846b9be4def4a2e101b0ec88d93&" : "https://cdn.discordapp.com/attachments/926512780775931945/1156237165714473020/no_like.png?ex=65143d46&is=6512ebc6&hm=b55b8e61291f35eb3ef8cdaefa4bb2fefb71d84b0d8704666641f4bcdf73999b&"}/>
                </button>
                <button onClick={toggleMakeComment}>
                        
                    Comment
                </button>
            </div>
                
        </div> 
    )
}

export default PostBoxProfilePage;