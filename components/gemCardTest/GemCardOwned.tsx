import React from 'react'
import type { NextPage } from 'next'
import { Stack } from '@chakra-ui/react'
import GemCardSetPrice from './GemCardSetPrice'
import GemCardButtonSell from './GemCardButtonSell'

const GemCardOwned: NextPage = () => {
  return (
    <Stack direction='column'>
      <GemCardSetPrice />
      <GemCardButtonSell />
    </Stack>
  )
}

export default GemCardOwned
