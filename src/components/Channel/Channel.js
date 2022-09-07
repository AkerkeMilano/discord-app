import HashtagIcon from "../../icons/HashtagIcon";
import styled from "styled-components";


const StyledChannelblock = styled.div`
    width: 200px;
    text-transform: lowercase;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 5px 0px 5px 12px;
    font-weight: 600;
    font-size: 0.88em;
    margin-left: 12px;
    :hover {
        background: #42464d;
        color: #efeef0;
        border-radius: 5px;
    }
`;

const StyledChannelTitle = styled.div`

`;

const Channel = ({channel, isClicked}) => {
    return !isClicked ? (
        <StyledChannelblock>
            <HashtagIcon />
            <StyledChannelTitle>{channel.length > 22 ? channel.substring(0, 20)+"..." : channel}</StyledChannelTitle>
        </StyledChannelblock>
    ) : "";
};

export default Channel;