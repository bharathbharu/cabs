const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const mysql1 = require('mysql');

let conn = mysql.createConnection({
    host: 'localhost',
    user: 'TechVR',
    password: 'smiley',
    database:'vrCabs',
});

// var conn = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database:'job_portal'
// });

conn.connect(function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log('connected');
    }
});

app.get('/',function(req,res){
    conn.query("Select * from persons",function(error,rows,fields){
        if(!!error){
            console.log("error in the query"); 
        }
        else{
            console.log("executed in the query"); 
            res.json(rows);
            
        }
    });
});
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Routes 
const productRoutes = require('./apis/routes/product');
const ordersRoutes = require('./apis/routes/orders');
app.use('/products', productRoutes);
app.use('/orders', ordersRoutes);

// app.use((req, res,next)=>{
// res.status(200).json({
//     message:'It Works'
// });
// });

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;