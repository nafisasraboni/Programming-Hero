import express from 'express';
const app=express();
const PORT = process.env.PORT || 5000;

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

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
