import styled from "styled-components";
import { ChannelContext } from "../../context/ChannelContext";
import { useContext } from 'react';
import SingleMessage from "../../components/SingleMessage/SingleMessage";
const StyledChatBlock = styled.div`
    width: 60vw;
    background: #36393f;
    padding: 20px;
`;


const ChatBlock = () => {
    const {channelData} = useContext(ChannelContext);
    return (
        <StyledChatBlock>
            {channelData.messages.map(message => (
                <SingleMessage message={message} key={Math.random() + Math.random()}/>
            ))}
        </StyledChatBlock>
    )
};

export default ChatBlock;
