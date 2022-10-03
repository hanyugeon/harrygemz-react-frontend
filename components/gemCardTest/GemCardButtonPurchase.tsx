import React from 'react'
import type { NextPage } from 'next'
import { Button } from '@chakra-ui/react'

const GemCardButtonPurchase: NextPage = () => {
  return (
    <Button
      size='sm'
      ml='8px'
      bg='brand.200'
      color='white'
      // onClick={onClickPurchase}
    >
      Buy
    </Button>
  )
}

export default GemCardButtonPurchase
