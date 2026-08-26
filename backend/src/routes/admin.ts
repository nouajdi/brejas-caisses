import { Hono } from 'hono';

const router = new Hono();

router.get('/', (c) => {
  return c.json({ message: 'Admin dashboard', user: c.get('user') });
});

router.post('/users', async (c) => {
  const body = await c.req.json();
  return c.json({ success: true, data: body });
});

export default router;
