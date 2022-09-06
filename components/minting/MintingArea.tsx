import React from 'react'
import type { NextPage } from 'next'
import { Text, Button, useDisclosure } from '@chakra-ui/react'
import MintingModal from './MintingModal';

const MintingArea: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <>
      <Text mb="4px">Just 1000 Gemz Remaining</Text>
      {/* {remainGemTokens} */}
      <Button variant="minting" onClick={onOpen}>
        Minting
      </Button>
      <MintingModal isOpen={isOpen} onClose={onClose}/>
      {/* getRemainGemTokens={} getGemTokenCount={}  */}
    </>
  )
}

export default MintingArea
