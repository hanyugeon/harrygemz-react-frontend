import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import GemCard from '../components/GemCard'
import { GemTokenMetadata } from '../interfaces'

export const proceedMinting = (metadataURI: GemTokenMetadata | undefined) => {
  return metadataURI ? (
    <Flex justifyContent='center'>
      <GemCard metadataURI={metadataURI} />
    </Flex>
  ) : (
    <>
      <Text variant='H3'>Would you proceed with the minting?</Text>
      <Text variant='H4'>( 1 klay will be consumed. )</Text>
    </>
  )
}
