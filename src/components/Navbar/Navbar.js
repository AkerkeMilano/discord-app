import NavbarIcon from "../NavbarIcon/NavbarIcon";
import { mock } from "../../data";
import styled from "styled-components";

const StyledNavbar = styled.div`
    width: 70px;
    background: #202225;
    height: 100vh;
`;

const StyledLine = styled.div`
  width: 5px;
  height: 10px;
  background: #FAF9F6;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
`;

const StyledIconWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 5px 0;
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
    color: #2E8B57;
    transition: 0.3s ease;
    ::before {
        content: "+";
    }
    :hover {
        color: #FAF9F6;
        background-color: #2E8B57;
        border-radius: 15px
    }
`;

const Navbar = () => {
    return <StyledNavbar>
            {mock.map(server_example => ( <StyledIconWrapper><StyledLine /> <NavbarIcon icon={server_example}/></StyledIconWrapper>  ))}
            <div style={{padding: "5px 0"}}>
                <StyledAddIcon />
            </div>
            
    </StyledNavbar>
};

export default Navbar;