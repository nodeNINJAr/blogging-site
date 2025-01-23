import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

const corsMiddleware = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://simple-blogging.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return true;
  }

  return false;
};

const customHandleAuth = (req, res) => {
  if (!corsMiddleware(req, res)) {
    return handleAuth()(req, res);
  }
};

export const GET = customHandleAuth;
export const POST = customHandleAuth;
