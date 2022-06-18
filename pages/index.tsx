import type { NextPage } from 'next';
import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
// import { useAccount } from '../hooks';
import { useCaver } from '../hooks';

const Home: NextPage = () => {
  // const { account } = useAccount();
  const { caver, mintGemTokenContract, saleGemTokenContract } = useCaver();

  // useEffect(() => console.log(account), [account]);
  useEffect(() => console.log(caver), [caver]);
  useEffect(() => console.log(mintGemTokenContract), [mintGemTokenContract]);
  useEffect(() => console.log(saleGemTokenContract), [saleGemTokenContract]);

  return (
    <Box>Home</Box>
  );
};

export default Home;
