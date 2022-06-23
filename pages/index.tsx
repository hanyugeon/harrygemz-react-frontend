import type { NextPage } from 'next';
import { Flex, Button, useDisclosure } from '@chakra-ui/react';
import MintingModal from '../components/MintingModal';

const Home: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <>
      <Flex bg="#E5E5E5" minH="100vh" justifyContent="center" alignItems="center">
        <Button colorScheme="pink" onClick={onOpen}>
          Minting
        </Button>
      </Flex>
      <MintingModal isOpen={isOpen} onClose={onClose}/>
    </>
  );
};

export default Home;
