$(function() {

    var POLLLING_INVERVAL_TIME_IN_MILLIS = 2000;//2.0s
    (function polling() {
        getseatUpdate();
        window.setTimeout(polling, POLLLING_INVERVAL_TIME_IN_MILLIS);
    }());



function getseatUpdate() {
    var changeStockEntry = function(originalValue) {
        for( var i =1 ; i<7;i++){
            var str =  i-1
            var valElem = $('#' + i);

            console.log(originalValue)
            
            
            if(originalValue[str].state == "0") {
                
                if(i == 1){
                    var style ={
                        position:"absolute",
                        top:"230px",
                        left:"540px",
                        size :"7"
                    }
                }
                else if(i ==2){
                    var style ={
                        position:"absolute",
                        top:"230px",
                        left:"830px",
                        size :"7"
                    }
                }
                else if(i ==3){
                    var style ={
                        position:"absolute",
                        top:"230px",
                        left:"1110px",
                        size :"7" 
                    }
                }
                else if(i ==4){
                    var style ={
                        position:"absolute",
                        top:"630px",
                        left:"540px",
                        size :"7"
                    }
                }

                else if(i ==5){
                    var style ={
                        position:"absolute",
                        top:"630px",
                        left:"830px",
                        size :"7"
                    }
                }
                else if(i ==6){
                    var style ={
                        position:"absolute",
                        top:"630px",
                        left:"1110px",
                        size :"7" 
                    }
                }

                valElem.addClass('label label-default').css(style);
                valElem.css('font-size','36px');
                valElem.removeClass('label-danger');
                valElem.removeClass('label-success');
                valElem.html(originalValue[str].usr)
                

            } 
            else if(originalValue[str].state=="1") {
                var name = originalValue[str].usr
                if(i == 1){
                    var style ={
                        position:"absolute",
                        top:"230px",
                        left:"540px",
                        size :"7"
                    }
                }
                else if(i ==2){
                    var style ={
                        position:"absolute",
                        top:"230px",
                        left:"830px",
                        size :"7"
                    }
                }
                else if(i ==3){
                    var style ={
                        position:"absolute",
                        top:"230px",
                        left:"1110px",
                        size :"7" 
                    }
                }
                else if(i ==4){
                    var style ={
                        position:"absolute",
                        top:"630px",
                        left:"540px",
                        size :"7"
                    }
                }

                else if(i ==5){
                    var style ={
                        position:"absolute",
                        top:"630px",
                        left:"830px",
                        size :"7"
                    }
                }
                else if(i ==6){
                    var style ={
                        position:"absolute",
                        top:"630px",
                        left:"1110px",
                        size :"7" 
                    }
                }

                
                valElem.addClass('label label-danger').css(style);
                valElem.css('font-size','36px');
                valElem.html(originalValue[str].usr)
                
                
            }
            else if(originalValue[str].state== "2") {
                var name = originalValue[str].usr
                if(i == 1){
                    var style ={
                        position:"absolute",
                        top:"230px",
                        left:"540px",
                        size :"7"
                    }
                }
                else if(i ==2){
                    var style ={
                        position:"absolute",
                        top:"230px",
                        left:"830px",
                        size :"7"
                    }
                }
                else if(i ==3){
                    var style ={
                        position:"absolute",
                        top:"230px",
                        left:"1110px",
                        size :"7" 
                    }
                }
                else if(i ==4){
                    var style ={
                        position:"absolute",
                        top:"630px",
                        left:"540px",
                        size :"7"
                    }
                }

                else if(i ==5){
                    var style ={
                        position:"absolute",
                        top:"630px",
                        left:"830px",
                        size :"7"
                    }
                }
                else if(i ==6){
                    var style ={
                        position:"absolute",
                        top:"630px",
                        left:"1110px",
                        size :"7" 
                    }
                }
                
                valElem.addClass('label label-success').css(style);
                valElem.css('font-size','36px');
                valElem.removeClass('label-default');
                valElem.html(originalValue[str].usr)
                
                
            }
        
        }
    
}
var stocks_usrid = [{seatid: 1,usr:"空席",state:0},
                    {seatid: 2,usr:"空席",state:0},
                    {seatid: 3,usr:"空席",state:0},
                    {seatid: 4,usr:"空席",state:0},
                    {seatid: 5,usr:"空席",state:0},
                    {seatid: 6,usr:"空席",state:0},
];

    $.ajax({
    type : "GET",
    url : "usrUpdate",
    content : "application/json",
    dataType : "json",
}).done(function(data) {
    
    var stocksData = (data);

    
    for(var symbol in stocksData) {
        console.log(stocksData[symbol])
                changeStockEntry(stocksData[symbol]);
                stocks_usrid[symbol] = stocksData[symbol];
                
                }
}).fail(function(jqXHR, textStatus) {
    $("dd").text("error occured");
    });
}



});