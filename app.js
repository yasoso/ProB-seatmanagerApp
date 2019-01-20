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

//seatID
var stocks = {"1": 0,
              "2": 0,
              "3": 0,
              "4": 0,
              "5": 0,
              "6": 0,
              
}
//usrid
var stocks_usrid = [{seatid: 1,usr:null},
                    {seatid: 2,usr:null},
                    {seatid: 3,usr:null},
                    {seatid: 4,usr:null},
                    {seatid: 5,usr:null},
                    {seatid: 6,usr:null},
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

app.get('/seatUpdate', function(req, res){
  console.log(stocks);
  res.writeHead(200, {"Content-Type": "application/json"});
  res.end(JSON.stringify({"stocks":stocks}));

});

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
    stocks["1"] = req.body.state
  }
  else if(req.body.seatid==2){
    stocks["2"] = req.body.state
  }
  else if(req.body.seatid==3){
    stocks["3"] = req.body.state
  }
  else if(req.body.seatid==4){
    stocks["4"] = req.body.state
  }
  else if(req.body.seatid==5){
    stocks["5"] = req.body.state
  }
  else if(req.body.seatid==6){
    stocks["6"] = req.body.state
  }
  res.send('POST request to the homepage');
});

//配席システム
app.post('/usr', function(req, res) {
  // リクエストボディを出力
  console.log(req.body);
  if(req.body.seatid==1){
    stocks_usrid[0].usr = req.body.usrid
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
