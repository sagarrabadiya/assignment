import styled, { keyframes } from "styled-components";
import { flipInX } from "react-animations";

const moveDown = keyframes`${flipInX}`;

const SearchBox = styled.div`
  position: relative;
  background: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  animation: ${moveDown} 0.3s linear;
`;

export default SearchBox;
