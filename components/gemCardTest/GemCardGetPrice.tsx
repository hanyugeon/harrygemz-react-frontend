import React from 'react'
import type { NextPage } from 'next'
import { Input, InputGroup, InputRightAddon } from '@chakra-ui/react'

interface GetPriceTypes {
  price: string | undefined
}

const GemCardGetPrice: NextPage<GetPriceTypes> = ({ price }) => {
  return (
    <InputGroup size='sm' borderColor='brand.200'>
      <Input
        disabled
        type='number'
        borderWidth={2}
        borderColor='brand.200'
        focusBorderColor='brand.200'
        value={price}
      />
      <InputRightAddon
        fontFamily='DynaPuff'
        fontSize='14px'
        bg='brand.200'
        color='white'
      >
        Matic
      </InputRightAddon>
    </InputGroup>
  )
}

export default GemCardGetPrice
