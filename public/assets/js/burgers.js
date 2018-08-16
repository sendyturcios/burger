
$(function() {
    $(".devour-burger").on("click", function(event) {
        var id = $(this).data("id");
        var eat = $(this).data("eat");

        let newDevourState = {
            devoured: eat
        };

        //Send the PUT request
        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
                console.log("changed devoured state");
                //Reload the page to get updated list
                location.reload();
            }
        );
    });

    $("#createBtn").on("click", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#addBurger").val().trim(),
            devoured: 0,
        };

       


        //Send POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");

                location.reload();
            }
        );
    });


 
    });






