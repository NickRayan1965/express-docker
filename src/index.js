import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.get('/', (req, res) => {
    res.json('hola mundo');
});
app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));