
$(function() {
    $(".change-devour").on("click", function(event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");

        let newDevourState = {
            devoured: newDevour
        };

        //Send the PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
                console.log("changed devoured to", newDevour);
                //Reload the page to get updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("new").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
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


    $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");
    
        // Send the DELETE request.
        $.ajax("/api/burger/" + id, {
          type: "DELETE"
        }).then(
          function() {
            console.log("deleted burger", id);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    });





