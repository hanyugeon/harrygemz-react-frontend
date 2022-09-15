import React from 'react'
import type { NextPage } from 'next'
import { Button } from '@chakra-ui/react'
import { MintingModalButtonProps } from '../../interfaces'

const MintingModalButton: NextPage<MintingModalButtonProps> = ({
  name,
  variant,
  event
}) => {
  return (
    <Button variant={variant} onClick={event} mr='8px'>
      {/* onClick={onClickMint} */}
      {name}
    </Button>
  )
}

export default MintingModalButton
