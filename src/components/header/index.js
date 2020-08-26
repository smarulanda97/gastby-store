import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import logo from "./../../images/Logo.png"
import cart from "./../../images/cart.png"
import { StyledHeader, MenuItem } from "./styles"

const Header = ({ siteTitle = `` }) => (
  <StyledHeader>
    <Link to={"/"}>
      <img src={logo} alt={"GeekStore Logo"} />
    </Link>
    <nav>
      <ul>
        <MenuItem margin>
          <Link to={"/"}>Products</Link>
        </MenuItem>
        <MenuItem margin>
          <a href={"https://platzi.com/@santiagomarulanda/"}>AboutUs</a>
        </MenuItem>
        <MenuItem>
          <Link to={"/cart"}>
            <span>
              <img src={cart} alt="GeekStore cart" />
            </span>
          </Link>
        </MenuItem>
      </ul>
    </nav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
