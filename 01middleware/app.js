const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser, urlencoded({extended: false}));

// app.use();

app.use('/add-product', (req, res, next) => {
    // 응답보내줄수있지롱
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>');
});

app.use('/product',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
    //자동으로 /경로로 리다이렉트 된다. 
});

app.use('/', (req, res, next) => {
    // 응답보내줄수있지롱
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);