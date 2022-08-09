import { subDays } from "date-fns";
import type { NextPageContext } from "next";
import { parseCookies, setCookie as setNookie } from "nookies";

import { config } from "lib/config/env";

export function getCookie(ctx: never | null, key: string) {
  const cookies = parseCookies(ctx);
  return cookies?.[`@${config.COOKIE_PREFIX || "traderBook"}:${key}`];
}

export function setCookie(
  ctx: Pick<NextPageContext, "res"> | { res: unknown } | null,
  key: string,
  value: string,
  cookieOptions: { maxAge: number; path: string }
) {
  return setNookie(
    ctx,
    `@${config.COOKIE_PREFIX || "traderBook"}:${key}`,
    value,
    cookieOptions
  );
}

export function destroyCookie(key: string) {
  const expireDate = subDays(new Date(), 1);

  // eslint-disable-next-line no-return-assign
  return (document.cookie = `@${
    config.COOKIE_PREFIX || "traderBook"
  }:${key} = null; path=/; expires=${expireDate};`);
}
