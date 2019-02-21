var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// post
var bodyParser = require('body-parser')
var app = express();


//usrid
var stocks_usrid = [{seatid: 1,usr:"空席",state:0},
                    {seatid: 2,usr:"空席",state:0},
                    {seatid: 3,usr:"空席",state:0},
                    {seatid: 4,usr:"空席",state:0},
                    {seatid: 5,usr:"空席",state:0},
                    {seatid: 6,usr:"空席",state:0},
];

    
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// 静的ファイルは無条件に公開
app.use('/public', express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// app.get('/seatUpdate', function(req, res){
//   console.log(stocks);
//   res.writeHead(200, {"Content-Type": "application/json"});
//   res.end(JSON.stringify({"stocks":stocks}));

// });

app.get('/usrUpdate', function(req, res){
  console.log(stocks_usrid);
  res.writeHead(200, {"Content-Type": "application/json"});
  res.end(JSON.stringify({"stocks_usrid":stocks_usrid}));

});


app.post('/state', function(req, res) {
  // リクエストボディを出力
  console.log(req.body);
  
  // パラメータ名、nameを出力
  //seatid:座席番号
  res.set('Content-Type', 'application/json');
  console.log(req.body.seatid);
  console.log(req.body.state);
  if(req.body.seatid==1){
    stocks_usrid[0].state = req.body.state
  }
  else if(req.body.seatid==2){
    stocks_usrid[1].state = req.body.state
  }
  else if(req.body.seatid==3){
    stocks_usrid[2].state = req.body.state
  }
  else if(req.body.seatid==4){
    stocks_usrid[3].state = req.body.state
  }
  else if(req.body.seatid==5){
    stocks_usrid[4].state = req.body.state
    
  }
  else if(req.body.seatid==6){
    stocks_usrid[5].state = req.body.state
  }
  res.send('POST request to the homepage');
});

//配席システム
app.post('/usr', function(req, res) {
  // リクエストボディを出力
  console.log(req.body);
  if(req.body.seatid==1){
    stocks_usrid[0].usr = req.body.usrid
    stocks_usrid[0].state = req.body.state
  }
  else if(req.body.seatid==2){
    stocks_usrid[1].usr = req.body.usrid
    stocks_usrid[1].state = req.body.state
  }
  else if(req.body.seatid==3){
    stocks_usrid[2].usr = req.body.usrid
    stocks_usrid[2].state = req.body.state
  }
  else if(req.body.seatid==4){
    stocks_usrid[3].usr = req.body.usrid
    stocks_usrid[3].state = req.body.state
  }
  else if(req.body.seatid==5){
    stocks_usrid[4].usr = req.body.usrid
    stocks_usrid[4].state = req.body.state
  }
  else if(req.body.seatid==6){
    stocks_usrid[5].usr = req.body.usrid
    stocks_usrid[5].state = req.body.state
  }
  
  // パラメータ名、nameを出力
  //usrid:座席id
  res.set('Content-Type', 'application/json');
  console.log(req.body.seatid);
  console.log(req.body.usrid);

  res.send('POST request to the homepage');
});

function originIsAllowed(origin) {
  // put logic here to detect whether the specified origin is allowed.
  return true;
}


module.exports = app;
