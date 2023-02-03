const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const quizRoute = require('./router/quiz');
const jobsheetRoute = require('./router/jobsheet')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req, res)=>{
    res.send('hello')
});

app.use('/api/quizzes', quizRoute);
app.use('/api/jobsheet', jobsheetRoute);
//PUNYA DARIK
app.listen(port, ()=> console.log(`TENANG AMANNNN  http://localhost:${port}!`));