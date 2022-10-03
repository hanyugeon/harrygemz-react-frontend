import React, { useState } from 'react'
import type { NextPage } from 'next'
import { Input, InputGroup, InputRightAddon, Text } from '@chakra-ui/react'

const GemCardSetPrice: NextPage = () => {
  const [sellPrice, setSellPrice] = useState<string>('')

  return (
    <InputGroup size='sm' borderColor='brand.200'>
      <Input
        type='number'
        borderWidth={2}
        borderColor='brand.200'
        focusBorderColor='brand.200'
        value={sellPrice}
        onChange={(e) => setSellPrice(e.target.value)}
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

export default GemCardSetPrice
