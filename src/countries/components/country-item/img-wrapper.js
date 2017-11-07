import styled from "styled-components";

const ImgWrapper = styled.div`
  background: #ddd;
  padding: ${props => (props.active ? "4px" : "5px")};
  text-align: center;
  margin-bottom: 10px;
  cursor: pointer;
  min-height: 110px;
  border: ${props => (props.active ? "1px solid #00f" : "none")};
  @media screen and (max-width: 420px) {
    min-height: 65px;
  }
`;

export default ImgWrapper;
