import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MoralisProvider } from "react-moralis";

const appId = "htfD1mv4ftJ2qWhnZctXBQ5KIGok11ljgSiI03vF" 
const serverUrl = "https://ctvvfafsmuwk.usemoralis.com:2053/server"

ReactDOM.render(
  <MoralisProvider appId={appId} serverUrl={serverUrl} >
    <App />
  </MoralisProvider>,
  document.getElementById("root")
);

