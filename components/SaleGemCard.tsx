import { Box } from '@chakra-ui/react'
import { FC, useEffect, useState } from 'react'
import { SALE_GEM_TOKEN_ADDRESS } from '../caverConfig'
import { useAccount, useCaver, useMetadata } from '../hooks'
import { GemTokenData } from '../interfaces'
import GemCard from './gemCardTest'

interface SaleGemCardProps {
  gemTokenData: GemTokenData
  getSaleGemTokens: () => Promise<void>
  setSaleGemTokens: Dispatch<SetStateAction<GemTokenData[] | undefined>>
}

const SaleGemCard: FC<SaleGemCardProps> = ({
  gemTokenData,
  getSaleGemTokens,
  setSaleGemTokens
}) => {
  const { account } = useAccount()
  const { caver, saleGemTokenContract } = useCaver()
  const { metadataURI, getMetadata } = useMetadata()

  const [price, setPrice] = useState<string | undefined>('')

  useEffect(() => {
    setPrice(caver?.utils.convertFromPeb(gemTokenData.tokenPrice, 'KLAY'))
  }, [account, saleGemTokenContract])

  const onClickBuy = async () => {
    try {
      if (!account || !caver || !saleGemTokenContract) return

      const response = await caver.klay.sendTransaction({
        type: 'SMART_CONTRACT_EXECUTION',
        from: account,
        to: SALE_GEM_TOKEN_ADDRESS,
        gas: '3000000',
        data: saleGemTokenContract.methods
          .purchaseGemToken(gemTokenData.tokenId)
          .encodeABI(),
        value: gemTokenData.tokenPrice
      })

      if (response.status) {
        setSaleGemTokens(undefined)
        getSaleGemTokens()
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getMetadata(gemTokenData.gemTokenRank, gemTokenData.gemTokenType)
  }, [])

  return (
    <Box w={{ base: '125px', sm: '150px', md: '180px' }} m='8px'>
      <GemCard metadataURI={metadataURI} saleStatus={true} price={price} />
      {/* <Text>
        {caver?.utils.convertFromPeb(gemTokenData.tokenPrice, 'KLAY')} KLAY
      </Text>
      <Button variant='purchase' size='sm' ml={2} onClick={onClickBuy}>
        Purchase
      </Button> */}
    </Box>
  )
}

export default SaleGemCard
