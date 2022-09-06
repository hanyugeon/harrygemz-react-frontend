import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { useDisclosure } from '@chakra-ui/react'
import MintingModal from '../components/minting/MintingModal'
import { useCaver } from '../hooks'
import Minting from '../components/minting'


const Home: NextPage = () => {
  // useState들 props 연관성 고민하고 정리하기.
  const [remainGemTokens, setRemainGemTokens] = useState<number>(0);
  const [gemTokenCount, setGemTokenCount] = useState<string[][] | undefined>(
    undefined
  )

  const { mintGemTokenContract } = useCaver()
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  // utils로 빼는 작업 필요 >>>>>
  const getRemainGemTokens = async () => {
    try {
      if(!mintGemTokenContract) return ;

      const response = await mintGemTokenContract.methods.totalSupply().call();

      setRemainGemTokens(1000 - parseInt(response, 10));
    } catch(error) {
      console.error(error);
    }
  }

  const getGemTokenCount = async () => {
    try {
      if(!mintGemTokenContract) return ;

      const response = await mintGemTokenContract.methods.getGemTokenCount().call();

      setGemTokenCount(response);

    } catch(error) {
      console.error(error);
    }
  }
  // <<<<<

  // 
  useEffect(() => {
    getRemainGemTokens();
    getGemTokenCount();
  }, [mintGemTokenContract]);

  return (
    <Minting />
  )
}

export default Home;
