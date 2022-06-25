import { FC } from 'react';
import Link from 'next/link';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

import { useAccount } from '../hooks';

const Header: FC = () => {
  const { account } = useAccount();

  return (
    <Flex 
      position="fixed"
      bg="#E88CBD"
      w="full"
      color="#FFFFFF"
      justifyContent="space-between" 
      px={12} 
      py={2}
    >
      <Box>HarryGemz</Box>
      <Box>
        <Link href="/">
          <Button size="sm" variant="ghost">
            Home
          </Button>
        </Link>
        <Link href="my-gemz">
          <Button size="sm" variant="ghost">
            my-gemz
          </Button>
        </Link>
      </Box>
      <Box>
        <Text>
          {account
            ? `${account.substr(0, 4)}...${account.substr(account.length - 4, account.length)}`
            : "please install kaikas wallet"}
        </Text>
      </Box>
    </Flex>
  );
}

export default Header;
