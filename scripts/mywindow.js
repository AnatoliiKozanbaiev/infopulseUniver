function mywindow(sSelector){
    var w = this;
    w.init(sSelector);
    w.startBtn = w.find('.b-mywindow__start-countdown');
    w.stopBtn = w.find('.b-mywindow__stop-countdown');
    w.startTick = w.find('.b-mywindow__start-ticker');
    w.stopTick = w.find('.b-mywindow__stop-ticker');
    w.openWindow = w.find('.b-mywindow__open-window');
    w.closeWindow = w.find('.b-mywindow__close-window')
    w.timer = 0;
    w.WindowObjectReference;
    w.StrWindowFeatures = 'width=600,height=600,left=200,top=100';
    
    //logic
       
        
    var timeId = 0
    , timeId2 = 0
    , timeDelayed = 0
    , timeCounted = 0
    ;
    
    w.startTimer = function(){
        timeId = setTimeout(Timer, 2000);
        //alert(timeId);
    }
    
     w.stopTimer = function(){
        clearTimeout(timeId);
        alert('stop timer');
    }
     
     w.startCount = function(){
         timeId2 = setInterval(Count, 2000);
         //alert('gone: ' + w.timeId2 + 'seconds');
     }
     
     w.stopCount = function(){
        clearInterval(timeId2);
        timeCounted = 0;
        alert('stop counting')
     }
     
     function Timer(){
         timeDelayed = 2;
         alert(timeDelayed + ' seconds delay');
     }
     
     function Count(){
        timeCounted += 2;
        alert(timeCounted + ' seconds delay');
         if(timeCounted >= 6){
             clearInterval(timeId2);
             alert('Stop counting');
         }
    }
    
        w.windowFunc = function(){
            w.WindowObjectReference = window.open("http://www.dou.ua/", "blabla", w.StrWindowFeatures);
        }
    
        w.windowFunc2 = function (){
            w.WindowObjectReference.close();
        }
     
     
    

    //events
    w.startBtn.click(w.startTimer);
    w.stopBtn.click(w.stopTimer);
    w.startTick.click(w.startCount);
    w.stopTick.click(w.stopCount);
    w.openWindow.click(w.windowFunc);
    w.closeWindow.click(w.windowFunc2);
    
}

mywindow.prototype = new Component();