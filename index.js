$(document).ready(function(){ 
    $.get("index.html", function(data) {
      $("#menu").html(data);
    });
  }); 