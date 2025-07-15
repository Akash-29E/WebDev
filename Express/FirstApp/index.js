const express = require("express");
const app = express();
// console.dir(app);

// app.use((req,res,next)=> {
//     console.log('WE GOT A NEW REQUEST!');
//     // console.dir(req);
//     res.send({color:'red'})
// })
app.get('/cats', (req,res)=>{
    console.log('CAT REQUEST!');
    res.send('MEOW')
})

app.post('/cats', (req,res)=>{
    console.log('CAT REQUEST! for post');
    res.send('MEOW for POST')
})
app.listen(3000, () => {
    console.log('Listening to port 3000');
})

app.get('/search', (req,res)=>{
    const {q, color} = req.query;
    res.send(`<h1>Response for Search query ${q} ${color ? ` and color ${color}`:''}</h1>`)
})

app.get('/r/:subreddit/:postID', (req,res)=>{
    const {subreddit, postID} = req.params;
    console.log(`SUBREDDIT REQUEST for ${subreddit}!`)
    res.send(`<h1>Viewing Post ID ${postID} on subreddit ${subreddit} </h1>`)
})

app.get('/:e', (req,res)=>{
    console.log('DONT KNOW STATE REQ')
    res.send("I DON'T KNOW THAT ROUTE")
})