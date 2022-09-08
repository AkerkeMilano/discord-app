import styled from "styled-components";
import Avatar from "../Avatar/Avatar";

const StyledUserBlock = styled.div`
  width: 15vw;
  padding: 10px 0px;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const StyledUserName = styled.div`
  color: ${(props) => (props.color ? props.color : "#C4D6B9")};
  font-size: 0.8em;
  font-weight: 600;
`;

const StyledUserStatus = styled.div`
  font-size: 0.70em;
  color: #868e95;
`;

const User = ({ user, color }) => {
  return (
    <StyledUserBlock>
      <div>
        <Avatar image={user.avatar} />
      </div>
      <div>
        <StyledUserName color={color}>{user.name}</StyledUserName>
        <StyledUserStatus>{user.status}</StyledUserStatus>
      </div>
    </StyledUserBlock>
  );
};

export default User;
