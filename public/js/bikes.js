$(document).ready(function () {
    function getBikes() {
        $("#bikeBtn").on("click", function(data) {
          $.get("/api/bikes")
            .then(function (data) {
            
            console.log(data);
            
            //for each bike that the server sends us back
            for (var i = 0; i < data.length; i++) {
              var listingBody = $("<div>");
              listingBody.addClass("uk-card");
              listingBody.attr("id", "listing" + i);
              $(".listingBody").append(listingBody);
    
              //add listing data to card we just placed on the page
              // make the name an h2,
              $(".listingBody" + i).append("<h2>" + data[i].item_name + "</h2>");
              // the price an h3,
              $(".listingBody" + i).append("<h3>" + data[i].item_price + "</h3>");
              // the category an h3,
              $(".listingBody" + i).append("<h3>" + data[i].item_category + "</h3>");
              // and the createdAt an h3.
              $(".listingBody" + i).append("<h3>" + data[i].createdAt + "</h3>");
            }
          })
          
          //test to see button is live
          console.log("button was clicked!");
         
        });
      }
getBikes();
});