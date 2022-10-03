import React from 'react'
import type { NextPage } from 'next'
import { Box, Image, Text } from '@chakra-ui/react'
import { GemCardProps } from '../../interfaces'

const GemCardMetaData: NextPage<GemCardProps> = ({ metadataURI }) => {
  return (
    <Box>
      <Image src={metadataURI?.image} fallbackSrc='loading.png' alt='gem' />
      <Text>{metadataURI?.name}</Text>
      <Text>{metadataURI?.description}</Text>
    </Box>
  )
}

export default GemCardMetaData
