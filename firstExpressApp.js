const express = require("express"); 
const app = express(); 
// console.dir(app); 
// app.use((req, res) => {
//     console.log("We got a new request!")
//     res.send("hello, we got your request, this is your response"); 
// })

app.get('/', (req, res) =>{
    console.log('this is the homepage');
})

app.get('/r/:subreddit', (req, res) =>{
    const { subreddit } = req.params; 
    // console.log(req.params)
    // res.send("this is a subreddit"); 
    res.send(`<h1>Browsing the ${subreddit} path</h1>`)
})

app.get('/r/:subreddit/:postId/', (req, res) =>{
    const { subreddit, postId } = req.params; // de ce deconstructor aici? 
    // console.log(req.params)
    // res.send("this is a subreddit"); 
    res.send(`<h1>Viewing the postId ${postId} on the ${subreddit} path</h1>`)
})

app.post('/cats', (req,res) =>{
    res.send('post request to /cats. this is diferent than get.')
})

app.get('/cats', (req, res) => {
    res.send('meow'); 
})

app.get('/dogs', (req,res) => {
    res.send('woof'); 
})

app.get('/search', (req, res) => {
    const { q } = req.query; 
    if(!q) {
        res.send('nothing found if nothing searched'); 
    }
    res.send(`<h1>Search results for: ${q}`);
})

app.get('*', (req, res) => {
    res.send(`i don't know that route to that path`)
})


//=> add cats route = > saying meow
//=> add dogs route = > saying woof
//=> add home = > empty

         //port
app.listen(8080, ()=> {
    console.log('listening on port 3000');
})
 