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
var moves;
var movesPosition;
var timer;
var timerPosition;
var fieldSize;
var fontSize;

function init() {
  var maxX=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var maxY=window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;
  var svgObject=document.getElementById("svg1");
  
  fieldSize=Math.max(maxX,maxY);
  fontSize = fieldSize / 20;
  
  if ( fieldSize == maxX) {
    landscape = true;
  } else {
    landscape = false;
  }
//  if ( landscape == true ) {
//    fSize = (maxY - 5 * (fNum + 1))/fNum;
//    var xDelta = (maxX - (fNum*(fSize+5)+5))/4;
//    var yDelta = 0;
//    movesPosition = [ fSize*fNum*2 , fontSize*2 ];
//    timerPosition = [ fSize*1.5 , fontSize*6 ];   
//  } else {
//    fSize = (maxX - 5 * (fNum + 1))/fNum;
//    var yDelta = (maxY - (fNum*(fSize+5)+5))/4;
//    var xDelta = 0;
//    movesPosition = [ fontSize*3 , fSize * 1.5];
//    timerPosition = [ fontSize*3 , fSize * 1.5 + 2 * fonSize];
//  }
  if ( landscape == true ) {
    fSize = (maxY - 5 * (fNum + 1))/fNum;
    var xDelta = (maxX - (fNum*(fSize+5)+5))/2;
    var yDelta = 0;
  } else {
    fSize = (maxX - 5 * (fNum + 1))/fNum;
    var yDelta = (maxY - (fNum*(fSize+5)+5))/2;
    var xDelta = 0;
  }

  // Initialize svg
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
  
  // newText = document.createElementNS("http://www.w3.org/2000/svg", 'text');
  // newText.setAttribute("id","movesText");
  // newText.setAttribute("x",movesPosition[0]);
  // newText.setAttribute("y",movesPosition[1]);
  // newText.setAttribute("font-family","monospace");
  // newText.setAttribute("font-size",fontSize.toString());
  // svgObject.appendChild(newText);
  // var textNode = document.createTextNode("adsdsadaa");
  // newText.appendChild(textNode);

  // Lay cards
  var cardCount = (fNum * fNum) / 2;
  while (cardCount > 0) {
     var newCard = false;
     while ( newCard == false ){
       var curCardNum = Math.floor(Math.random() * images.length);
       var curCardName = images[curCardNum];
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
          state[xPos1][yPos1]={ img: curCardName, state: "down" };
          laidOne = "true";
        }
     }
     var laidTwo = "false";
     while ( laidTwo == "false" ) {
        var xPos2 = Math.floor(Math.random() * fNum);
        var yPos2 = Math.floor(Math.random() * fNum);
        if ( state[xPos2][yPos2] == undefined ) {
          state[xPos2][yPos2]={ img: curCardName , state: "down" };
          laidTwo = "true";
        }
     }
     cardCount -= 1;
  }
}

function onClick(evt){
  svgObject=document.getElementById("svg1");
  sqrId=evt.target.getAttribute("id");
  coords=sqrId.split("-");
  
  console.log(state);
  console.log(state[coords[0]][coords[1]]);
  
  image=state[coords[0]][coords[1]].img;
  
  newElement = document.createElementNS('http://www.w3.org/2000/svg','image');
  newElement.setAttribute('href','/JB/'+image+'.jpg');
  newElement.setAttribute('id',"img-"+sqrId);
  newElement.setAttribute('x',evt.target.getAttribute("x"));
  newElement.setAttribute('y',evt.target.getAttribute("y"));
  newElement.setAttribute('width',fSize);
  newElement.setAttribute('height',fSize);
  svgObject.appendChild(newElement);
  
}

// <text x="0" y="15" fill="red" font-family="monospace" font-size="30">I love SVG!</text>
