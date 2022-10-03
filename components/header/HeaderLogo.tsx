import React from 'react'
import type { NextPage } from 'next'
import { Box, Text } from '@chakra-ui/react'

const HeaderLogo: NextPage = () => {
  return (
    <Box>
      <Text variant='H1' color='white' fontSize={{ base: '18px', md: '24px' }}>
        HarryGemz
      </Text>
    </Box>
  )
}

export default HeaderLogo
