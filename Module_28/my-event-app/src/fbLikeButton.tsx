import { useState } from "react";
export default LikeButton;

function LikeButton() {

    const [likeCount, setLikeCount] = useState(0);

    const handleFbLike=()=>{
        setLikeCount(likeCount+1);
    }

    return(
        <>
        <h2>Like Button</h2>
        <p>Current like : {likeCount}</p>
        <button onClick={handleFbLike}>Like</button>
        </>
    )
}