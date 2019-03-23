import React from 'react';
import styled from 'styled-components';
import { Heart, MessageCircle } from "styled-icons/feather";

const LikesContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    margin: auto 3%;
`

const LikeIcons = styled.div`
    margin-left: 5% 5%;
    svg{
        height: 30px;
    }
`
const Likes = styled.h3`
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
`
const LikeSection = props =>{
    return(
        <LikesContainer>
            <LikeIcons>
                <Heart onClick={props.likeIncrement} />
                <MessageCircle />
            </LikeIcons>
            <Likes>
                Likes: {props.likes}
            </Likes>
        </LikesContainer>
    )
}

export default LikeSection;