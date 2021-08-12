/*
Author:     Jan van der Meiden
            jvdmeiden@gmail.com
Version:    20210806.00  
Copyright (c) 2021 Jan van der Meiden.
Copying and distribution of this file, with or without modification,
are permitted in any medium without royalty provided this copyright
notice is preserved. 
*/

var state = [];
var images = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59'];
var landscape;
var fNum = 6;
var fSize;
var turned = [null,null];
var remaining = fNum*fNum;


function init() {
  var maxX=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var maxY=window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;
  var svgObject=document.getElementById("svg1");
  var fieldSize=Math.max(maxX,maxY);  
  if ( fieldSize == maxX) {
    landscape = true;
  } else {
    landscape = false;
  }
  if ( landscape == true ) {
    fSize = (maxY - 5 * (fNum + 1))/fNum;
    var xDelta = (maxX - (fNum*(fSize+5)+5))/2;
    var yDelta = 0;
  } else {
    fSize = (maxX - 5 * (fNum + 1))/fNum;
    var yDelta = (maxY - (fNum*(fSize+5)+5))/2;
    var xDelta = 0;
  }
    
  for(var i=0; i<fNum; i++) {
    state[i] = [];
    for(var j=0; j<fNum; j++) {
        state[i][j] = undefined;
        newRect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
        newRect.setAttribute("x",(xDelta+i*(fSize+5))+5);
        newRect.setAttribute("y",(yDelta+j*(fSize+5))+5);
        newRect.setAttribute("width",fSize);
        newRect.setAttribute("height",fSize);
        newRect.setAttribute("style","fill:grey");
        newRect.setAttribute("id",i+"-"+j);
        newRect.setAttribute("onclick","onClick(evt)");
        svgObject.appendChild(newRect);
    }
  }
  var cardCount = (fNum * fNum) / 2;
  while (cardCount > 0) {
     var newCard = false;
     while ( newCard == false ){
       var curCardNum = Math.floor(Math.random() * images.length);
       if ( images[ curCardNum ] != "gone" ){ 
          console.log( images[ curCardNum ]);
          images[ curCardNum ] = "gone";
          newCard = "true";
       }
     }
     var laidOne = "false";
     while ( laidOne == "false" ) {
        var xPos1 = Math.floor(Math.random() * fNum);
        var yPos1 = Math.floor(Math.random() * fNum);
        if ( state[xPos1][yPos1] == undefined ) {
          state[xPos1][yPos1]={ num: curCardNum , state: "down" };
          laidOne = "true";
        }
     }
     var laidTwo = "false";
     while ( laidTwo == "false" ) {
        var xPos2 = Math.floor(Math.random() * fNum);
        var yPos2 = Math.floor(Math.random() * fNum);
        if ( state[xPos2][yPos2] == undefined ) {
          state[xPos2][yPos2]={ num: curCardNum , state: "down" };
          laidTwo = "true";
        }
     }
     cardCount -= 1;
  }
  // Math.floor(Math.random() * 11);
  // images.length;


}

function onClick(evt){
  svgObject=document.getElementById("svg1");
  sqrId=evt.target.getAttribute("id");
  coords=sqrId.split("-");
  // for(var i=0; i<coords.length; i++) { coords[i] = +coords[i]; }
  console.log(coords);
  console.log(state[coords[0]][coords[1]]);
  image=String(state[coords[0]][coords[1]].num).padStart(2, '0');
  console.log(image);
  //  <image href="mdn_logo_only_color.png" height="200" width="200"/>
  // evt.target.setAttributeNS(null,"style","fill:red");
  // evt.target.removeAttribute("style");
  newElement = document.createElementNS('http://www.w3.org/2000/svg','image');
  newElement.setAttribute('href','/JB/'+image+'.jpg');
  newElement.setAttribute('id',"img-"+sqrId);
  newElement.setAttribute('x',evt.target.getAttribute("x"));
  newElement.setAttribute('y',evt.target.getAttribute("y"));
  newElement.setAttribute('width',fSize);
  newElement.setAttribute('height',fSize);
  svgObject.appendChild(newElement);
  // newElement = document.createElement('foreignObject');
  // newElement.setAttribute('x',evt.target.getAttribute("x"));
  // newElement.setAttribute('y',evt.target.getAttribute("y"));
  // newElement.setAttribute('width',fSize);
  // newElement.setAttribute('height',fSize);
  // newElement.setAttribute('requiredExtensions','ihttp://example.com/SVGExtensions/EmbeddedXHTML');
  // newElement.setAttributeNS(null,'id',"img-"+sqrId);
  // svgObject.appendChild(newElement);
  // imgObject=document.getElementById("img-"+sqrId);
  // newElement2 = document.createElement('image');
  // newElement2.setAttribute('src','/JB/02.jpg');
  // imgObject.appendChild(newElement2);
  
  // newElement.setAttributeNS(null,'x',evt.target.getAttribute("x"));
  // newElement.setAttributeNS(null,'y',evt.target.getAttribute("y"));
  // newElement.setAttributeNS(null,'width',fSize);
  // newElement.setAttributeNS(null,'height',fSize);
  svgObject.appendChild(newElement);

  // <image href="mdn_logo_only_color.png" height="200" width="200"/>
  // svgObject=document.getElementById("svg1");;
  // sqr=svgObject.getElementById(sqrId);
  // sqr.setAttributeNS(null,"style","fill:red");
  // sqr.color="blue";
  // svgObject=document.getElementById("svg1");
  // svgObject.evt.target.setAttribute("color","red");
  // window.card=document.getElementById(id);
  // card.color="blue";
  // console.log(card);
  // console.log(evt.target);
  // setTimeout(2000);
  // console.log(sqrId);
}
