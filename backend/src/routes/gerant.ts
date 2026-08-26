import { Hono } from 'hono';

const router = new Hono();

router.get('/', (c) => {
  return c.json({ message: 'Gérant dashboard', user: c.get('user') });
});

router.get('/caisses', (c) => {
  return c.json({ data: [] });
});

export default router;
