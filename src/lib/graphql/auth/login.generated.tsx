import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";

import type * as Types from "../../../../generated/graphql";

const defaultOptions = {};
export type LoginMutationVariables = Types.Exact<{
  data: Types.LoginInput;
}>;

export type LoginMutation = { __typename?: "Mutation" } & {
  login: { __typename?: "Auth" } & Pick<
    Types.Auth,
    "accessToken" | "refreshToken"
  > & {
      user: { __typename?: "User" } & Pick<
        Types.User,
        "email" | "id" | "firstname"
      >;
    };
};

export const LoginDocument = gql`
  mutation login($data: LoginInput!) {
    login(data: { email: "lisa@simpson.com", password: "secret42" }) {
      accessToken
      refreshToken
      user {
        email
        id
        firstname
      }
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
