(function() {
    //create a function by taking my screen,buttons,clear,equal and storing it inside a variable
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear= document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    /* taking my buttons varaible,i have so many buttons 
        so to find out which button was pressed i use
        foreach then i create a function so i add event
        listener to find out the button that was pressed
        and i give it and event name "click" and i set 
        fuction that the function will only work if the event
        is active.i set a variable value and i take my values
        using e.target.datasetnum.i take my screen variable
        to put the values in my screen and to add those values 
        by doing "screen.value += value;".
    */

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            screen.value += value;   
        })         
        
    });

    /* taking my equal variable, so i add eventlistener to make 
        the equal button working if anyone clicks and add event 
        name "click" and i set a function ("e" means the function only works if the event is active).
        i set a if statement that if my screen is having a value of empty and u press the equal button
        it should not show anything.so i set an else statement and i use eval to evaluates what is on
        my screen value. 
    */
    
    equal.addEventListener('click', function(e){
        if (screen.value === '') {
            screen.value = "";  
        }else{
            let answer = eval(screen.value);
            screen.value =answer;
        }
    })

    /* taking my clear variable,i add eventlistener and set the name to be click,i pass
    a function and i set the screen value to be empty.
    */
   
    clear.addEventListener('click', function(e){
        screen.value = "";
    })

    

})();