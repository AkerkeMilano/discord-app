import HashtagIcon from "../../icons/HashtagIcon";
import styled from "styled-components";
import { ChannelContext } from "../../context/ChannelContext";
import { ServerContext } from "../../context/ServerContext";
import { useContext } from 'react';
import { mock } from "../../data";

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
    transition: 0.3s ease;
    color: ${props => (props.isHighlighted ? "#efeef0" : "")};
    :hover {
        background: #42464d;
        color: #efeef0;
        border-radius: 5px;
    }
`;

const Channel = ({channel, isClicked, categoryId}) => {
    const {channelData, setChannelData} = useContext(ChannelContext);
    const {serverId} = useContext(ServerContext);
    console.log(channelData);
    const handleClick = (id) => {
          setChannelData(mock[serverId-1].categories.filter(category => category.id === categoryId)[0].channels.filter(channel => channel.id === id)[0]);
    }
    return !isClicked ? (
        <StyledChannelblock onClick={() => handleClick(channel.id)} isHighlighted = {channel.id === channelData.id}>
            <HashtagIcon />
            <div>{channel.title.length > 22 ? channel.title.substring(0, 20)+"..." : channel.title}</div>
        </StyledChannelblock>
    ) : "";
};

export default Channel;