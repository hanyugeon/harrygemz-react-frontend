import React from 'react'
import type { NextPage } from 'next'
import { Input, InputGroup, InputRightAddon, Text } from '@chakra-ui/react'

interface GetPriceTypes {
  price: string | undefined
}

const GemCardGetPrice: NextPage<GetPriceTypes> = ({ price }) => {
  return (
    <InputGroup size='sm' borderColor='brand.200'>
      <Input
        disabled
        type='number'
        borderWidth='4px'
        borderColor='brand.200'
        focusBorderColor='brand.200'
        value={price}
      />
      <InputRightAddon w={{ base: '50px', md: '60px' }} bg='brand.200'>
        <Text
          fontFamily='DynaPuff'
          fontSize={{ base: '12px', md: '14px' }}
          color='white'
        >
          Matic
        </Text>
      </InputRightAddon>
    </InputGroup>
  )
}

export default GemCardGetPrice
