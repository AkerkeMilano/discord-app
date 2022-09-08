import HashtagIcon from "../../icons/HashtagIcon";
import styled from "styled-components";

const StyledHeader = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  color: #efeef0;
  font-weight: 600;
  border-bottom: 2px solid #202225;
  grid-area: header;
  background: #36393f;
`;

const Header = ({ channel }) => {
  return (
    <StyledHeader>
      <HashtagIcon /> {channel.title}
    </StyledHeader>
  );
};

export default Header;
