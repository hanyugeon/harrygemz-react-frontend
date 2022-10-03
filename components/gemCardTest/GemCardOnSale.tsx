import React from 'react'
import type { NextPage } from 'next'
import { Stack } from '@chakra-ui/react'
import GemCardButtonPurchase from './GemCardButtonPurchase'
import GemCardGetPrice from './GemCardGetPrice'

interface GetPriceTypes {
  price: string | undefined
}

const GemCardOnSale: NextPage<GetPriceTypes> = ({ price }) => {
  return (
    <Stack direction='column'>
      <GemCardGetPrice price={price} />
      <GemCardButtonPurchase />
    </Stack>
  )
}

export default GemCardOnSale
