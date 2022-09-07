import { useState } from "react";

import ArrowDownIcon from "../../icons/ArrowDownIcon";
import styled from "styled-components";
import Channel from "../Channel/Channel";

const StyledCategoryTitle = styled.div`
  position: relative;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.9em;
  padding: 10px;
  transition: 0.3s ease;
  > svg {
    position: absolute;
    left: 4px;
    top: 6px;
    transform: rotateZ(${(props) => (props.isClicked ? 270 : 0)}deg);
  }
  :hover {
    color: #efeef0;
}
`;

const StyledTitle = styled.div`
  margin-left: 15px;
`;

const Category = ({ category }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div>
      <StyledCategoryTitle onClick={handleClick} isClicked={isClicked}>
        <ArrowDownIcon />
        <StyledTitle>{category.title}</StyledTitle>
      </StyledCategoryTitle>
      {category.channels.map((channel) => (
          <Channel channel={channel} isClicked={isClicked} />
        ))}
    </div>
  );
};

export default Category;
