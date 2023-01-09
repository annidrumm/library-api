import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port: number = 401;

app.get('/', (req: Request, res: Response) => {
    res.send('Hey little busy bee');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
