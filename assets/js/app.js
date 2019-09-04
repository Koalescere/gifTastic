//alert("we're linked");    
    var motoMachines = ["engine", "lamborghini", "isle-of-man-racing", "superyachts", "astonmartin", "concept-motorcycles", "rallydakar", "driving-animals", "baja-racing"];

    // converts array assignment to variable motomachines, into buttons
    function createButtons() {
      $("#moto-container").empty();
      for (var i=0; i < motoMachines.length; i++) {
        var a = $("<button>");
        a.addClass("moto");
        a.attr("data-type", motoMachines[i]);
        a.text(motoMachines[i]);
        $("#moto-container").append(a);
      } 
    //listeningEvent();   
    }
    // field entry on form is converted into a buttom
    $("#add-moto").on("click", function(event){
        event.preventDefault();
        var motoadd = $("#newmoto").eq(0).val().trim();
        motoMachines.push(motoadd);
        console.log(motoMachines);
        createButtons();
        listeningEvent(); 
        //return false;
    })

    createButtons();
    listeningEvent();
    
    function listeningEvent(){
          //listening event to call giphy with "button.moto"
          $("button.moto").on("click", function(event) {
              var type = $(this).data("type");
              console.log(type);
              var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=QZ2LOfJhGjcBK66FkyDBULoGD4CFu8Wp&limit=5";
              $.ajax({
                  url:  queryURL,
                  method:  "GET"
              })
              .then(function(response){
                  console.log(queryURL);
                  //console.log(response);
            
              var results= response.data;
              //defining giphy image state to variable
              for (var i=0; i<results.length;i++) {
                  var motoDiv = $("<div>");
                  var p = $("<p>").text("Rating: " + results[i].rating);
                  var animated= results[i].images.original.url;
                  var still = results[i].images.original_still.url;
                  var motoImage = $("<img>");
                  motoImage.attr("src", still);
                  motoImage.attr("data-still", still);
                  motoImage.attr("data-animated", animated);
                  motoImage.attr("data-state","still");
                  motoImage.addClass("toggleGif");
                  motoDiv.append(p);
                  motoDiv.append(motoImage);
                  $("#gifs-appear-here").prepend(motoDiv);
              };    
            //});
            //toggle between still and animated  
            $("img.toggleGif").on("click", function(event) {
              var state = $(this).attr("data-state");
              if (state === "still") {
                $(this).attr("src", $(this).data("animated"));
                $(this).attr("data-state", "animated");
              } else {
                $(this).attr("src", $(this).data("still"));
                $(this).attr("data-state", "still");
              }
              //console.log (state);       
              //alert ("click works");

              });       
            
    });
  })
}
