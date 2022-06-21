import Caver, { Contract } from "caver-js";
import { useEffect, useState } from "react";
import {
  MINT_GEM_TOKEN_ABI,
  MINT_GEM_TOKEN_ADDRESS,
  SALE_GEM_TOKEN_ABI,
  SALE_GEM_TOKEN_ADDRESS,
} from "../caverConfig";
import { GemTokenMetadata } from "../interfaces";
import axios from "axios";

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
  const [mintGemTokenContract, setMintGemTokenContract] = useState<Caver | undefined>(undefined);
  const [saleGemTokenContract, setSaleGemTokenContract] = useState<Caver | undefined>(undefined);

  useEffect(() => {
    if(window.klaytn) {
      setCaver(new Caver(window.klaytn));
    }
  }, []);

  useEffect(() => {
    if(!caver) return;

    setMintGemTokenContract(
      caver.contract.create(MINT_GEM_TOKEN_ABI, MINT_GEM_TOKEN_ADDRESS)
    );
    setSaleGemTokenContract(
      caver.contract.create(SALE_GEM_TOKEN_ABI, SALE_GEM_TOKEN_ADDRESS)
    );
  }, [caver])

  return { caver, mintGemTokenContract, saleGemTokenContract };
};

export const useMetadata = () => {
  const [metadataURI, setMetadataURI] = useState<GemTokenMetadata | undefined>(
    undefined
  );

  const getMetadata = async (gemTokenRank: string, gemTokenType: string) => {
    try {
      // axios 라이브러리를 통해 pinata에 있는 메타데이터 가져오기.
      const response = await axios.get(`${process.env.NEXT_PUBLIC_METADATA_URI}/${gemTokenRank}/${gemTokenType}.json`);

      setMetadataURI(response.data)
    } catch(error) {
      console.error(error);
    }
  };

  return { metadataURI, getMetadata };
}
