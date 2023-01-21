import express from 'express';
let articlesInfo = [
    {
    name:'learn-react',
    upvotes:0,
    Comments:[],
    },
    {
    name:'learn-node',
    upvotes:0,
    Comments:[],
    },
    {
    name:'mongodb',
    upvotes:0,
    Comments:[],

    }]
const PORT = 4500;

const app = express();

app.use(express.json());

app.get('/:name',(req,res)=>{
    const { name }= req.params;
    res.send(`Welcome to ${name} website!!`)
    console.log(name)
})

app.post('/api/articles/:name/comments',(req,res)=>{
    const {name}=req.params;
    const {postedBy, text}= req.body;
    const article=articlesInfo.find(a=>a.name === name);
    if(article)
    {   
        article.Comments.push({postedBy,text})
        res.send(article.Comments);
        //res.send(`Hello ${req.body.name}!`);
    }
    else{
        res.send('That aarticle doesn\'t exist');
    }
});

app.put('/api/articles/:name/upvote',(req,res)=>{
    const {name}= req.params;
    const article=articlesInfo.find(a => a.name === name);
    if(article)
    {
        article.upvotes += 1;
        res.send(`The ${name} article now has ${article.upvotes} upvotes`)
    }
    else
    {
        res.send('That article doesn\'t exist');
    }
    
});

app.listen(4500,()=>{
    console.log("server is started is port",PORT)
})