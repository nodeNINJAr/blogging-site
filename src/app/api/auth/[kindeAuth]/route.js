import {handleAuth} from "@kinde-oss/kinde-auth-nextjs/server";

export const GET = async (req, res) => {
  // Set CORS headers to allow requests from your Vercel domain
  res.setHeader('Access-Control-Allow-Origin', 'https://simple-blogging.vercel.app'); // Replace with your domain
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight (OPTIONS) requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    handleAuth(req, res);  // Use the Kinde SDK to handle the auth logic
  } catch (error) {
    console.error('Error handling authentication', error);
    res.status(500).json({ error: 'Authentication error' });
  }
};
