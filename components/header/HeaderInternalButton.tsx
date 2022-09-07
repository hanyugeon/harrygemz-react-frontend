import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Button } from '@chakra-ui/react'
import { InternalButtonProps } from '../../interfaces'

const HeaderInternalButton: NextPage<InternalButtonProps> = ({
  name,
  route
}) => {
  const router = useRouter()

  const handleClick = (e: any) => {
    e.preventDefault()
    router.push(route)
  }

  return (
    <Button
      variant='navigator'
      fontSize={{ base: '12px', md: '18px' }}
      onClick={handleClick}
    >
      {name}
    </Button>
  )
}

export default HeaderInternalButton
