import styled from "styled-components";
import User from "../../components/User/User";
import { users } from "../../data";

const calmColor = ["#B9D2D6", "#CCB9D6", "#D6BDB9", "#C4D6B9"];

const StyledUsersBlock = styled.div`
  background: #2f3136;
  flex-grow: 1;
`;

const StyledUserHeader = styled.div`
  text-transform: uppercase;
  color: #868e95;
  font-size: 0.6em;
  font-weight: 700;
`;

const StyledUsersRole = styled.div`
    padding: 15px;
`;

const UsersBlock = () => {
  return (
    <StyledUsersBlock>
      <StyledUsersRole>
        <StyledUserHeader>Admin - 1</StyledUserHeader>
        <User user={users[2]} color={calmColor[1]} />
      </StyledUsersRole>
      <StyledUsersRole>
        <StyledUserHeader>Mentor - 3</StyledUserHeader>
        <User user={users[5]} color={calmColor[3]} />
        <User user={users[6]} color={calmColor[3]} />
        <User user={users[7]} color={calmColor[3]} />
      </StyledUsersRole>
      <StyledUsersRole>
        <StyledUserHeader>Online - 4</StyledUserHeader>
        <User user={users[2]} color={calmColor[2]} />
        <User user={users[3]} color={calmColor[2]} />
        <User user={users[4]} color={calmColor[2]} />
        <User user={users[9]} color={calmColor[2]} />
      </StyledUsersRole>
    </StyledUsersBlock>
  );
};

export default UsersBlock;
