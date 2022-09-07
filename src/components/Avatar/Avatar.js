import styled from "styled-components";

const StyledAvatar = styled.div`
    width: 40px;
    height: 40px;
`;

const StyledAvatarImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
`;

const Avatar = ({image}) => {
    return (
        <StyledAvatar>
            <StyledAvatarImg src={image} alt="User avatar"/>
        </StyledAvatar>
    )
};

export default Avatar; 