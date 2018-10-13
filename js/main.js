$(document).ready(function() {
  "use strict";
  let ajaxResult = "";
  let counter = 0;
  //API call
  let URL =
    "https://pixabay.com/api/?key=6746448-134d21a799f0124eb887bf023&q=dogs&per_page=200&image_type=photos";
  $.getJSON(URL, function(xyz) {
    if (xyz.hasOwnProperty("hits")) {
      ajaxResult = xyz["hits"];
    }
    // Displays a default image once on startup page load
    $("#message").html(`
                  <div class="col-md-6">
                      <img class="card-img-top imgStyle" data-toggle="tooltip" data-placement="top" title="${
                        ajaxResult[counter].tags
                      }" 
                      src="${ajaxResult[counter].webformatURL}">
                  </div>
                  <div class="col-md-6 text-center mt-5">
                      <p><strong>Image Views:  </strong>   ${
                        ajaxResult[counter].views
                      }</p>
                      <p><strong> Favourites:  </strong> ${
                        ajaxResult[counter].favorites
                      }</p>
                      <p><strong>Likes:  </strong> ${
                        ajaxResult[counter].likes
                      }</p>
                      <p><a href="${
                        ajaxResult[counter].pageURL
                      }" target="_blank">Click for more info </a></p>
                  </div>
          `);
  });

  //CLICK FUCNTION TO ALLOW USER TO GET MORE PICTURES OF DOGS AT RANDOM
  $("#nextImage").on("click", function() {
    counter++;
    if (counter <= 199) {
      $("#message").html(`
                  <div class="col-md-6">
                      <img class="card-img-top" data-toggle="tooltip" data-placement="top" title="${
                        ajaxResult[counter].tags
                      }"
                       src="${ajaxResult[counter].webformatURL}">
                  </div>
                  <div class="col-md-6 text-center mt-5">
                      <p><strong>Image Views:  </strong>  ${
                        ajaxResult[counter].views
                      }</p>
                      <p><strong> Favourites:  </strong> ${
                        ajaxResult[counter].favorites
                      }</p>
                      <p><strong>Likes:  </strong>  ${
                        ajaxResult[counter].likes
                      }</p>
                      <p><a href="${
                        ajaxResult[counter].pageURL
                      }" target="_blank">Click for more info </a></p>
                  </div>
              `);
    } else {
      // reset counter once the default per_page count is exhausted.
      counter = 0;
      $("#message").html(`
                  <div class="col-md-6 text-center mt-5">
                      <img class=" card-img-top" data-toggle="tooltip" data-placement="top" title="${
                        ajaxResult[counter].tags
                      }"
                       src="${ajaxResult[counter].webformatURL}">
                  </div>
                  <div class="col-md-6">
                      <p><strong>Image Views:  </strong> ${
                        ajaxResult[counter].views
                      }</p>
                      <p><strong> Favourites:  </strong> ${
                        ajaxResult[counter].favorites
                      }</p>
                      <p><strong>Likes:  </strong> ${
                        ajaxResult[counter].views
                      }</p>
                      <p>See full description <a href="${
                        ajaxResult[counter].pageURL
                      }" target="_blank">here</a></p>
                  </div>
              `);
    }
  });
});
