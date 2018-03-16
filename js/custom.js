$(function() {

  // Ryan @ Stackoverflow
  $.ajaxSetup({beforeSend: function(xhr){
    if (xhr.overrideMimeType) {
      xhr.overrideMimeType("application/json");
    }
  }
  });

  $('.about').hide();

  $('.portfolio-btn').on('click', function () {
    $('.about').hide();
    $('.portfolio').show();
  });
  $('.about-btn').on('click', function () {
    $('.about').show();
    $('.portfolio').hide();
  });
  // var colorit = function () {
  // 	var links = document.getElementsByTagName("a");
  // 	for (var i = 0; i < links.length; i++) {
  // 		links[i].onmouseover = function (e) {
  // 			var c = Math.floor((Math.random() * (3)) + 1);
  // 			if (c == 1) {
  // 				this.style['color'] = "#5CC4A9";//teal
  // 			} else if (c == 2) {
  // 				this.style['color'] = "#C36EBF";//purp
  // 			} else if (c == 3) {
  // 				this.style['color'] = "#C87B2C";//orange
  // 			} else {
  // 				this.style['color'] = "#B64952";//og link color
  // 			}
  // 		}
  // 	}
  // }
  // colorit();
});
