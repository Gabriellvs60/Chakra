import { useRouter } from "next/router";
import { useCallback } from "react";

import type { LoginMutationVariables } from "lib/graphql/auth/login.generated";
import { useLoginMutation } from "lib/graphql/auth/login.generated";
import { destroyCookie, setCookie } from "lib/utils/cookies";
import { Logger } from "lib/utils/logger";

export function useAuthHook() {
  const [login] = useLoginMutation();
  const router = useRouter();

  const authenticate = useCallback(
    async (variables: LoginMutationVariables) => {
      try {
        const { data } = await login({ variables });

        setCookie(null, "authToken", data?.login.accessToken, {
          maxAge: 31536000,
          path: "/",
        });
        router.push("/admin/home");

        return data;
      } catch (error) {
        Logger.warn(error);
      }
      return null;
    },
    [login, router]
  );

  const logout = useCallback(() => {
    destroyCookie("authToken");
    router.replace("/auth/login");
  }, [router]);

  return {
    authenticate,
    logout,
  };
}
