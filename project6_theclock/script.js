/* 
1. set the p tag to currrent time 
2. set the background to a rotating array of colors
3. have both background and time update  every second 


create date variable 
date variable = current time 
set data variable as p 

*/

//https://tecadmin.net/get-current-date-time-javascript/

// to get non military time 
// https://stackoverflow.com/questions/57332903/how-to-make-html-clock-that-doesnt-display-military-time

function updateWebpage() {
    // update clock 
    let rightNow = new Date(); 
    let h = rightNow.getHours();
    let m = rightNow.getMinutes();
    let s = rightNow.getSeconds();  


    let myCurrentTime = h + ":" + m + ":" + s;

    document.getElementById("currentTime").textContent = myCurrentTime;
}

 // update background 
var backgroundColor = ['#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1'];

var index = 1; 

function rotateImage() {
    document.querySelector("body").style.backgroundColor = backgroundColor[index];
    
    index++;
    if(index >= backgroundColor.length) {
        index = 0; 
    }
}

setInterval(updateWebpage, 1000);
setInterval(rotateImage, 1000);
