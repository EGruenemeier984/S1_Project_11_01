"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Ethan Gruenemeier
   Date: 2.12.19

*/
//This sets a variable to the current time and date
var thisTime = new Date();
// sets variable for the time string 
var timeStr = thisTime.toLocaleString();
// this sets the id of timeStamp to the varible of timeStr.
document.getElementById("timeStamp").innerHTML = timeStr;

// These are variables that get the hours and month.
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();

// this gets the number to use for the map
var mapNum = (2 * thisMonth + thisHour) % 24;

// this sets the variable equal to to image string with the correct mapNum uses string interpolation instead of concatination to use less quotaion marks.
var imgStr = `<img src='sd_sky${mapNum}.png' />`;
// this sets the ID of planisphere to the imgStr varible and places it after the opening tag.
document.getElementById("planisphere").insertAdjacentHTML('afterbegin', imgStr);