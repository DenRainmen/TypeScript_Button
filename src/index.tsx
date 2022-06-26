import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import { APP_TWO_BUTTONS } from "./App_twoButtons";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <APP_TWO_BUTTONS />
  </StrictMode>
);
