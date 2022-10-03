import React from 'react'
import type { NextPage } from 'next'
import GemCardContainer from './GemCardContainer'
import GemCardMetaData from './GemCardMetaData'
import GemCardOwned from './GemCardOwned'
import GemCardOnSale from './GemCardOnSale'
import { GemCardProps, GemTokenMetadata } from '../../interfaces'

interface TempTypes extends GemCardProps {
  metadataURI: GemTokenMetadata | undefined
  saleStatus: Boolean
  price: string | undefined
}

const GemCard: NextPage<TempTypes> = ({ metadataURI, saleStatus, price }) => {
  return (
    <GemCardContainer>
      <GemCardMetaData metadataURI={metadataURI} />
      {saleStatus ? <GemCardOnSale price={price} /> : <GemCardOwned />}
    </GemCardContainer>
  )
}

export default GemCard
