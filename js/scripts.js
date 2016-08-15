$(document).ready(function() {
  $("form").submit(function(event) {
    var sentence = $("#sentence").val();
    var newArray = sentence.split(" ");
    var array2 = [];

    var threeArray = newArray.map(function(str){
      if(str.length > 2){
        array2.push(str);
      }
    });

    array2.reverse();
    var newsent = array2.join(" ");

    alert(newsent);
    event.preventDefault();
  });
});
