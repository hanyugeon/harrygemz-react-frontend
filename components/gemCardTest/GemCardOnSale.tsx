import React from 'react'
import type { NextPage } from 'next'
import { HStack } from '@chakra-ui/react'
import GemCardButtonPurchase from './GemCardButtonPurchase'
import GemCardGetPrice from './GemCardGetPrice'

interface GetPriceTypes {
  price: string | undefined
}

const GemCardOnSale: NextPage<GetPriceTypes> = ({ price }) => {
  return (
    <HStack>
      <GemCardGetPrice price={price} />
      <GemCardButtonPurchase />
    </HStack>
  )
}

export default GemCardOnSale
