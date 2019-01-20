$(function() {

    var POLLLING_INVERVAL_TIME_IN_MILLIS = 5000;//5.0s
    (function polling() {
        getseatUpdate();
        window.setTimeout(polling, POLLLING_INVERVAL_TIME_IN_MILLIS);
    }());



function getseatUpdate() {
    var changeStockEntry = function(originalValue) {
        for( var i =1 ; i<7;i++){
            var str =  i-1
            var valElem = $('#' + i);

            console.log(originalValue[1].usr)
            if(originalValue[str].usr== null) {
                
                if(i == 1){
                    var style ={
                        position:"absolute",
                        top:"185px",
                        left:"515px",
                        size :"7"
                    }
                }
                else if(i ==2){
                    var style ={
                        position:"absolute",
                        top:"185px",
                        left:"757px",
                        size :"7"
                    }
                }
                else if(i ==3){
                    var style ={
                        position:"absolute",
                        top:"185px",
                        left:"998px",
                        size :"7" 
                    }
                }
                else if(i ==4){
                    var style ={
                        position:"absolute",
                        top:"545px",
                        left:"518px",
                        size :"7"
                    }
                }

                else if(i ==5){
                    var style ={
                        position:"absolute",
                        top:"545px",
                        left:"757px",
                        size :"7"
                    }
                }
                else if(i ==6){
                    var style ={
                        position:"absolute",
                        top:"545px",
                        left:"998px",
                        size :"7" 
                    }
                }

                valElem.addClass('label label-default').css(style);
                valElem.css('font-size','36px');
                valElem.html('空席')
                console.log("空席")

            } else {
                var name = originalValue[str].usr
                if(i == 1){
                    var style ={
                        position:"absolute",
                        top:"185px",
                        left:"515px",
                        size :"7"
                    }
                }
                else if(i ==2){
                    var style ={
                        position:"absolute",
                        top:"185px",
                        left:"757px",
                        size :"7"
                    }
                }
                else if(i ==3){
                    var style ={
                        position:"absolute",
                        top:"185px",
                        left:"998px",
                        size :"7" 
                    }
                }
                else if(i ==4){
                    var style ={
                        position:"absolute",
                        top:"545px",
                        left:"518px",
                        size :"7"
                    }
                }

                else if(i ==5){
                    var style ={
                        position:"absolute",
                        top:"545px",
                        left:"757px",
                        size :"7"
                    }
                }
                else if(i ==6){
                    var style ={
                        position:"absolute",
                        top:"545px",
                        left:"998px",
                        size :"7" 
                    }
                }

                
                valElem.addClass('label label-default').css(style);
                valElem.css('font-size','24px');
                
                
            }
        }
    
}
var stocks_usrid = [{seatid: 1,usr:null},
    {seatid: 2,usr:null},
    {seatid: 3,usr:null},
    {seatid: 4,usr:null},
    {seatid: 5,usr:null},
    {seatid: 6,usr:null},
];

    $.ajax({
    type : "GET",
    url : "usrupdate",
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