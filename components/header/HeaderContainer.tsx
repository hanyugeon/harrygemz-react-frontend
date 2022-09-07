import React from 'react'
import type { NextPage } from 'next'
import { HStack } from '@chakra-ui/react'
import { LayoutProps } from '../../interfaces'

const HeaderContainer: NextPage<LayoutProps> = ({ children }) => {
  return (
    <HStack
      bgColor='brand.200'
      color='white'
      shadow='default'
      w='100%'
      position='fixed'
      zIndex='1'
      justifyContent='space-between'
      p={{ base: '6px', md: '12px' }}
    >
      {children}
    </HStack>
  )
}

export default HeaderContainer
