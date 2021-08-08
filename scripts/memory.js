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
var images = ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59'];

function init() {
  var ratio = window.devicePixelRatio || 1;
  var maxX=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var maxY=window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;
  // var state = [];
  for(var i=0; i<8; i++) {
    state[i] = [];
    for(var j=0; j<8; j++) {
        state[i][j] = undefined;
    }
  }

  // const urlParams = new URLSearchParams(window.location.search);
  // let cardWidth = parseInt(urlParams.get('width'));
  console.log("X="+maxX+"   Y="+maxY);
  console.log(state[1][1]);
  // let cardGap = parseInt(urlParams.get('gap'));
}
