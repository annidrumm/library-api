import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port: number = 4001;

const books = [
    {
        id: 1,
        title: 'The Awakening',
        author: 1,
    },
    {
        id: 2,
        title: 'City of Glass',
        author: 2,
    },
];
const authors = [
    {
        id: 1,
        name: 'Kate Chopin',
        books: [1],
    },
    {
        id: 2,
        name: 'Paul Auster',
        books: [2],
    },
];

app.get('/books', (req: Request, res: Response) => {
    res.json(books)
});

app.get('/authors', (req: Request, res: Response) => {
    res.json(authors)
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
