import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  	margin: 0;
    padding: 0;
	box-sizing: border-box;
	/* outline: 1px solid red; */
}
*{
  
	font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
	letter-spacing: .6px;
}
h1, h2,h3,h4, h5, h6{
	margin:0;
    padding: 0;
    font-family: var(--font-primary);
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
body{
  margin: 0;
  padding: 0;
  //height:200vh;
 
  

  
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-family: var(--font-default);
  color: var(--color-default);
}

:root {
  --color-default: #2b180d;
  --color-primary: #56b8e6;
  --color-secondary: #1b2f45;

  scroll-behavior: smooth;

  --font-default: "Open Sans", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-primary: "Montserrat", sans-serif;
  --font-secondary: "Raleway", sans-serif;
}
`;
