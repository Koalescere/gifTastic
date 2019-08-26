//alert("we're linked");
    var motoMachines = ["engine", "isle of man racing", "superyachts", "aston martin", "supercar", "dakar moto", "baja racing"];

    // takes motomachines assignment, and convert into buttons
    function createButtons() {

        $("#moto-container").empty();

        for (var i=0; i < motoMachines.length; i++) {
          var a = $("<button>");
          a.addClass("moto");
          a.attr("data-name", motoMachines[i]);
          a.text(motoMachines[i]);
          $("#moto-container").append(a);
        }
    }
    //createButtons(); check that buttons are made


    $("#add-moto").on("click", function(event){
        event.preventDefault();
        var moto = $("#newmoto").val().trim();
        motoMachines.push(moto);
        createButtons();
    });
    createButtons();

    $("button").on("click", function() {
        var motoDisplay = $this.attr("data");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + motoDisplay + "&api_key=QZ2LOfJhGjcBK66FkyDBULoGD4CFu8Wp&limit=5";
    
        $.ajax({
            url:  queryURL,
            method:  "GET"
        })
        .then(function(response){
            console.log(queryURL);
            console.log(response);
        })
    })    

