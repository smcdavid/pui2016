$(document).ready(function(){

    var taskItem = "";
    
    $("#add").click(function(){
       taskItem = prompt('Task Name?');
        
        $("li:last-child").before('<li><input class="complete" type="checkbox"><div class="responsibility">All</div>' + taskItem + '<img class="trash" src="images/trash.png" alt="trash icon"></li>');
        
        createListeners();
        
    });
    createListeners();
        
});

function createListeners(){
    
        $(".trash").off("click");
    
        $(".trash").on("click", function(){
        $(this).parent().fadeOut();
        });
        
        $(".complete").off("click");
        
        $(".complete").on("click",function(){
        $(this).parent().toggleClass('stroked');
        
        });
        
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
    

    