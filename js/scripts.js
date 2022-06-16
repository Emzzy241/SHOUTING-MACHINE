$(document).ready( function(){
    $("#formOne").submit( function( event){
        event.preventDefault();
        const person1 = $("#person1").val();
        const person2 = $("#person2").val();
        const animal = $("#animal").val();
        const exclamation = $("#exclamation").val();
        const verb = $("#verb").val();
        const noun = $("#noun").val();

        $(".person1").append(person1);
        $(".person2").append(person2);
        $(".animal").append(animal);
        $(".exclamation").append(exclamation);
        $(".verb").append(verb);
        $(".noun").append(noun);
    
    $("#story").show();
    }); 
});