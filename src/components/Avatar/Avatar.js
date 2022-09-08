import styled from "styled-components";

const StyledAvatar = styled.div`
    width: ${(props) => (props.width ? props.width : "40px")};
    height: ${(props) => (props.height ? props.height : "40px")};
`;

const StyledAvatarImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
`;

const Avatar = ({image, width, height}) => {
    return (
        <StyledAvatar width={width} height={height}>
            <StyledAvatarImg src={image} alt="User avatar"/>
        </StyledAvatar>
    )
};

export default Avatar; 