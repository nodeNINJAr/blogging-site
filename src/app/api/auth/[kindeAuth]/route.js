import {handleAuth} from "@kinde-oss/kinde-auth-nextjs/server";

export const GET = handleAuth({
  redirectUri: 'https://simple-blogging.vercel.app/api/auth/callback',
  postLogoutRedirectUri: 'https://simple-blogging.vercel.app',        
});
