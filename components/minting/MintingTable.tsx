import React from 'react'
import type { NextPage } from 'next'
import { TableContainer, Table, Thead, Tr, Th } from '@chakra-ui/react'

const MintingTable: NextPage = () => {
  return (
    <TableContainer mb='4px'>
      <Table size={{ base: 'sm', md: 'md', lg: 'lg' }}>
        <Thead>
          <Tr>
            <Th>Rank\Type</Th>
            <Th>1</Th>
            <Th>2</Th>
            <Th>3</Th>
            <Th>4</Th>
          </Tr>
        </Thead>
        {/* getMintingTableBody */}
        {/* {gemTokenCount?.map((v, i) => {
          return (
            <Tbody key={i}>
              <Tr>
                <Td>{i + 1}</Td>
                {v.map((w, j) => {
                  return <Td key={j}>{w}</Td>;
                })}
              </Tr>
            </Tbody>
          );
        })} */}
      </Table>
    </TableContainer>
  )
}

export default MintingTable
