import { verify } from 'jsonwebtoken';
import { createMiddleware } from 'hono/factory';

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret';

export const authMiddleware = createMiddleware(async (c, next) => {
  const authHeader = c.req.header('Authorization');
  
  if (!authHeader?.startsWith('Bearer ')) {
    return c.json({ error: 'Unauthorized' }, 401);
  }

  const token = authHeader.slice(7);

  try {
    const decoded = verify(token, JWT_SECRET) as any;
    c.set('user', decoded);
    await next();
  } catch (err) {
    return c.json({ error: 'Invalid token' }, 401);
  }
});
