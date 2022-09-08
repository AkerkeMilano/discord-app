import styled from "styled-components";
import { ChannelContext } from "../../context/ChannelContext";
import { useContext } from "react";
import SingleMessage from "../../components/SingleMessage/SingleMessage";
import Header from "../../components/Header/Header";
import UsersBlock from "../UsersBlock/UsersBlock";

const StyledChatBlock = styled.div`
  position: relative;
  width: 60vw;
  height: 100%;
  background: #36393f;
  padding: 20px;
`;
const StyledInputField = styled.div`
  position: absolute;
  bottom: 20px;
  background: #42464d;
  padding: 10px;
  border-radius: 5px;
  .inputField {
    width: 58vw;
    color: #fff0f5;
    font-size: 0.8em;
    border: none;
    background: none;
    :focus {
      outline: none;
    }
  }
`;

const StyledChatUsersBlock = styled.div`
  display: flex;
  height: 100%;
  grid-area: chat;
`;

const StyledInformationBlock = styled.div`
  background: "#42464d";
  display: grid;
  row-gap: 0;
  grid-template-areas:
  'header header header'
  'chat chat users';
  flex: 1 1 auto;
`;

const ChatBlock = () => {
  const { channelData } = useContext(ChannelContext);
  return (
    <StyledInformationBlock>
      <Header channel={channelData} />
      <StyledChatUsersBlock>
        <StyledChatBlock>
          {channelData.messages.map((message) => (
            <SingleMessage
              message={message}
              key={Math.random() + Math.random()}
            />
          ))}
          <StyledInputField>
            <input
              className="inputField"
              placeholder="Write something here ..."
            />
          </StyledInputField>
        </StyledChatBlock>

        <UsersBlock />
      </StyledChatUsersBlock>
    </StyledInformationBlock>
  );
};

export default ChatBlock;
