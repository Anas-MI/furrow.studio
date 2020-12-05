import React from "react"

// styled components
import { HeaderNav, Logo, Menu } from "../styles/headerStyles"
import { Container, Flex } from "../styles/globalStyles"

const Header = () => {
  return (
    <HeaderNav>
      <Container>
        <Flex spaceBetween noHeight>
          <Logo>logo</Logo>
          <Menu>
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header
