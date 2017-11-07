import styled from "styled-components";

const FlexWrapper = styled.div`
  display: ${props => (props.display ? props.display : "flex")};
  flex-direction: ${props => (props.direction ? props.direction : "row")};
`;

export default FlexWrapper;
