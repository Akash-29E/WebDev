const express = require('express');
const app = express();
const path = require('path');
const { v4:uuid } = require('uuid');
const methodOverride = require('method-override');

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride('_method'))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views') )
app.use(express.static(path.join(__dirname, 'public')))

let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'That is hilarious!'
    },
    {
        id:uuid(),
        username: 'Grisha',
        comment: 'But why!'
    },
    {
        id:uuid(),
        username: 'Kenny',
        comment: 'You just wait'
    },
    {
        id:uuid(),
        username: 'Tenn',
        comment: 'Wasnt that obvious?'
    },
    {
        id:uuid(),
        username: 'Todd',
        comment: 'You bet!!'
    },
    {
        id:uuid(),
        username: 'Todd',
        comment: 'I laughed a lot on this haha!'
    },
]

app.get('/comments', (req, res) => {
    res.render('comments/index', {comments})
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new', {comments})
})

app.get('/comments/:id', (req,res) =>{
    const {id} = req.params;
    const comment = comments.find(c => c.id == id)
    res.render('comments/show', {comment})
})

app.get('/comments/:id/edit', (req,res) =>{
    const {id} = req.params;
    const comment = comments.find(c => c.id == id)
    res.render('comments/edit', {comment})
})


app.patch('/comments/:id', (req,res)=>{
    const {id} = req.params;
    const currComment = comments.find(c => c.id == id);
    const newComment = req.body.comment;
    currComment.comment = newComment;
    res.redirect('/comments');
})

app.delete('/comments/:id', (req,res) =>{
    const {id} = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments')
})

app.post('/comments', (req,res) =>{
    const {username, comment} = req.body;
    comments.push({username, comment,id:uuid()})
    res.redirect('/comments')
})
app.listen(3000, () => {
    console.log('ON PORT 3000!')
})