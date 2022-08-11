import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";

import type * as Types from "../../../../generated/graphql";

import { StockFragmentFragmentDoc } from "./fragments/stockFragment.generated";
import type { StockFragmentFragment } from "./fragments/stockFragment.generated";

const defaultOptions = {};
export type StocksQueryVariables = Types.Exact<{ [key: string]: never }>;

export type StocksQuery = { __typename?: "Query" } & {
  stocks: { __typename?: "StockConnection" } & Pick<
    Types.StockConnection,
    "totalCount"
  > & {
      edges?: Types.Maybe<
        Array<
          { __typename?: "StockEdge" } & Pick<Types.StockEdge, "cursor"> & {
              node: { __typename?: "Stock" } & StockFragmentFragment;
            }
        >
      >;
      pageInfo: { __typename?: "PageInfo" } & Pick<
        Types.PageInfo,
        "startCursor" | "endCursor" | "hasNextPage" | "hasPreviousPage"
      >;
    };
};

export const StocksDocument = gql`
  query stocks {
    stocks(first: 20, orderBy: { field: symbol, direction: desc }) {
      totalCount
      edges {
        cursor
        node {
          ...StockFragment
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
  ${StockFragmentFragmentDoc}
`;

/**
 * __useStocksQuery__
 *
 * To run a query within a React component, call `useStocksQuery` and pass it any options that fit your needs.
 * When your component renders, `useStocksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStocksQuery({
 *   variables: {
 *   },
 * });
 */
export function useStocksQuery(
  baseOptions?: Apollo.QueryHookOptions<StocksQuery, StocksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<StocksQuery, StocksQueryVariables>(
    StocksDocument,
    options
  );
}
export function useStocksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<StocksQuery, StocksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<StocksQuery, StocksQueryVariables>(
    StocksDocument,
    options
  );
}
export type StocksQueryHookResult = ReturnType<typeof useStocksQuery>;
export type StocksLazyQueryHookResult = ReturnType<typeof useStocksLazyQuery>;
export type StocksQueryResult = Apollo.QueryResult<
  StocksQuery,
  StocksQueryVariables
>;
