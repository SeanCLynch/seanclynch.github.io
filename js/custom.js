$(function() {

  // Ryan @ Stackoverflow
  $.ajaxSetup({beforeSend: function(xhr){
    if (xhr.overrideMimeType) {
      xhr.overrideMimeType("application/json");
    }
  }
  });

  // Functionality
  $.getJSON('./data.json', function(data) {
    $.each(data.content, function(index, link) {
      if (link.type == "GH") {
        var str = "<li><img class='hide-for-small-only icon' src='./img/github_logo.png'/><a href='" + link.url + "'>" + link.title + "</a>" + "<br>" + "<span class='info'>Posted on <span class='gh'>Github</span> " + link.date + " </span></li>";
      } else if (link.type == "PB") {
        var str = "<li><img class='hide-for-small-only icon' src='./img/pinboard_logo.png'/><a href='" + link.url + "'>" + link.title + "</a>" + "<br>" + "<span class='info'>Posted on <span class='pb'>Pinboard.in</span> " + link.date + " </span></li>";
      } else if (link.type == "WP") {
        var str = "<li><img class='hide-for-small-only icon' src='./img/wordpress_logo.png'/><a href='" + link.url + "'>" + link.title + "</a>" + "<br>" + "<span class='info'>Posted on <span class='wp'>Wordpress</span> " + link.date + " </span></li>";
      } else if (link.type == "SC") {
        var str = "<li><img class='hide-for-small-only icon' src='./img/soundcloud_logo.png'/><a href='" + link.url + "'>" + link.title + "</a>" + "<br>" + "<span class='info'>Posted on <span class='sc'>Soundcloud</span> " + link.date + " </span></li>";
      }

      $("#content ul.links").append(str);
    });
  });
  $('.about').hide();
  $('.portfolio').hide();
  $('.essays').hide();

  $('.portfolio-btn').on('click', function () {
    $('.about').hide();
    $('.portfolio').show();
    $('.aggregator').hide();
    $('.essays').hide();
  });
  $('.aggregator-btn').on('click', function () {
    $('.about').hide();
    $('.portfolio').hide();
    $('.aggregator').show();
    $('.essays').hide();
  });
  $('.about-btn').on('click', function () {
    $('.about').show();
    $('.portfolio').hide();
    $('.aggregator').hide();
    $('.essays').hide();
  });
  $('.essays-btn').on('click', function () {
    $('.about').hide();
    $('.portfolio').hide();
    $('.aggregator').hide();
    $('.essays').show();
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
