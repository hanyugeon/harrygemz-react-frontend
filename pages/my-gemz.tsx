import { FC, useState, useEffect } from "react";
import { Box, Grid, Text, Button } from "@chakra-ui/react";
import { GemTokenData } from "../interfaces";
import { useAccount, useCaver } from '../hooks';
import MyGemCard from '../components/MyGemCard';
import { MINT_GEM_TOKEN_ADDRESS, SALE_GEM_TOKEN_ADDRESS } from "../caverConfig";

const MyGemz: FC = () => {
  const [myGemTokens, setMyGemTokens] = useState<GemTokenData[] | undefined>(
    undefined
  );
  const [saleStatus, setSaleStatus] = useState<Boolean>(false);

  const { account } = useAccount();
  const { caver, mintGemTokenContract, saleGemTokenContract } = useCaver();

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

  const getSaleStatus = async () => {
    try {
      if(!account || !mintGemTokenContract) return ;

      const response = mintGemTokenContract.methods
        .isApprovedForAll(account, SALE_GEM_TOKEN_ADDRESS)
        .call();

      setSaleStatus(response);

    } catch(error) {
      console.error(error);
    }
  }

  const toggleSaleStatus = async () => {
    try {
      if(!account || !caver || !mintGemTokenContract) return;

      const response = await caver.klay.sendTransaction({
        type: "SMART_CONTRACT_EXECUTION",
        from: account,
        to: MINT_GEM_TOKEN_ADDRESS,
        gas: "3000000",
        data: mintGemTokenContract.methods
          .setApprovalForAll(SALE_GEM_TOKEN_ADDRESS, !saleStatus)
          .encodeABI(),
      })

      if (response.status) {
        setSaleStatus(!saleStatus);
      }
    } catch(error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMyGemTokens();
  }, [account, saleGemTokenContract]);

  useEffect(() => {
    getSaleStatus();
  }, [account, mintGemTokenContract]);

  return (
  <Box bg="#FFD3E8" p={12} minH="100vh">
    <Box py={4} textAlign="center">
      <Text d="inline-block">Sale Status: {saleStatus ? "on Sale" : "NOT ON SALE"}</Text>
      <Button size="xs" ml={2} colorScheme={saleStatus ? "blue" : "pink"} onClick={toggleSaleStatus}>{saleStatus ? "Cancel" : "Approve"}</Button>
    </Box>
    <Grid templateColumns="repeat(4, 1fr)" py={4}>
        {myGemTokens?.map((v, i) => {
          return <MyGemCard key={i} gemTokenData={v} />
        })}
    </Grid>
  </Box>
  );
}

export default MyGemz;
