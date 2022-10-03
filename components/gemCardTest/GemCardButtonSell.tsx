import React from 'react'
import type { NextPage } from 'next'
import { Button } from '@chakra-ui/react'

const GemCardButtonSell: NextPage = () => {
  return (
    <Button
      size='sm'
      ml='8px'
      bg='brand.200'
      color='white'
      // onClick={onClickSell}
    >
      Sell
    </Button>
  )
}

export default GemCardButtonSell
