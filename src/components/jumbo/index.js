import React from "react"

import Image from "../image/index"
import { StyledJumbo } from "./styles"

const Jumbo = ({ description = "" }) => {
  return (
    <StyledJumbo>
      <div>
        <h2>¡Consigue el mejor swag exclusivo y especial de Platzi!</h2>
        <small>{description}</small>
      </div>
      <Image />
    </StyledJumbo>
  )
}

export default Jumbo
