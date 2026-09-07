import { use } from "react";
import PostCard from "./postCard";

export default Post;

function Post({postData}){

    const posts=use(postData);
    console.log(posts);
    return(
        <div>
            <h3>Post: {posts.length}</h3>
            {
                posts.map(post=><PostCard post={post}></PostCard>)
            }
        </div>
    )
}