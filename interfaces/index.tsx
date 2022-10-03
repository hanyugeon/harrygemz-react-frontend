import { ReactNode } from 'react'

// children
export interface LayoutProps {
  children: ReactNode
}

// buttons
export interface HeaderInternalButtonProps {
  name: string
  route: string
}

export interface MintingModalButtonProps {
  name: string
  variant: string
  event: () => void
}

// GemTokens
export interface GemTokenData {
  tokenId: string
  gemTokenRank: string
  gemTokenType: string
  tokenPrice: string
}

export interface GemTokenMetadata {
  name: string
  description: string
  image: string
  attributes: [
    { 0: { trait_type: 'Rank'; value: number } },
    { 1: { trait_type: 'Type'; value: number } }
  ]
}

// GemCards
export interface GemCardProps {
  metadataURI: GemTokenMetadata | undefined
}
