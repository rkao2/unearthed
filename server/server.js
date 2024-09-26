import express from 'express';
import dotenv from 'dotenv'
dotenv.config({ path: '../.env' })
import giftsRouter from './routes/gifts.js';


const app = express();

app.use('/public', express.static('./public'));
app.use('/scripts', express.static('./public/scripts'));

app.get('/', (req, res) => {
    res
      .status(200)
      .send('<h1 style = "text-align: center; margin-top: 50px;">Unearthed API</h1>');
});

app.use('/gifts', giftsRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});


