import Avatar from "../Avatar/Avatar";
import avatar from "../../img/avatar.jpg";
import styled from "styled-components";
import MicrophoneIcon from "../../icons/MicrophoneIcon";
import HeadphonesIcon from "../../icons/HeadphonesIcon";
import GearIcon from "../../icons/GearIcon";

const StyledUserName = styled.div`
  color: #efeef0;
  font-size: 0.8em;
  font-weight: 600;
  div {
    color: #868e95;
  }
`;

const StyledUserProfile = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  background: #292b2f;
  padding: 5px 10px;
  position: absolute;
  bottom: 0;
`;

const StyledIcons = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

const StyledUserProfileBlock = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  transition: 0.3s ease;
  padding: 3px;
  border-radius: 2px;
  :hover {
    background: #36393f;
  }
`;

const StyledIconHover = styled.div`
  padding: 3px;
  border-radius: 2px;
  transition: 0.3s ease;
  :hover {
    background: #36393f;
  }
`;

const UserProfile = () => {
  return (
    <StyledUserProfile>
      <StyledUserProfileBlock>
        <Avatar image={avatar} />
        <StyledUserName>
          emilyrose
          <div>#6276</div>
        </StyledUserName>
      </StyledUserProfileBlock>
      <StyledIcons>
        <StyledIconHover>
          <MicrophoneIcon />
        </StyledIconHover>
        <StyledIconHover>
          <HeadphonesIcon />
        </StyledIconHover>
        <StyledIconHover>
          <GearIcon />
        </StyledIconHover>
      </StyledIcons>
    </StyledUserProfile>
  );
};

export default UserProfile;
