const express = require('express');
const app = express();
const port = process.env.PORT || 8080;  //replacement port if not previously set in cmd ==export PORT = 8000



const users = [
    { name: 'Andy', age: 19},
    { name: 'andy', age: 19},
    { name: 'jasmine', age: 19}
]


const posts = [
    { title: 'cat'},
    { title: 'pig'},
    { title: 'rabbit'}

]


app.get('/', function(req, res){
    res.send({
        msg: 'hello world',
        user: { }
    });
});

app.post('/', (req,res) => {
    const user = req.body;
    users.push(user);
    res.status(200).send('Created user')

});

app.get('/users', (req, res) =>{
    res.status(200).send(users);
});

app.get('/posts', (req, res) =>{
    const { title } = req.query;
    if (title){
        const post = posts.find((post) => post.title == title);
        if (post) res.status(200).send(post); 
        else res.status(400).send('not found!!');
    }
    res.status(200).send(posts);
});

app.get('/users/:name', (req, res) =>{
    const { name } = req.params;
    const user = users.find((user) => user.name == name);
    if (user) res.status(200).send(user);
    else res.status(400).send('not found!!');
});


app.listen(port,() =>{
    console.log(`server running at http://127.0.0.1:${port}/`)
});