import React, { useState, useEffect } from 'react'
import { NextPage } from 'next'
import { Box, Grid, Text, Button, VStack } from '@chakra-ui/react'
import { useAccount, useCaver } from '../hooks'
import { MINT_GEM_TOKEN_ADDRESS, SALE_GEM_TOKEN_ADDRESS } from '../caverConfig'
import MyGemCard from '../components/MyGemCard'
import { GemTokenData } from '../interfaces'

const MyGemz: NextPage = () => {
  const { account } = useAccount()
  const { caver, mintGemTokenContract, saleGemTokenContract } = useCaver()

  const [myGemTokens, setMyGemTokens] = useState<GemTokenData[] | undefined>(
    undefined
  )
  const [saleStatus, setSaleStatus] = useState<Boolean>(false)

  const getMyGemTokens = async () => {
    try {
      if (!account || !saleGemTokenContract) return

      const response = await saleGemTokenContract.methods
        .getGemTokens(account)
        .call()

      setMyGemTokens(response)
    } catch (error) {
      console.error(error)
    }
  }

  const getSaleStatus = async () => {
    try {
      if (!account || !mintGemTokenContract) return

      const response = mintGemTokenContract.methods
        .isApprovedForAll(account, SALE_GEM_TOKEN_ADDRESS)
        .call()

      setSaleStatus(response)
    } catch (error) {
      console.error(error)
    }
  }

  const toggleSaleStatus = async () => {
    try {
      if (!account || !caver || !mintGemTokenContract) return

      const response = await caver.klay.sendTransaction({
        type: 'SMART_CONTRACT_EXECUTION',
        from: account,
        to: MINT_GEM_TOKEN_ADDRESS,
        gas: '3000000',
        data: mintGemTokenContract.methods
          .setApprovalForAll(SALE_GEM_TOKEN_ADDRESS, !saleStatus)
          .encodeABI()
      })

      if (response.status) {
        setSaleStatus(!saleStatus)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getMyGemTokens()
  }, [account, saleGemTokenContract])

  useEffect(() => {
    getSaleStatus()
  }, [account, mintGemTokenContract])

  return (
    <Box bg='#FFD3E8' p='48px' minH='100vh'>
      <VStack py='16px' textAlign='center'>
        <Text>Sale Status: {saleStatus ? 'on Sale' : 'NOT ON SALE'}</Text>
        <Button
          size='xs'
          ml='8px'
          colorScheme={saleStatus ? 'blue' : 'pink'}
          onClick={toggleSaleStatus}
        >
          {saleStatus ? 'Cancel' : 'Approve'}
        </Button>
      </VStack>
      <Grid templateColumns='repeat(4, 1fr)' gap='2px'>
        {myGemTokens?.map((v, i) => {
          return <MyGemCard key={i} gemTokenData={v} />
        })}
      </Grid>
    </Box>
  )
}

export default MyGemz
