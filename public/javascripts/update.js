$(function() {

    var POLLLING_INVERVAL_TIME_IN_MILLIS = 2000;//2.0s
    (function polling() {
        getseatUpdate();
        window.setTimeout(polling, POLLLING_INVERVAL_TIME_IN_MILLIS);
    }());



function getseatUpdate() {
    var changeStockEntry = function(originalValue) {
        for( var i =1 ; i<7;i++){
            var str = "" + i
            var valElem = $('#' + i);
            if(originalValue[str]== 0) {
                
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
                valElem.removeClass('label-danger');

            } else if (originalValue[str] == 1) {
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

                valElem.addClass('label label-danger');
                valElem.css('font-size','36px');
                valElem.removeClass('label-default');
                valElem.removeClass('label-success');
            }
            else if (originalValue[str] == 2) {
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
                valElem.addClass('label label-success');
                
                valElem.css('font-size','36px');
                valElem.removeClass('label-danger');
                
            }
        }
    
}
    var stocks = 
            {"1": 0,
            "2": 0,
            "3": 0,
            "4": 0,
            "5": 0,
            "6": 0,
            
    }
    $.ajax({
    type : "GET",
    url : "seatUpdate",
    content : "application/json",
    dataType : "json",
}).done(function(data) {
    
    var stocksData = (data);

    
    for(var symbol in stocksData) {
        console.log(stocksData[symbol])
                changeStockEntry(stocksData[symbol]);
                stocks[symbol] = stocksData[symbol];
                
                }
}).fail(function(jqXHR, textStatus) {
    $("dd").text("error occured");
    });
}
});