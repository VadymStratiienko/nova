import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ParallaxProvider } from "react-scroll-parallax";
import { GlobalStyle } from "./styles/global";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ParallaxProvider>
        <GlobalStyle />
        <App />
      </ParallaxProvider>
    </Provider>
  </React.StrictMode>
);
