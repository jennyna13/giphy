//API: KgXj6MbTpULzjBt1ooKPO5dWtWhLJcfG
$(document).ready(function(){
    var animalList = ["cat","dog","bat","sloth","monkey"];
    function createButton(){
        $("#newButtons").empty();
        for (var i = 0; i < animalList.length; i++) {
            var button = $(" " + "<button type='button' class='animal_btn btn btn-primary btn-sm'>"+animalList[i]+"</button>" + " ");
                button.attr("data-name", animalList[i]);
         $("#newButtons").append(button);
        };
    }
    $("#submit").on("click",function(){
        event.preventDefault();
        var userInput = $("#animal").val().trim();
        animalList.push(userInput);
        createButton();
        return false;
    });
    createButton();
    $(document).on('click', '.animal_btn', newGif);
    function newGif(){
        
        var gif = $(this).attr("data-name");
        animalList.push(animal);
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif +"&api_key=KgXj6MbTpULzjBt1ooKPO5dWtWhLJcfG&limit=10";
        $(".gifs-appear").empty();
        console.log(gif);
        animalList.push(animal);
    $.ajax({
        url:queryURL,
        method:"GET"
    }).done(function(response){
        var results = response.data;
        console.log(response);
        for (var i=0; i<results.length; i++){
            var gifDiv = $("<div>");
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: "+ rating);
            var animalImage = $("<img>");
            var imageUrl = results[i].images.fixed_height.url;
            var imageStill = results[i].images.fixed_height_still.url;
            animalImage.attr("src",imageStill);
            animalImage.attr("data-still",imageStill);
            animalImage.attr("data-animate",imageUrl);
            animalImage.attr("data-state","still");
            animalImage.attr("alt", "gif")
            $(gifDiv).append(p);
            $(gifDiv).append(animalImage);
            $(".gifs-appear").prepend(gifDiv);
            
            checkState();
        }
    })
    };
    createButton();
    function checkState(){
        $("img").on("click",function(){
        var state = $(this).attr("data-state");
        if(state == "still"){
            $(this).attr("src", $(this).data("animate"));
            $(this).attr("data-state", "animate");
        }else {
            $(this).attr("src",$(this).data("still"));
            $(this).attr("data-sate", "still");
        }
        })
    }
    });