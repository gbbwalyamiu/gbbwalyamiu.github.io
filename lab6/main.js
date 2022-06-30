/*
  Find drawing on attached image.
*/


/*
question 2 solution below
*/
function printNumber(from,to){
    function stopClock(){
         clearInterval(intervalID);
    }
    function printNow()
    {
       
        if (num<=to){
            console.log(num);
            num = num + 1;
        }
        else
        {
            stopClock()
        }
    }
    let num = from;
    let upper = to;
    var intervalID = setInterval(printNow,1000);
}
var test = printNumber(2,5);

/*
Question 3: the execution will move to run the code in the long calculation. it will not show the timer execution. by the time the long computation
is complete, the time interval will have elapsed. nothing will be displayed
*/