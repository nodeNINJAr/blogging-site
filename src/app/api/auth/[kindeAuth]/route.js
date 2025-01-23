import { handleAuth } from '@kinde-oss/kinde-auth-nextjs/server';

export const GET = async (req, res) => {
  try {
    console.log('Received Callback Parameters:', req.query); // Log incoming query parameters
      await handleAuth(req, res);
  } catch (err) {
    console.error('Error during callback:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

