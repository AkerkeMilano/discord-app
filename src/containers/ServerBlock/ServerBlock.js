import { useContext } from "react";
import Category from "../../components/Category/Category";
import UserProfile from "../../components/UserProfile/UserProfile";
import styled from "styled-components";
import { ServerContext } from "../../context/ServerContext";
import { mock } from "../../data";

const StyledServerBlock = styled.div`
  position: relative;
  width: 240px;
  color: #868e95;
  background: #2f3136;
  font-size: 0.8em;
`;

const StyledServerHeader = styled.div`
  color: #efeef0;
  padding: 20px;
  font-weight: 600;
  border-bottom: 2px solid #202225;
`;
const ServerBlock = () => {
  const { serverId } = useContext(ServerContext);
  return (
    <StyledServerBlock>
      <StyledServerHeader>{mock[serverId-1].name}</StyledServerHeader>
      {mock[serverId-1].categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
      <UserProfile />
    </StyledServerBlock>
  );
};

export default ServerBlock;
