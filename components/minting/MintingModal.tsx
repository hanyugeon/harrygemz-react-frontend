import React from 'react'
import type { NextPage } from 'next'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader
} from '@chakra-ui/react'
import MintingModalButton from './MintingModalButton'
import { proceedMinting } from '../../utils'

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

  // const { metadataURI, getMetadata } = useMetadata();
  const metadataURI = undefined
  const onClickEvent = () => {
    console.log('hello')
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>Minting</ModalHeader>
        <ModalBody>{proceedMinting(metadataURI)}</ModalBody>
        <ModalFooter>
          <MintingModalButton
            name='Minting'
            variant='modalAccept'
            event={onClickEvent}
          />
          <MintingModalButton
            name='Close'
            variant='modalCancel'
            event={onClose}
          />
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default MintingModal
