import fetch from "node-fetch";

import { authData, authUrl, userDataUrl } from "../../contants/discord";

export interface TokenData {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
}

export interface DiscordUser {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  public_flags: number;
  flags: number;
  email: string;
  verified: boolean;
  locale: string;
  mfa_enabled: boolean;
}

export const getDiscordUser = async (code: string): Promise<DiscordUser> => {
  const data = { ...authData, code };

  // Get auth token
  const response = await fetch(authUrl, {
    method: "POST",
    body: new URLSearchParams(data) as any,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  const tokenData: TokenData = await response.json();
  console.log(tokenData);

  // Get user data
  const userDataResponse = await fetch(userDataUrl, {
    headers: {
      authorization: `${tokenData.token_type} ${tokenData.access_token}`,
    },
  });

  const userData: DiscordUser = await userDataResponse.json();

  return userData;
};
