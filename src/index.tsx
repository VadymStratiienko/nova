import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ParallaxProvider } from "react-scroll-parallax";
import { GlobalStyle } from "./styles/global";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "swiper/css/bundle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ParallaxProvider>
        <GlobalStyle />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ParallaxProvider>
    </Provider>
  </React.StrictMode>
);
