import React from 'react'
import type { NextPage } from 'next'
import { VStack } from '@chakra-ui/react'
import { LayoutProps } from '../../interfaces'

const GemCardContainer: NextPage<LayoutProps> = ({ children }) => {
  return (
    <VStack
      bg='white'
      w={{ base: '120px', sm: '140px', md: '160px' }}
      shadow='default'
      p='8px'
      borderRadius='1rem'
    >
      {children}
    </VStack>
  )
}

export default GemCardContainer
