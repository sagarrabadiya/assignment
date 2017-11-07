import styled from "styled-components";

const Button = styled.button`
  ${props => (props.block ? "width: 100%;" : "")} background: ${props =>
      props.bg ? props.bg : "#aaa"};
  color: ${props => (props.fg ? props.fg : "#535353")};
  cursor: pointer;
  padding: ${props => (props.block ? "15px" : "12px")};
  text-transform: uppercase;
`;

export default Button;
