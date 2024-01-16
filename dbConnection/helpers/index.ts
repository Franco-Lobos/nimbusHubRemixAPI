import crypto from 'crypto';
import jwt from 'jsonwebtoken';
const { sign, verify } = jwt;

export const generateRandomString = (length: number = 128): string => {
  return crypto.randomBytes(length).toString('base64');
};

export const authentication = (salt: string, password: string): string => {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(process.env.API_DECODER!).digest('hex');
}


export function verifySessionToken(sessionToken:any) {
  try {
    // Decode the header and payload
    const decodedPayload = verify(sessionToken, process.env.API_DECODER!, { algorithms: ['HS256'] }) as any;

    const isTokenValid = !decodedPayload.exp || decodedPayload.exp > Math.floor(Date.now() / 1000);

    return isTokenValid;
  } catch (error: any) {
    // Handle verification errors (e.g., invalid signature, expired token)
    console.error('Token verification error:', error.message);
    return false;
  }
}
