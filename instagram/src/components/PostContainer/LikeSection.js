import React from 'react';
import { Heart, MessageCircle } from "react-feather";

const LikeSection = props =>{
    return(
        <div className="like-section">
            <div className="like-icons">
                <Heart onClick={props.likeIncrement} />
                <MessageCircle />
            </div>
            <div className="likes">
                {props.likes}
            </div>
        </div>
    )
}

export default LikeSection;