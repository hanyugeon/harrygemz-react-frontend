import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { Flex, Button, useDisclosure, Text } from '@chakra-ui/react';
import MintingModal from '../components/MintingModal';
import { useCaver } from '../hooks'


const Home: NextPage = () => {
  const [remainGemTokens, setRemainGemTokens] = useState<number>(0);

  const { mintGemTokenContract } = useCaver();
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const getRemainGemTokens = async () => {
    try {
      if(!mintGemTokenContract) return ;

      const response = await mintGemTokenContract.methods.totalSupply().call();

      setRemainGemTokens(1000 - parseInt(response, 10));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRemainGemTokens();
  }, [mintGemTokenContract]);

  return (
    <>
      <Flex 
        bg="#E5E5E5" 
        minH="100vh" 
        justifyContent="center" 
        alignItems="center" 
        direction="column"
      >
        <Text mb="4">Just [{remainGemTokens}] Gemz Remaining</Text>
        <Button colorScheme="pink" onClick={onOpen}>
          Minting
        </Button>
      </Flex>
      <MintingModal isOpen={isOpen} onClose={onClose} getRemainGemTokens={getRemainGemTokens}/>
    </>
  );
};

export default Home;
