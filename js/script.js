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

    //여기서 클래스를 제거하게 되면서 스타일 값이 기본값으로 변화 -> 애니메이션이 첫 상태로 복귀하는 동작을 만듦
    //아마 애니메이션 재시작 안정화때문에 들어간 코드로 보임
    // $petal.removeClass(allAnimClasses);
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
