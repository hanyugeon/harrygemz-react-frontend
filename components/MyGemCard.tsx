import { FC, useEffect } from 'react';
import { GemTokenData } from '../interfaces'
import { useMetadata } from '../hooks';
import GemCard from "./GemCard";

interface MyGemCardProps {
  gemTokenData: GemTokenData;
}

const MyGemCard: FC<MyGemCardProps> = ({ gemTokenData }) => {
  const { metadataURI, getMetadata } = useMetadata();

  useEffect(() => {
    getMetadata(gemTokenData.gemTokenRank, gemTokenData.gemTokenType);
  }, []);
  
  return (
    <GemCard metadataURI={metadataURI} />
  );
}

export default MyGemCard;
