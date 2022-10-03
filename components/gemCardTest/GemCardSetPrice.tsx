import React, { useState } from 'react'
import type { NextPage } from 'next'
import { Input, InputGroup, InputRightAddon } from '@chakra-ui/react'

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

export default GemCardSetPrice
