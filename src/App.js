import React from "react";
import styledNormalize from "styled-normalize";
import { injectGlobal } from "styled-components";
import PageContainer from "ui/wrappers/page-container";
import NavBar from "ui/wrappers/navbar";
import ContentContainer from "ui/wrappers/content-container";
import Countries from "countries";

injectGlobal`
  ${styledNormalize}
  body {
    padding: 0;
    background-color: #eee;
    color: #535353;
  }
  * {
    box-sizing: border-box;
  }
`;

const App = () => (
  <PageContainer>
    <NavBar>
      <div style={{ paddingLeft: "15px" }}>Hi</div>
    </NavBar>
    <ContentContainer>
      <Countries />
    </ContentContainer>
  </PageContainer>
);

export default App;
