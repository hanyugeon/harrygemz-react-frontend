import { ReactNode } from 'react'

// children
export interface LayoutProps {
  children: ReactNode
}

// buttons
export interface InternalButtonProps {
  name: string
  route: string
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
