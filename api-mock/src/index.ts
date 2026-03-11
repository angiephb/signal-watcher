import express, { Request, Response } from 'express';
import cors from 'cors';
import apiRoutes from './routes/api.routes';

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes);

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hola, el API MOCK funciona correctamente!' });
});

app.listen(PORT, () => {
  console.log(`Servidor mock corriendo en http://localhost:${PORT}`);
});
