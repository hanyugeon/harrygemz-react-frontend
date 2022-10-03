import { Box, Image, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import { GemCardProps } from '../interfaces'

const GemCard: FC<GemCardProps> = ({ metadataURI }) => {
  return (
    <Box>
      <Image src={metadataURI?.image} fallbackSrc='loading.png' alt='gem' />
      <Text>{metadataURI?.name}</Text>
      <Text>{metadataURI?.description}</Text>
    </Box>
  )
}

export default GemCard
