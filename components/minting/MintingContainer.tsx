import React, { ReactNode } from 'react'
import type { NextPage } from 'next'
import { Flex } from "@chakra-ui/react"

interface LayoutProps {
  children: ReactNode;
}

const MintingContainer: NextPage<LayoutProps> = ({ children }) => {
  return (
    <Flex
      bgColor="brand.100"
      minH="100vh" 
      justifyContent="center" 
      alignItems="center" 
      direction="column"
    >
      {children}
    </Flex>
  )
}

export default MintingContainer
