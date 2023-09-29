import Profiles from "./ProfileDatabase";

let AllPosts = Profiles.map(profile => profile.posts).flat(); 

export default AllPosts;


