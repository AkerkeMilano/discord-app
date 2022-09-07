import styled from "styled-components";

const StyledNavbarIcon = styled.div`
  width: 50px;
  height: 50px;
`;

const StyledIcon = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: ${(props) => (props.isClicked ? "15px" : "50%")};
  transition: 0.3s ease;
  :hover {
    border-radius: 15px;
  }
`;

const NavbarIcon = ({ icon, isClicked }) => {
  return (
    <StyledNavbarIcon>
      <StyledIcon src={icon.img} alt={icon.name} isClicked={isClicked}/>
    </StyledNavbarIcon>
  );
};

export default NavbarIcon;
