import { Box, Grid } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import SaleGemCard from '../components/SaleGemCard'
import { useCaver } from '../hooks'
import { GemTokenData } from '../interfaces'

const Sale: NextPage = () => {
  const [saleGemTokens, setSaleGemTokens] = useState<
    GemTokenData[] | undefined
  >(undefined)

  const { saleGemTokenContract } = useCaver()

  const getSaleGemTokens = async () => {
    try {
      if (!saleGemTokenContract) return

      const response = await saleGemTokenContract.methods
        .getSaleGemTokens()
        .call()

      setSaleGemTokens(response)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getSaleGemTokens()
  }, [saleGemTokenContract])

  return (
    <Box
      bg='brand.100'
      p={{ base: '12px', sm: '14px', md: '32px' }}
      minH='100vh'
    >
      <Grid
        mt={{ base: '160px', sm: '128px', md: '64px' }}
        templateColumns={{
          base: 'repeat(2, 1fr)',
          sm: 'repeat(3, 1fr)',
          md: 'repeat(4, 1fr)'
        }}
        gap='2px'
      >
        {saleGemTokens?.map((v, i) => {
          return (
            <SaleGemCard
              key={i}
              gemTokenData={v}
              getSaleGemTokens={getSaleGemTokens}
              setSaleGemTokens={setSaleGemTokens}
            />
          )
        })}
      </Grid>
    </Box>
  )
}

export default Sale
