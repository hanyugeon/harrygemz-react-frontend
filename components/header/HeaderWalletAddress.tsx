import React from 'react'
import type { NextPage } from 'next'
import { Box, Button } from '@chakra-ui/react'
import { useAddressFormat } from '../../hooks/useAddressFormat'
// import { useWalletTools } from "@hooks/useWalletTools"
// import { onClickConnect } from ""../utils"

const HeaderWalletAddress: NextPage = () => {
  // walletConnect -> useWalletTools.tsx (custom hooks)
  // onClickConnect -> tools.tsx (utils)
  const addressExample = '0xd973A99e3932F1f2d95dbd20A6a23fdaBe17f749'

  return (
    <Box>
      <Button
        variant='address'
        fontSize={{ base: '10px', md: '14px' }}
        // onClick={onClickConnect}
      >
        {/* Connect Wallet */}
        {useAddressFormat(addressExample)}
      </Button>
    </Box>
  )
}

export default HeaderWalletAddress
