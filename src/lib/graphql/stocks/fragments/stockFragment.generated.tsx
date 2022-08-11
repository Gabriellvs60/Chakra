import { gql } from "@apollo/client";

import type * as Types from "../../../../../generated/graphql";

export type StockFragmentFragment = { __typename?: "Stock" } & Pick<
  Types.Stock,
  | "id"
  | "createdAt"
  | "updatedAt"
  | "category"
  | "cnpj"
  | "name"
  | "symbol"
  | "type"
>;

export const StockFragmentFragmentDoc = gql`
  fragment StockFragment on Stock {
    id
    createdAt
    updatedAt
    category
    cnpj
    name
    symbol
    type
  }
`;
