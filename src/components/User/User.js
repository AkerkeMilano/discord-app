import styled from "styled-components";
import Avatar from "../Avatar/Avatar";
import * as React from "react";
import Popover from "@mui/material/Popover";
const StyledUserBlock = styled.div`
  padding: 10px 0px;
  display: flex;
  align-items: center;
  gap: 15px;
  :hover {
    background: #42464d;
    border-radius: 5px;
  }
`;

const StyledUserName = styled.div`
  color: ${(props) => (props.color ? props.color : "#C4D6B9")};
  font-size: 0.8em;
  font-weight: 600;
`;

const StyledUserStatus = styled.div`
  font-size: 0.7em;
  color: #868e95;
`;

const StyledPopoverBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 200px;
  height: 300px;
  border-radius: 5px;
`;

const StyledAvatarBlock = styled.div`
  height: 100px;
  width: 100%;
  background: #c8a2c8;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const User = ({ user, color }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div>
      <StyledUserBlock onClick={handleClick}>
        <div>
          <Avatar image={user.avatar} />
        </div>
        <div>
          <StyledUserName color={color}>{user.name}</StyledUserName>
          <StyledUserStatus>{user.status}</StyledUserStatus>
        </div>
      </StyledUserBlock>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <StyledPopoverBlock>
          <StyledAvatarBlock>
            <Avatar image={user.avatar} width="55px" height="55px" />
          </StyledAvatarBlock>
          <div>
            <StyledUserName color={color}>{user.name}</StyledUserName>
            <StyledUserStatus>{user.status}</StyledUserStatus>
          </div>
        </StyledPopoverBlock>
      </Popover>
    </div>
  );
};

export default User;
