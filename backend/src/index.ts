import { Hono } from 'hono';
import { cors } from 'hono/cors';
import authRoutes from './routes/auth';
import adminRoutes from './routes/admin';
import gerantRoutes from './routes/gerant';
import membreRoutes from './routes/membre';
import { authMiddleware } from './middleware/auth';

const app = new Hono();

app.use('*', cors());

// Routes publiques
app.route('/api/auth', authRoutes);

// Health check
app.get('/health', (c) => c.json({ status: 'ok' }));

// Routes protégées
app.use('/api/admin/*', authMiddleware);
app.route('/api/admin', adminRoutes);

app.use('/api/gerant/*', authMiddleware);
app.route('/api/gerant', gerantRoutes);

app.use('/api/membre/*', authMiddleware);
app.route('/api/membre', membreRoutes);

const port = process.env.PORT || 3000;

export default app;
