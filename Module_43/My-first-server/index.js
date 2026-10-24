import express from 'express';
const app=express();
const PORT = process.env.PORT || 5000;

//server data create
const users=[
    {id:1,name:"John Doe",email:"john@example.com"},
    {id:2,name:"Jane Smith",email:"jane@example.com"},
    {id:3,name:"Bob Johnson",email:"bob@example.com"},
    {id:4,name:"Alice Williams",email:"alice@example.com"}
];

// api route create
app.get('/',(req,res)=>{
    res.send("Hello,world!!");
});

app.get('/about',(req,res)=>{
    res.send("About us!!")
});

app.get('/contact',(req,res)=>{
    res.send("Contact us.")
});

app.get('/services',(req,res)=>{
    res.send("Our services.")
});

app.get('/users',(req,res)=>{
    res.send(users);
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
