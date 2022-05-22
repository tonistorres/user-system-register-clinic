import express from 'express';
import UserRoutes from './routes/user.system.routes';

const app = express();
app.use(express.json());
app.use('/users', UserRoutes);

export default app;