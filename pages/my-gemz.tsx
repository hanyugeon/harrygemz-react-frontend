import { FC, useState, useEffect } from "react";
import { Box, Grid } from "@chakra-ui/react";
import { GemTokenData } from "../interfaces";
import { useAccount, useCaver } from '../hooks';
import MyGemCard from '../components/MyGemCard';

const MyGemz: FC = () => {
  const [myGemTokens, setMyGemTokens] = useState<GemTokenData[] | undefined>(
    undefined
  );

  const { account } = useAccount();
  const { saleGemTokenContract } = useCaver();

  const getMyGemTokens = async () => {
    try {
      if(!account || !saleGemTokenContract) return;

      const response = await saleGemTokenContract.methods
        .getGemTokens(account)
        .call();

      setMyGemTokens(response);
    } catch(error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMyGemTokens();
  }, [account, saleGemTokenContract]);

  return (
  <Box bg="#FFD3E8" p={12} minH="100vh">
    <Grid templateColumns="repeat(4, 1fr)" py={4}>
        {myGemTokens?.map((v, i) => {
          return <MyGemCard key={i} gemTokenData={v} />
        })}
    </Grid>
  </Box>
  );
}

export default MyGemz;
