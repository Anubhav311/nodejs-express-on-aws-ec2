const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Express Demo App, this is version 2.0</h1>')
})

app.get('/products', (req, res) => {
    res.send([
        {
            productId: '101',
            price: 100,
        },
        {
            productId: '102',
            price: 150
        }
    ])
})

app.listen(port, () => {
    console.log(`Demo app is listening to port: ${port}`);
})