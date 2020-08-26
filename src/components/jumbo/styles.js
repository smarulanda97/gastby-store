import styled from "styled-components"
import { above, colors } from "../../styles/index"

export const StyledJumbo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 2rem;
  color: white;
  margin-bottom: 5rem;
  overflow: hidden;
  position: relative;
  
  div{
    padding: 1rem;
    width: 35vw;
  };
  & h2 {
    margin: 0;
    font-weight: 500;
    font-size: 1rem;
  };
  & small{
    font-weight: 100;
    font-size: 0.6rem;
  };
  & img{
    width: 35vw;
  };
  ${above.medium`
      padding: 2rem 4rem;
      flex-direction: row;
      & h2 {
        font-size: 1rem;
      };
      & small{
        font-size: 0.8rem;
      };
    `}
  ${above.mediumL`
      padding: 2rem 4rem;
      flex-direction: row;
      & h2 {
        font-size: 1rem;
      };
      & small{
        font-size: 0.8rem;
      };
    `}
  ${above.large`
    padding: 2rem 10rem;
    flex-direction: row;
    & h2 {
      margin: 0;
      font-weight: 500;
      font-size: 2rem;
    };
  `}

  &:before{
    content: " ";
    background-color: red;
    background-color: ${colors.darkBlue};
    z-index: -1;
    position: absolute;
    transform: rotate(-19deg);
    border-radius: 35%;
    top: -25%;
    width: 120%;
    height: 15rem;
    ${above.medium`
      height: 20rem;
      top: -50%;
    `}
    ${above.mediumL`
      height: 30rem;
      top: -60%;
    `}
    ${above.large`
      width: 110vw;
      height: 52vw;
      top: -66%;
    `}
  };
`
