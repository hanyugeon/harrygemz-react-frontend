import React from 'react'
import type { NextPage } from 'next'
import { 
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text, 
  Flex
} from '@chakra-ui/react'
import GemCard from '../GemCard'

interface MintingModalProps {
  isOpen: boolean
  onClose: () => void
  // getRemainGemTokens: () => Promise<void>
  // getGemTokenCount: () => Promise<void>
}

const MintingModal: NextPage<MintingModalProps> = ({ isOpen, onClose }) => {
  // getRemainGemTokens, getGemTokenCount props 넣어야함.

  // // custom hooks
  // const { account } = useAccount();
  // const { caver, mintGemTokenContract, saleGemTokenContract } = useCaver();
  // const { metadataURI, getMetadata } = useMetadata();

  // const onClickMint = async () => {
  //   try {
  //     if(!account || !caver || !mintGemTokenContract)  return ;

  //     const response = await caver.klay.sendTransaction({
  //       type: "SMART_CONTRACT_EXECUTION",
  //       from: account,
  //       to: MINT_GEM_TOKEN_ADDRESS,
  //       value: caver.utils.convertToPeb(1, "KLAY"),
  //       gas: "3000000",
  //       data: mintGemTokenContract.methods.mintGemToken().encodeABI(),
  //     });

  //     if (response) {
  //       const latestMintedGemToken: GemTokenData = await saleGemTokenContract.methods
  //       .getLatestMintedGemToken(account)
  //       .call();

  //       getMetadata(latestMintedGemToken.gemTokenRank, latestMintedGemToken.gemTokenType);
  //       getRemainGemTokens();
  //       getGemTokenCount();
  //     }
  //   } catch(error) {
  //     console.log(error);
  //   }
  // };

  // const [metadataURI, setMetadataURI] = useState<string>("")
  const metadataURI = null
  const onClick = () => {
    console.log('hello')
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Minting</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {metadataURI ? (
              <Flex justifyContent="center">
                <GemCard metadataURI={metadataURI}/>
              </Flex>
              ) : (
                <>
                  <Text>Would you like to proceed with the minting?</Text>
                  <Text>(1 klay will be consumed.)</Text>
                </>
              )}
          </ModalBody>
          <ModalFooter>
            <Button variant='modalAccept' onClick={onClick}>Minting</Button>
            {/* onClick={onClickMint} */}
            <Button variant='modalCancel' ml="4px" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  )
}

export default MintingModal
