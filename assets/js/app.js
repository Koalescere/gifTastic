//alert("we're linked");
    var motoMachines = ["engine", "isle of man racing", "superyachts", "aston martin", "supercar", "dakar moto", "baja racing"];

    // takes motomachines assignment, and convert into buttons
    function createButtons() {

        $("#moto-container").empty();

        for (var i=0; i < motoMachines.length; i++){
          var a = $("<button>");
          a.addClass("moto");
          a.attr("data-name", motoMachines[i]);
          a.text(motoMachines[i]);
          $("#moto-container").append(a);
        }
    }
    //createButtons(); check that buttons are made


    $("add-moto").on("click", function(event){
        event.preventDefault();
        var newmoto = $("moto-input").val().trim();
        motoMachines.push(newmoto);
        createButtons();
    });
    createButtons();
    console.log(event);


    
 