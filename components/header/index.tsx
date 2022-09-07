import React from 'react'
import type { NextPage } from 'next'
import HeaderContainer from './HeaderContainer'
import HeaderLogo from './HeaderLogo'
import HeaderButton from './HeaderInternalButton'
import HeaderWalletAddress from './HeaderWalletAddress'
import { Flex } from '@chakra-ui/react'

const Header: NextPage = () => {
  return (
    <HeaderContainer>
      <HeaderLogo />
      <Flex direction={{ base: 'column', md: 'row' }}>
        <HeaderButton name={'home'} route={'/'} />
        <HeaderButton name={'my-page'} route={'/my-page'} />
        <HeaderButton name={'market'} route={'/market'} />
      </Flex>
      <HeaderWalletAddress />
    </HeaderContainer>
  )
}

export default Header
