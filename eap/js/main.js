'use strict';
// Procedure info container variables - for emergInfo_arry 
const evacuationInfo = document.getElementById('evacuation-info');
const fireInfo = document.getElementById('fire-info');
const earthquakeInfo = document.getElementById('earthquake-info');
const intruderInfo = document.getElementById('intruder-info');
const bombInfo = document.getElementById('bomb-info');
const dropCoverInfo = document.getElementById('dropCover-info');
const lockdownInfo = document.getElementById('lockdown-info');
const crashInfo = document.getElementById('crash-info');
const weatherInfo = document.getElementById('weather-info');
const shelterInfo = document.getElementById('shelter-info');

const emergInfo_array = [
    evacuationInfo,
    fireInfo,
    earthquakeInfo,
    intruderInfo,
    bombInfo,
    dropCoverInfo,
    lockdownInfo,
    crashInfo,
    weatherInfo,
    shelterInfo
];

// Emergency button variables - for emergBtn_arry 
const evacuationBtn = document.getElementById('evacuation');
const fireBtn = document.getElementById('fire');
const earthquakeBtn = document.getElementById('earthquake');
const intruderBtn = document.getElementById('intruder');
const bombBtn = document.getElementById('bomb');
const dropCoverBtn = document.getElementById('dropCover');
const lockdownBtn = document.getElementById('lockdown');
const crashBtn = document.getElementById('crash');
const weatherBtn = document.getElementById('weather');
const shelterBtn = document.getElementById('shelter');

const emergBtn_array = [
    evacuationBtn,
    fireBtn,
    earthquakeBtn,
    intruderBtn,
    bombBtn,
    dropCoverBtn,
    lockdownBtn,
    crashBtn,
    weatherBtn,
    shelterBtn
];

//  Create single function "showInfo"
const proceduresContainer = document.getElementById('procedures-container');

function showInfo(event){  
    let emerg = event.target.id;
    console.log(emerg);
    let emergInfo = document.getElementById(`${emerg}-info`);
    console.log(emergInfo);
    for(let i=0; i<emergInfo_array.length; i++){
        emergInfo_array[i].classList.add("hideInfo");
    }
    emergInfo.classList.toggle("hideInfo");

    showActiveBtn(emerg);
}
proceduresContainer.addEventListener('click', function(){ showInfo(event); });

function showActiveBtn(clickedBtn){
    for(let i=0; i<emergBtn_array.length; i++){
        emergBtn_array[i].classList.remove("active-emerg-btn");
    }
    let activeBtn = document.getElementById(`${clickedBtn}`);
    activeBtn.classList.toggle("active-emerg-btn");
}



//Function and variables for text messages
const sheriff = '14088827767';
const cowan = '14083908048';
const lopez = '14085697138';
const hackett = '14083321363';

const evacuateText = "ATTENTION PLEASE! We need to institute an EVACUATION of the building. Staff is to take their students to their designated Assembly Area. Students please remain with your Instructor.";
function sendEvacText(){
    let encodedText = encodeURIComponent(evacuateText);
    window.location.href=`sms://open?addresses=+${lopez},${cowan};?&body=${encodedText}`;
}

const lockdownText = "ATTENTION PLEASE! LOCKDOWN…LOCKDOWN…LOCKDOWN.  Additional information will follow.";
function sendLockdownText(){
    let encodedText = encodeURIComponent(lockdownText);
    window.location.href=`sms://open?addresses=+${lopez},${cowan};?&body=${encodedText}`;
}

//Functions and variables for emergency calls
const jatc = '15105602032';






// Side nav 
const hamIcon = document.getElementById("hamIcon");

function openNav() {
    document.getElementById("Sidenav").style.width = "70%";
}
hamIcon.addEventListener('click', openNav);
  
/* Set the width of the side navigation to 0 */
const x_symbol = document.getElementById("x_symbol");

function closeNav() {
document.getElementById("Sidenav").style.width = "0";
}
x_symbol.addEventListener('click', closeNav);



// Additional Info Request 
const evacAddInfo_btn = document.getElementById("evacAddInfo_btn");

function openAddInfo() {
    document.getElementById("evacAddInfo").style.width = "90%";
}
evacAddInfo_btn.addEventListener('click', openAddInfo);
  
/* Set the width of the side navigation to 0 */
const evacAddInfoX_symbol = document.getElementById("evacAddInfo-x_symbol");

function closeAddInfo() {
document.getElementById("evacAddInfo").style.width = "0";
}
evacAddInfoX_symbol.addEventListener('click', closeAddInfo);