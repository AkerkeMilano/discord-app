import NavbarIcon from "../NavbarIcon/NavbarIcon";
import { mock } from "../../data";
import styled from "styled-components";
import { ServerContext } from "../../context/ServerContext";
import { useContext } from "react";

const StyledNavbar = styled.div`
  width: 70px;
  background: #202225;
  height: 100vh;
`;

const StyledLine = styled.div`
  width: 4px;
  transition: 0.3s ease;
  height: ${(props) => (props.isClicked ? "40px" : "10px")};
  background: #faf9f6;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
`;

const StyledIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 0;
  }
`;

const StyledAddIcon = styled.div`
  height: 50px;
  width: 50px;
  display: inline-block;
  background-color: #535559;
  color: white;
  font-size: 30px;
  line-height: 50px;
  text-align: center;
  margin-left: 10px;
  border-radius: 50%;
  color: #2e8b57;
  transition: 0.3s ease;
  ::before {
    content: "+";
  }
  :hover {
    color: #faf9f6;
    background-color: #2e8b57;
    border-radius: 15px;
  }
`;

const Navbar = () => {
  const { serverId, setServerId } = useContext(ServerContext);
  const handleClick = (id) => {
    setServerId(id);
  };
  return (
    <StyledNavbar>
      {mock.map((server_example) => (
        <StyledIconWrapper key={server_example.id} onClick={() => handleClick(server_example.id)}>
          <StyledLine isClicked={serverId===server_example.id}/> <NavbarIcon icon={server_example} isClicked={serverId===server_example.id}/>
        </StyledIconWrapper>
      ))}
      <div style={{ padding: "5px 0" }}>
        <StyledAddIcon />
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
