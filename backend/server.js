const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const CalBisection = require('./calculate/bisection');
const CalFalsePosition = require('./calculate/calfalseposition');

const app = express();

app.use(bodyparser.json());
app.use(cors());

app.listen('1111', (req,res)=>{
    console.log('SERVER RUN!');
}) //.listen เป็นการกำหนดให้ทำงานที่ path ไหนเช่นเรากำหนดเป็น '1234' ก็จะทำที่ path 1234 => localhost/1234 แบบนี้

app.post('/bisection', (req,res)=>{
    const { xl,xr, equation } = req.body;
    const result = CalBisection( xl, xr, equation )
    res.json(result);
})

app.post('/calfalseposition', (req,res)=>{
    const{ xl ,xr ,equation} = req.body;
    let result = CalFalsePosition( xl, xr ,equation)
    res.json(result);
})