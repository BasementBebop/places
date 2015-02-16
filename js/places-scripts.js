$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedPlaceName = $("input#new-place-name").val();
    var inputtedLocation = $("input#new-location").val();
    var inputtedHighlight = $("input#new-highlight").val();
    var newPlace = { placeName: inputtedPlaceName, locationName: inputtedLocation,
                     highlight: inputtedHighlight };

    $("ul#places").append("<li><span class='place'>" + newPlace.placeName + "</span></li>");

    $("input#new-place-name").val("");
    $("input#new-location").val("");
    $("input#new-highlight").val("");

    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h3").text(newPlace.placeName);
      $(".location-name").text(newPlace.locationName);
      $(".highlight").text(newPlace.highlight);

    });

  });
});
