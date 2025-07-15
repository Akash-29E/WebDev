const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/tacos', (req, res) => {
    res.send('GET REQ on 3000')
})

app.post('/tacos', (req, res) => {
    const {name, type, item, count} = req.body;
    res.send(`POST REQ on 3000. You are ordering ${item}. Qty: ${count}`)
})

app.listen(3000, () => {
    console.log('ON PORT 3000!')
})