import styled from "styled-components"
import { above, colors } from "../../styles/index"

export const StyledHeader = styled.header`
  background-image: linear-gradient(
    90deg,
    ${colors.darkBlue},
    ${colors.lightBlue}
  );
  margin-bottom: 0;
  padding: 0 0.5rem 0 0;
  height: 3.5rem;
  width: 100%;
  max-width: 960;
  display: flex;
  position: fixed;
  z-index: 3;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  a {
    height: 100%;
    font-size: 0.6rem;
  }
  & > a > img {
    margin: 0;
    background-color: ${colors.green};
    height: 100%;
    padding: 0.5rem 0.8rem;
  }
  & ul {
    list-style: none;
    margin: 0;
    display: flex;
    font-size: 0.2rem;
  }
  ${above.medium`
    padding: 0 2rem;
    height: 3.5rem;
    a{
      height: 100%;
      font-size: 0.8rem;
    }
  `}
  ${above.large`
    padding: 0 10rem;
    height: 4.5rem;
    a{
      height: 100%;
      font-size: 0.8rem;
    }
  `}
`

export const MenuItem = styled.li`
  margin: 0;
  color: white;
  font-size: 1.3rem;
  font-weight: 100;
  padding: ${({ margin }) => (margin ? "0 13px 0 13px" : "0 0 0 13px")};
  a {
    color: white;
    text-decoration: none;
  }
  & img {
    margin-right: 5px;
    width: 0.4rem;
  }
  ${above.medium`
    border-right: ${({ margin }) => (margin ? "1px solid white" : "")};
    padding: ${({ margin }) => (margin ? "0 26px 0 26px" : "0 0 0 26px")};
    & img{
      margin-right: 5px; 
      width: 0.7rem;
    }
  `}
`
