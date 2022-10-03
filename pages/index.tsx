import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { Grid, HStack, useDisclosure } from '@chakra-ui/react'
import { useCaver, useMetadata } from '../hooks'
import Minting from '../components/minting'
import { GemTokenData } from '../interfaces'

interface TempTypes {
  gemTokenData: GemTokenData
}

const Home: NextPage<TempTypes> = ({ gemTokenData }) => {
  const { mintGemTokenContract } = useCaver()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { metadataURI, getMetadata } = useMetadata()

  // useState들 props 연관성 고민하고 정리하기.
  const [remainGemTokens, setRemainGemTokens] = useState<number>(0)
  const [gemTokenCount, setGemTokenCount] = useState<string[][] | undefined>(
    undefined
  )

  const [saleStatus, setSaleStatus] = useState<Boolean>(true)

  // // utils로 빼는 작업 필요 >>>>>
  // const getRemainGemTokens = async () => {
  //   try {
  //     if(!mintGemTokenContract) return ;

  //     const response = await mintGemTokenContract.methods.totalSupply().call();

  //     setRemainGemTokens(1000 - parseInt(response, 10));
  //   } catch(error) {
  //     console.error(error);
  //   }
  // }

  // const getGemTokenCount = async () => {
  //   try {
  //     if(!mintGemTokenContract) return ;

  //     const response = await mintGemTokenContract.methods.getGemTokenCount().call();

  //     setGemTokenCount(response);

  //   } catch(error) {
  //     console.error(error);
  //   }
  // }
  // // <<<<<

  // // useEffect() 어느 때에 리랜더링이 필요할지 고민하기
  // useEffect(() => {
  //   getRemainGemTokens();
  //   getGemTokenCount();
  // }, [mintGemTokenContract]);

  return (
    <>
      <Minting />
      <Grid templateColumns='repeat(4, 1fr)' py={4}>
        {/* {myGemTokens?.map((v, i) => {
          return <MyGemCard key={i} gemTokenData={v} />
        })}
        {for (let i = 0; i < 4; i++) {

        }} */}
      </Grid>
    </>
  )
}

export default Home
