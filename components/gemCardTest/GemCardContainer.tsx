import React from 'react'
import type { NextPage } from 'next'
import { VStack } from '@chakra-ui/react'
import { LayoutProps } from '../../interfaces'

const GemCardContainer: NextPage<LayoutProps> = ({ children }) => {
  return (
    <VStack
      bg='white'
      w='200px'
      shadow='default'
      m='8px'
      p='8px'
      borderRadius='1rem'
    >
      {children}
    </VStack>
  )
}

export default GemCardContainer
