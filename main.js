$(document).ready(function(){
  'use strict';
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));

  // var c;
  // for(var x=50; x<400; x+=75) {
  //   for(var y=50; y<400; y+=75) {
  //     c = Shape.Circle(x, y, 20);
  //     c.fillColor = 'honeydew';
  //   }
  // }


  var tool = new Tool();
  var c = Shape.Circle(200, 200, 80);
  c.fillColor = 'dark-grey';
  var text = new PointText(200, 200);
  text.justification = 'center';
  text.fillColor = 'white';
  text.fontSize = 20;
  text.content = 'bacon is delicious';
  tool.onMouseDown = function(event) {
    var c = Shape.Circle(event.point, 20);
    c.fillColor = 'honeydew';
  }

  paper.view.draw();
});
