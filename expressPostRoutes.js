const express = require('express'); 
const app = express(); 
const path = require('path')

app.use(express.urlencoded({ extended: true})); //used in order to post the results in node/postman
app.use(express.json()); 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); 

const comments = [
    {
        username: 'todd',
        comment: 'lol, that is so funny'
    },
    {
        username: 'skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        username: 'sk8erBoi',
        comment: 'plz delete your account, todd'
    },
    {
        username: 'onlysaywoof',
        comment: 'woof woof woof'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', {comments}); 
})

app.get('/comments/new', (req, res) => {
    res.send("comments/new")
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body; 
    comments.push({username, comment})
    res.send('it worked'); 
})

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
})

app.post('/tacos', (req, res) => {
    const {meat, qty} = req.body; //req.body contains key-value pairs of data submitted in the request body
    //req.body is undefined by default and is populated when you use body-parsing middleware such as:
    //express.json() or express.urlencoded(). 
    res.send(`here are your ${qty} ${meat} tacos`)
})

app.listen(3000, () => {
    console.log("on port 3000")
})


//express.urlencoded({extended: true}) si express.json() are used based on the request that we need. 
// urlencoded = url encoded requests 
// json = json based requests 

//urlenconded + json = parsing features

