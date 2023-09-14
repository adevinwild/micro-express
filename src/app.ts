import express from 'express';
import cors from 'cors';

(async () => {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());

    app.get('/', (_req, res) => {
        res.send('Hello World!');
    });

    app.listen(3000, () => {
        console.log('Server is listening on port 3000!');
    });
})();
