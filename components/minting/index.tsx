import React from "react"
import type { NextPage } from 'next'
import MintingContainer from "./MintingContainer"
import MintingTable from "./MintingTable"
import MintingArea from "./MintingArea"

const Minting: NextPage = () => {
  
  return (
    <MintingContainer>
      <MintingTable />
      <MintingArea />
    </MintingContainer>
  )
}

export default Minting
