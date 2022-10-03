import { FC, useState, useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import { GemTokenData } from '../interfaces'
import { useAccount, useCaver, useMetadata } from '../hooks'
// import GemCard from './GemCard'
import GemCard from './gemCardTest'
import { SALE_GEM_TOKEN_ADDRESS } from '../caverConfig'

interface MyGemCardProps {
  gemTokenData: GemTokenData
}

const MyGemCard: FC<MyGemCardProps> = ({ gemTokenData }) => {
  const { account } = useAccount()
  const { caver, saleGemTokenContract } = useCaver()
  const { metadataURI, getMetadata } = useMetadata()

  const [sellPrice, setSellPrice] = useState<string>('')
  const [myGemPrice, setMyGemPrice] = useState<string>(gemTokenData.tokenPrice)
  const [price, setPrice] = useState<string | undefined>('')

  const onClickSell = async () => {
    try {
      if (!account || !caver || !saleGemTokenContract) return

      const response = await caver.klay.sendTransaction({
        type: 'SMART_CONTRACT_EXECUTION',
        from: account,
        to: SALE_GEM_TOKEN_ADDRESS,
        gas: '3000000',
        data: saleGemTokenContract.methods
          .setForSaleGemToken(
            gemTokenData.tokenId,
            caver.utils.convertToPeb(sellPrice, 'KLAY')
          )
          .encodeABI()
      })

      if (response.status) {
        setMyGemPrice(caver.utils.convertToPeb(sellPrice, 'KLAY'))
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getMetadata(gemTokenData.gemTokenRank, gemTokenData.gemTokenType)
  }, [])
  useEffect(() => {
    setPrice(caver?.utils.convertFromPeb(gemTokenData.tokenPrice, 'KLAY'))
  }, [account, saleGemTokenContract])

  return (
    <Box w={{ base: '120px', sm: '140px', md: '160px' }} m='8px'>
      {/* <GemCard metadataURI={metadataURI} saleStatus={false} /> */}
      {myGemPrice === '0' ? (
        <GemCard metadataURI={metadataURI} saleStatus={false} price={price} />
      ) : (
        // <Flex>
        //   <InputGroup size="sm" borderColor="#E88CBD">
        //       <Input
        //         type="number"
        //         borderWidth={2}
        //         borderColor="#E88CBD"
        //         focusBorderColor="#E88CBD"
        //         value={sellPrice}
        //         onChange={e => setSellPrice(e.target.value)}
        //       />
        //       <InputRightAddon
        //         bg="#E88CBD"
        //         color="#FFFFFF"
        //         fontSize={16}
        //         children="Klay"
        //       />
        //     </InputGroup>
        //     <Button
        //       size="sm"
        //       ml={2}
        //       bg="#E88CBD"
        //       color="#FFFFFF"
        //       onClick={onClickSell}
        //     >
        //       Sell
        //     </Button>
        // </Flex>
        <GemCard metadataURI={metadataURI} saleStatus={true} price={price} />
        // <Text>{caver?.utils.convertFromPeb(myGemPrice, 'KLAY')} KLAY</Text>
      )}
    </Box>
  )
}

export default MyGemCard
