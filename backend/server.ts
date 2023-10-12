import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT: number = Number(process.env.PORT) || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from the backend!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
