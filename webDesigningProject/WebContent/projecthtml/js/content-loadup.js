$(window).load(function () {
   $("header").load("headerproject.html");

   $("footer").load("footer_project.html");

   $("#tabs").tabs();

   $("#accordion").accordion({
      event: "click",
      heightStyle: "content",
      collapsible: true
   });
});
