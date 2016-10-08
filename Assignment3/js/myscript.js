$(document).ready(function(){

    var taskItem = "";
    //this is for adding a new task to the list
    $("#add").click(function(){
       taskItem = prompt('Task Name?');
        
        //the last-child and before are used in order to place the newest item at the end but before the add
        //task button
        $("li:last-child").before('<li><input class="complete" type="checkbox"><div class="responsibility">All</div>' + taskItem + '<img class="trash" src="images/trash.png" alt="trash icon"></li>');
        
        createListeners();
        
    });
    
    createListeners();
});

//these can be used multiple times so they were put into a function
function createListeners(){
        
        //off's were added because the click events were stacking
        $(".trash").off("click");
        $(".trash").on("click", function(){
        $(this).parent().fadeOut();
        });
        
        $(".complete").off("click");
        $(".complete").on("click",function(){
        $(this).parent().toggleClass('stroked');
        
        });
        
        //this was added to be able to change who is responsible and assign color to select individuals.
        $(".responsibility").off("click");
        $(".responsibility").on("click", function(){
            person = prompt('Who is responsible?');
            $(this).text(person);
            if(person.toLowerCase() == "mom"){
                $(this).css("background", "blue");
            }else if(person.toLowerCase() == "dad"){
                $(this).css("background", "red");
            }else if(person.toLowerCase() == "all"){
                $(this).css("background", "black");
            }else{
                $(this).css("background", "purple");
            }
        });
        
}
    

    