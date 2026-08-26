import { Hono } from 'hono';

const router = new Hono();

router.get('/', (c) => {
  return c.json({ message: 'Membre dashboard', user: c.get('user') });
});

router.get('/comptes', (c) => {
  return c.json({ data: [] });
});

export default router;
