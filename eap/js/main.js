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
    window.location.href=`sms://open?addresses=+${sheriff},${cowan};?&body=${encodedText}`;
}

const lockdownText = "ATTENTION PLEASE! LOCKDOWN…LOCKDOWN…LOCKDOWN.  Additional information will follow.";
function sendLockdownText(){
    let encodedText = encodeURIComponent(lockdownText);
    window.location.href=`sms://open?addresses=+${sheriff},${cowan};?&body=${encodedText}`;
}

//Functions and variables for emergency calls
const jatc = '15105602032';






// Side nav 
const hamIcon = document.getElementById("hamIcon");

function openNav() {
    let screenWidth = screen.width;
    if(screenWidth > 800){
        document.getElementById("Sidenav").style.width = "30%";
    }
    document.getElementById("Sidenav").style.width = "70%";
}
hamIcon.addEventListener('click', openNav);
  
/* Set the width of the side navigation to 0 */
const x_symbol = document.getElementById("x_symbol");

function closeNav() {
document.getElementById("Sidenav").style.width = "0";
}
x_symbol.addEventListener('click', closeNav);

const fullPlanBtn = document.getElementById('fullPlan-btn');
function showFullPlan(){
    window.location.href = 'views/eap_full-plan.html';
}
fullPlanBtn.addEventListener('click', showFullPlan);



/** Additional Info Requests **/ 
// Create array of "Additional Info" buttons
const addInfoBtn_array = document.getElementsByClassName('addInfo-btn');
// Create function to loop through array and add 'click' event listener to each button to call 'openAddInfo' function
function addInfoBtn_eventListeners(){
    for(let i=0; i<addInfoBtn_array.length; i++){
        addInfoBtn_array[i].addEventListener('click', openAddInfo);
    }
}
// Call function
addInfoBtn_eventListeners();
// Create function to display the additional information requested that takes the id of the info as a parameter
function displayInfo(emergAddInfo) {
    document.getElementById(emergAddInfo).style.width = "90%";
}
// Create function to match button clicked id to addInfoId, then create infoId variable for additional info
function openAddInfo(emergAddInfo){
    emergAddInfo = event.target.id;
    for(let i=0; i<addInfoBtn_array.length; i++){
        if(emergAddInfo === addInfoBtn_array[i].id){
            console.log('We have a winner!');
            let remove_btn = addInfoBtn_array[i].id.length - 4;
            console.log(remove_btn);
            let infoId = addInfoBtn_array[i].id.substring(0,remove_btn);
            console.log(infoId);
            displayInfo(infoId);
        }
    }
}


// Create array of "X-Symbol" close buttons
const closeAddInfoBtn_array = document.getElementsByClassName('span_x');
// Create function to loop through array and add 'click' event listener to each button to call 'closeAddInfo' function
function closeAddInfoBtn_eventListeners(){
    for(let i=0; i<closeAddInfoBtn_array.length; i++){
        closeAddInfoBtn_array[i].addEventListener('click', closeAddInfo);
    }
}
// Call function
closeAddInfoBtn_eventListeners();

function closeInfo(closeInfoId) {
document.getElementById(closeInfoId).style.width = "0";
}

function closeAddInfo(){
    console.log('close function called');
    console.log(event.target.id);
    let xSymbol_id = event.target.id;
    for(let i=0; i<closeAddInfoBtn_array.length; i++){
        if(xSymbol_id === closeAddInfoBtn_array[i].id){
            console.log('We have another winner!');
            let removeX_symbol = xSymbol_id.length - 9;
            console.log(removeX_symbol);
            let closeInfoId = xSymbol_id.substring(0,removeX_symbol);
            console.log(closeInfoId);
            closeInfo(closeInfoId);
        }
    }
}

// Create array of Side-Navigation links
const menuLinks_array = document.getElementsByClassName('menuLink');
// Create function to loop through array and add 'click' event listener to each button to call 'openAddInfo' function
function menuLink_eventListeners(){
    for(let i=0; i<menuLinks_array.length; i++){
        menuLinks_array[i].addEventListener('click', openMenuLinkInfo);
    }
}
// Call function
menuLink_eventListeners();

// Create function to match link clicked id to addInfoId, then create infoId variable for additional info
function openMenuLinkInfo(emergAddInfo){
    emergAddInfo = event.target.id;
    for(let i=0; i<menuLinks_array.length; i++){
        if(emergAddInfo === menuLinks_array[i].id){
            console.log('We have a winner!');
            let remove_link = menuLinks_array[i].id.length - 5;
            console.log(remove_link);
            let infoId = menuLinks_array[i].id.substring(0,remove_link);
            console.log(infoId);
            displayInfo(infoId);
        }
    }
}
