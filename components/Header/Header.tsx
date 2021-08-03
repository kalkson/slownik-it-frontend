import React, { useState } from 'react'

import Container from 'components/Container/Container'
import Link from 'next/link'
import Image from 'next/image'
import moonIcon from 'public/assets/svg/moon-icon.svg'
import sunIcon from 'public/assets/svg/sun-icon.svg'
import Logo from 'public/assets/svg/big-logo.svg'
import StyledHeader from './Header.styled'

const Header: React.FC = () => {
  const [isDarkMode, setDarkMode] = useState(false)

  return (
    <Container>
      <StyledHeader className="header" data-testid="header-component">
        <div className="header__logo">
          <Link href="/" passHref>
            <Image src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="header__nav-container">
          <nav className="header__nav" role="list">
            <button
              type="button"
              className="header__nav-item header__modeButton"
              aria-label=""
              onClick={() => setDarkMode(!isDarkMode)}
            >
              <Image
                className="header__modeIcon"
                src={isDarkMode ? sunIcon : moonIcon}
                width={25}
                height={25}
                alt=""
              />
            </button>
            <span role="listitem" className="header__nav-item">
              <Link href="/add">o słowniku</Link>
            </span>
            <span role="listitem" className="header__nav-item">
              <Link href="/about">dodaj termin</Link>
            </span>
          </nav>
        </div>
      </StyledHeader>
    </Container>
  )
}

export default Header
