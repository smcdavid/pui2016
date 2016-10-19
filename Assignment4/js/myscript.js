$(document).ready(function(){

    var taskItem = "";
    //this is for adding a new task to the list
    $("#add").click(function(){
       taskItem = prompt('Task Name?');
        
        //the last-child and before are used in order to place the newest item at the end but before the add
        //task button
        $("li:last-child").before('<li><input class="complete" type="checkbox"><div class="responsibility">All</div>' + taskItem + '<img class="trash" src="images/trash.png" alt="trash icon"></li>');
        
    });
    $("#addGroup").click(function(){
        taskItem = prompt('Group Name?');
        $("li:last-child").before('<li><a href="list.html"><img class="arrow" src="images/arrow.png" alt="right arrow">' + taskItem + '</a><img class="trash" src="images/trash.png" alt="trash icon"></li>');
        
    });
    createListeners();
});

//these can be used multiple times so they were put into a function
function createListeners(){
        
        $("ul").on("click",".trash", function(){
			var result = confirm("Are you sure you want to delete");
        	if(result){
				$(this).parent().fadeOut();
			}
        });
        
        $("ul").on("click", ".complete", function(){
        $(this).parent().toggleClass('stroked')
        
        });
        
        //this was added to be able to change who is responsible and assign color to select individuals.
        $("ul").on("click",".responsibility", function(){
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