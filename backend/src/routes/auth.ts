import { Hono } from 'hono';
import { sign } from 'jsonwebtoken';

const router = new Hono();
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret';

// Mock users (replace with DB)
const USERS = [
  { id: 1, username: 'admin', password: 'admin123', role: 'admin' },
  { id: 2, username: 'ahmed', password: 'gerant123', role: 'gerant' },
  { id: 3, username: 'yassine', password: 'membre123', role: 'membre' },
];

router.post('/login', async (c) => {
  const { username, password } = await c.req.json();
  
  const user = USERS.find((u) => u.username === username && u.password === password);
  
  if (!user) {
    return c.json({ error: 'Invalid credentials' }, 401);
  }

  const token = sign(
    { id: user.id, username: user.username, role: user.role },
    JWT_SECRET,
    { expiresIn: '7d' }
  );

  return c.json({
    token,
    user: { id: user.id, username: user.username, role: user.role },
  });
});

export default router;
