import Avatar from "../Avatar/Avatar";
import styled from "styled-components";

const StyledSingleMessage = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  color: #868e95;
  font-size: 0.8em;
`;

const StyledMessageTop = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.8em;
    margin-bottom: 5px;
    .username {
        color: #fff0f5;
        font-weight: 600;
    }
    .datetime {
        font-size: 0.75em;
    }
`;

const StyledMessageBottom = styled.div`
    width: 50vw;
    font-weight: 100;
`;



const SingleMessage = ({ message }) => {
  return (
    <StyledSingleMessage>
      <div>
        <Avatar image={message.user.avatar} />
      </div>
      <div>
        <StyledMessageTop>
          <div  className="username">{message.user.name}</div>
          <div className="datetime">{message.datetime.date}</div>
        </StyledMessageTop>
        <StyledMessageBottom>{message.message}</StyledMessageBottom>
      </div>
    </StyledSingleMessage>
  );
};

export default SingleMessage;
