import React from 'react'
import type { NextPage } from 'next'
import { HStack } from '@chakra-ui/react'
import GemCardSetPrice from './GemCardSetPrice'
import GemCardButtonSell from './GemCardButtonSell'

const GemCardOwned: NextPage = () => {
  return (
    <HStack>
      <GemCardSetPrice />
      <GemCardButtonSell />
    </HStack>
  )
}

export default GemCardOwned
