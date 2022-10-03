import React from 'react'
import type { NextPage } from 'next'
import { Flex } from '@chakra-ui/react'
import { LayoutProps } from '../../interfaces'

const MintingContainer: NextPage<LayoutProps> = ({ children }) => {
  return (
    <Flex
      color='brand.100'
      minH='100vh'
      justifyContent='center'
      alignItems='center'
      direction='column'
    >
      {children}
    </Flex>
  )
}

export default MintingContainer
