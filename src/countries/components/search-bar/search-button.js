import styled, { keyframes } from "styled-components";
import { fadeInRight } from "react-animations";

const moveRight = keyframes`${fadeInRight}`;
const SearchButton = styled.button`
  padding: 5px;
  background: #eee;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  cursor: pointer;
  animation: ${moveRight} 0.3s linear;
`;

export default SearchButton;
