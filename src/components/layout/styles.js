import styled, { createGlobalStyle } from "styled-components"
import { above, colors } from "./../../styles/index"

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0 auto;
  }
  ul, li, h1, h2, h3, p, button {
    margin: 0;
  }
  ul {
    list-style: none;
  }
  button {
    background: transparent;
    border: 0;
    outline: 0;
  }
`

export const Content = styled.div`
  ${above.medium`
    padding-top: 3.5rem;
    `}
  ${above.large`
    padding-top: 4.5rem;
  `}
`

export const Footer = styled.footer`
  background-color: ${colors.darkBlue};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  bottom: 0;
  a {
    color: ${colors.green};
    margin-left: 0.3rem;
    text-decoration: none;
  }
`

export const Love = styled.span`
  margin: 0 5px;
  color: red;
`
