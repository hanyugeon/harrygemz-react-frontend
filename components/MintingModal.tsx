import { FC, useEffect } from 'react';
import { useAccount, useCaver, useMetadata } from '../hooks';
import { 
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text
} from '@chakra-ui/react';
import { MINT_GEM_TOKEN_ADDRESS } from '../caverConfig';
import { GemTokenData } from '../interfaces';


interface MintingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MintingModal: FC<MintingModalProps> = ({ isOpen, onClose }) => {
  // hooks
  const { account } = useAccount();
  const { caver, mintGemTokenContract, saleGemTokenContract } = useCaver();
  const { metadataURI, getMetadata } = useMetadata();

  const onClickMint = async () => {
    try {
      if(!account || !caver || !mintGemTokenContract)  return;

      // caver-js의 버그, send함수가 kaikas지갑이랑 같이 사용이 안됨
      // const response = await mintGemTokenContract.methods.mintGemToken().send({
      //   from: account,
      //   value: caver.utils.convertToPeb(1, "KLAY"),
      //   gas: 3000000,
      // })

      const response = await caver.klay.sendTransaction({
        type: "SMART_CONTRACT_EXECUTION",
        from: account,
        to: MINT_GEM_TOKEN_ADDRESS,
        value: caver.utils.convertToPeb(1, "KLAY"),
        gas: "3000000",
        data: mintGemTokenContract.methods.mintGemToken().encodeABI(),
      });

      if (response) {
        const latestMintedGemToken: GemTokenData = await saleGemTokenContract.methods
        .getLatestMintedGemToken(account)
        .call()

        getMetadata(latestMintedGemToken.gemTokenRank, latestMintedGemToken.gemTokenType);

        console.log(latestMintedGemToken);
      }

      console.log(response)
    } catch(error) {
      console.log(error);
    }
  };

  useEffect(() => console.log(metadataURI), [metadataURI])

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Miting</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Would you like to proceed with the minting?</Text>
            <Text>(1 klay will be consumed.)</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="pink" onClick={onClickMint}>Minting</Button>
            <Button ml={2} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  )
};

export default MintingModal;
