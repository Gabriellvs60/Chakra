import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import LayoutTemplate from "lib/components/layout/LayoutTemplate";
// import { useStocksQuery } from "lib/graphql/stocks/stocks.generated";

const Stocks = () => {
  //   const { data } = useStocksQuery();
  // eslint-disable-next-line no-console
  //   console.log(data);

  return (
    <LayoutTemplate>
      <NextSeo title="Stocks" />
      <TableContainer
        border="1px"
        borderColor="gray.200"
        borderRadius="20px"
        p={2}
      >
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Symbol</Th>
              <Th>Type</Th>
              <Th>CNPJ</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td> Maxi Renda</Td>
              <Td>MXRF11</Td>
              <Td>FII</Td>
              <Td>97.521.225/0001-25</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </LayoutTemplate>
  );
};

export default Stocks;
