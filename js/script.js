$(document).ready(function () {
  var petalImages = ["petal1.png", "petal2.png", "petal3.png", "petal4.png"];

  var scatterClasses = [
    "scatter1",
    "scatter2",
    "scatter3",
    "scatter4",
    "scatter5",
    "scatter6",
    "scatter7",
    "scatter8",
    "scatter9",
    "scatter10",
  ];
  var allAnimClasses = scatterClasses.join(" ");

  function runScatter(petalObject) {
    var $petal = $(petalObject);

    var randomClass =
      scatterClasses[Math.floor(Math.random() * scatterClasses.length)];

    setTimeout(function () {
      $petal.addClass(randomClass);
    }, 10);
  }

  $("#main-flower").on("click", function () {
    for (var i = 0; i < 3; i++) {
      var randomImg =
        petalImages[Math.floor(Math.random() * petalImages.length)];
      var $newPetal = $('<img class="petal">');
      $newPetal.attr("src", randomImg);

      $("#petal-container").append($newPetal);
      $newPetal.show();

      $newPetal.on("mouseenter", function () {
        runScatter(this);
      });

      $newPetal.on("click", function () {
        runScatter(this);
      });
      runScatter($newPetal);
    }
  });
});
