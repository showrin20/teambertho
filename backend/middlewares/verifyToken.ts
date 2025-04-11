import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface DecodedToken {
  id: string;
  email: string;
  role: string;
}

interface AuthRequest extends Request {
  user?: DecodedToken;
}

export const verifyToken = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): void => {  // Return type is void, meaning no response object should be returned here
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    // Send error response and stop further processing
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    // Send error response and stop further processing
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const secret = process.env.JWT_SECRET || 'yoursecretkey';  // Default secret
    const decoded = jwt.verify(token, secret) as DecodedToken;
    req.user = decoded;  // Store the decoded user data in the request object
    next();  // Proceed to the next middleware or route handler
  } catch (err) {
    // Handle token verification failure
    console.error('Error verifying token:', err);
    return res.status(403).json({ message: 'Invalid or expired token.' });
  }
};
