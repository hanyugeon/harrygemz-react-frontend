import { Box, Image, Text } from "@chakra-ui/react";
import { FC } from "react";
import { GemTokenMetadata } from "../interfaces";

interface GemCardProps {
  metadataURI: GemTokenMetadata | undefined
}

const GemCard: FC<GemCardProps> = ({ metadataURI }) => {
  return (
    <Box>
      <Image src={metadataURI?.image} fallbackSrc="loading.png" alt="gem" />
      <Text>{metadataURI?.name}</Text>
      <Text>{metadataURI?.description}</Text>
    </Box>
  );
};

export default GemCard;
