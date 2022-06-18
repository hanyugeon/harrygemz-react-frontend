import Caver, { Contract } from "caver-js";
import { useEffect, useState } from "react";
import {
  MINT_GEM_TOKEN_ABI,
  MINT_GEM_TOKEN_ADDRESS,
  SALE_GEM_TOKEN_ABI,
  SALE_GEM_TOKEN_ADDRESS,
} from "../caverConfig";

export const useAccount = () => {
  const [account, setAccount] = useState<string>("");

  const getAccount =  async () => {
    try {
      const accounts = await window.klaytn.enable();

      setAccount(accounts[0]);
    } catch(error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if(window.klaytn) {
      getAccount();
    }
  }, []);
  
  return { account };
};

export const useCaver = () => {
  const [caver, setCaver] = useState<Caver | undefined>(undefined);
  const [mintGemTokenContract, serMintGemTokenContract] = useState<Caver | undefined>(undefined);
  const [saleGemTokenContract, serSaleGemTokenContract] = useState<Caver | undefined>(undefined);

  useEffect(() => {
    if(window.klaytn) {
      setCaver(new Caver(window.klaytn));
    }
  }, []);

  useEffect(() => {
    if(!caver) return;

    serMintGemTokenContract(
      caver.contract.create(MINT_GEM_TOKEN_ABI, MINT_GEM_TOKEN_ADDRESS)
    );
    serSaleGemTokenContract(
      caver.contract.create(SALE_GEM_TOKEN_ABI, SALE_GEM_TOKEN_ADDRESS)
    );
  }, [caver])

  return { caver, mintGemTokenContract, saleGemTokenContract };
};