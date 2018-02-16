$(document).ready(function() {
  var myurl = "https://api.chucknorris.io/jokes/categories";
  // console.log("hello, ");
  // $.getJSON(myurl, function(result){
  //   var htmlToPlace = '<ul class="navBar">';
  //   /*var newList = document.createElement("ul");
  //   newList.setAttribute('id', 'navBar');*/
  //   for (var i = 1; i<result.length; i++) {
  //     /*var listItem = document.createElement("li");
  //     listItem.setAttribute('class', 'button');
  //     listItem.appendChild(document.createTextNode(result[i]));
  //     newList.appendChild(listItem);*/
  //     htmlToPlace+= '<li class="button">' + result[i] + '</li>';
  //   }
  //   /*var navigate = document.getElementById("navigation");
  //   navigate.appendChild(newList, navigate);*/
  //   htmlToPlace += '</ul>';
  //   $("#navigation").html(htmlToPlace);
  //   console.log(htmlToPlace);
  //   /*console.log(result);*/
  //
  // });
  $('.button').click(function(e) {
    console.log('flag 1');
    e.preventDefault();
    console.log(e.target);
    var jokeUrl = "https://api.chucknorris.io/jokes/random?category=" + $(e.target).text();
    $.getJSON(jokeUrl, function(result) {
      console.log('flag 2');
      console.log(result);
      var htmlToPlace = '<h1 id="joke">' + result.value + '</h1>';
      $("#joke").html(htmlToPlace);
    });
  });
  /*$.ajax({
    /*url: myurl,
    dataType : "json",
    data: json,
    success : function(json)
    }*
  });*/
});
