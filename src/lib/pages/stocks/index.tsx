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
import { useStocksQuery } from "lib/graphql/stocks/stocks.generated";

const Stocks = () => {
  const { data } = useStocksQuery();
  // eslint-disable-next-line no-console
  console.log(data?.stocks.edges);

  const stocksData = data?.stocks.edges;

  return (
    <LayoutTemplate>
      <NextSeo title="Stocks" />
      <span>add</span>
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
            {stocksData?.map((stock) => (
              <Tr>
                <Td>{stock.node.name}</Td>
                <Td>{stock.node.symbol}</Td>
                <Td>{stock.node.type}</Td>
                <Td>{stock.node.cnpj}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </LayoutTemplate>
  );
};

export default Stocks;
