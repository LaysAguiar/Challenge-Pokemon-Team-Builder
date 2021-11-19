import { GlobalStyle } from "../styles/global";
import React from "react";
import { TeamProvider } from "../contexts/TeamContext";

function MyApp({ Component }) {
  return (
    <React.Fragment>
      <TeamProvider>
        <GlobalStyle />
        <Component />
      </TeamProvider>
    </React.Fragment>
  );
}

export default MyApp;
