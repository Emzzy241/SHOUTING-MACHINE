$(document).ready( function(){
    $("#formOne").submit( function( event){
        event.preventDefault();
        const person1 = $("#person1").val();
        

        $(".person1").append(person1.toUpperCase());
        
    
    $("#story").show();
    }); 
});