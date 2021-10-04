/*** Import navigation JS from module ***/
import * as Nav from './modules/nav.mjs';
// Event listeners for Nav functions
Nav.hamIcon.addEventListener('click', Nav.openNav);
Nav.x_symbol.addEventListener('click', Nav.closeNav);
Nav.completeLesson.addEventListener('click', Nav.showSections);



/*** Access Run Dialog ***/
const accessRunDialogInfo_header = document.getElementsByClassName('accessRunDialogInfo_header');
const accessRunDialogInfo_result = document.getElementById('accessRunDialogInfo_result');

const accessRunDialogInfo_array = [
    "Chapter 14 - The Command Prompt (page 264)"
];
// Access Run Dialog Textbook info
function show_accessRunDialogTextInfo(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(accessRunDialogInfo_result.innerHTML === accessRunDialogInfo_array[0]){
            accessRunDialogInfo_result.innerHTML = ' ';
            accessRunDialogInfo_header[0].style.color = "black";
        } else {
            accessRunDialogInfo_result.innerHTML = accessRunDialogInfo_array[0];
            accessRunDialogInfo_header[0].style.color = "blue";
        } 
    }
    
}
accessRunDialogInfo_header[0].addEventListener('click', show_accessRunDialogTextInfo);


/*** Run Dialog Box ***/
const runDialogBoxInfo_header = document.getElementsByClassName('runDialogBoxInfo_header');
const runDialogBoxInfo_result = document.getElementById('runDialogBoxInfo_result');

const runDialogBoxInfo_array = [
    "Chapter 14 - The Command Prompt (page 264)",
    "cmd"
];

// Run Dialog Box textbook info
function show_runDialogBoxTextInfo(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(runDialogBoxInfo_result.innerHTML === runDialogBoxInfo_array[0]){
            runDialogBoxInfo_result.innerHTML = ' ';
            runDialogBoxInfo_header[0].style.color = "black";
        } else {
            runDialogBoxInfo_result.innerHTML = runDialogBoxInfo_array[0];
            runDialogBoxInfo_header[0].style.color = "blue";

            runDialogBoxInfo_header[1].style.color = "black";
        } 
    }
}
runDialogBoxInfo_header[0].addEventListener('click', show_runDialogBoxTextInfo);

// Run Dialog Box answer info
function show_runDialogBoxAnswerInfo(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(runDialogBoxInfo_result.innerHTML === runDialogBoxInfo_array[1]){
            runDialogBoxInfo_result.innerHTML = ' ';
            runDialogBoxInfo_header[1].style.color = "black";
        } else {
            runDialogBoxInfo_result.innerHTML = runDialogBoxInfo_array[1];
            runDialogBoxInfo_header[1].style.color = "blue";

            runDialogBoxInfo_header[0].style.color = "black";
        } 
    }
}
runDialogBoxInfo_header[1].addEventListener('click', show_runDialogBoxAnswerInfo);


/*** Display Commands ***/
const displayCmdsInfo_header = document.getElementsByClassName('displayCmdsInfo_header');
const displayCmdsInfo_result = document.getElementById('displayCmdsInfo_result');

const displayCmdsInfo_array = [
    "Chapter 14 - The Command Prompt (page 264)",
    "help"
];

// Display Commands textbook info
function show_displayCmdsTextInfo(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(displayCmdsInfo_result.innerHTML === displayCmdsInfo_array[0]){
            displayCmdsInfo_result.innerHTML = ' ';
            displayCmdsInfo_header[0].style.color = "black";
        } else {
            displayCmdsInfo_result.innerHTML = displayCmdsInfo_array[0];
            displayCmdsInfo_header[0].style.color = "blue";

            displayCmdsInfo_header[1].style.color = "black";
        } 
    }
}
displayCmdsInfo_header[0].addEventListener('click', show_displayCmdsTextInfo);

// Display Commands answer info
function show_displayCmdsAnswerInfo(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(displayCmdsInfo_result.innerHTML === displayCmdsInfo_array[1]){
            displayCmdsInfo_result.innerHTML = ' ';
            displayCmdsInfo_header[1].style.color = "black";
        } else {
            displayCmdsInfo_result.innerHTML = displayCmdsInfo_array[1];
            displayCmdsInfo_header[1].style.color = "blue";

            displayCmdsInfo_header[0].style.color = "black";
        }
    } 
}
displayCmdsInfo_header[1].addEventListener('click', show_displayCmdsAnswerInfo);


/*** Single Page ***/
const singlePageInfo_header = document.getElementsByClassName('singlePageInfo_header');
const singlePageInfo_result = document.getElementById('singlePageInfo_result');

const netIdItemsInfo_array = [
    "Chapter 14 - The Command Prompt (page 264)",
    "help | more"
];

// Single page textbook info
function show_netIdItemsTextInfo(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(singlePageInfo_result.innerHTML === netIdItemsInfo_array[0]){
            singlePageInfo_result.innerHTML = ' ';
            singlePageInfo_header[0].style.color = "black";
        } else {
            singlePageInfo_result.innerHTML = netIdItemsInfo_array[0];
            singlePageInfo_header[0].style.color = "blue";

            singlePageInfo_header[1].style.color = "black";
        } 
    }
}
singlePageInfo_header[0].addEventListener('click', show_netIdItemsTextInfo);

// Single page answer info
function show_netIdItemsAnswerInfo(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(singlePageInfo_result.innerHTML === netIdItemsInfo_array[1]){
            singlePageInfo_result.innerHTML = ' ';
            singlePageInfo_header[1].style.color = "black";
        } else {
            singlePageInfo_result.innerHTML = netIdItemsInfo_array[1];
            singlePageInfo_header[1].style.color = "blue";

            singlePageInfo_header[0].style.color = "black";
        }
    } 
}
singlePageInfo_header[1].addEventListener('click', show_netIdItemsAnswerInfo);


/*** Command Help ***/
const cmdHelpInfo_header = document.getElementsByClassName('cmdHelpInfo_header');
const cmdHelpInfo_result = document.getElementById('cmdHelpInfo_result');

const cmdHelpInfo_array = [
    "Chapter 14 - The Command Prompt (page 264)",
    "/?"
];

// Command Help textbook info
function show_cmdHelpTextInfo(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(cmdHelpInfo_result.innerHTML === cmdHelpInfo_array[0]){
            cmdHelpInfo_result.innerHTML = ' ';
            cmdHelpInfo_header[0].style.color = "black";
        } else {
            cmdHelpInfo_result.innerHTML = cmdHelpInfo_array[0];
            cmdHelpInfo_header[0].style.color = "blue";

            cmdHelpInfo_header[1].style.color = "black";
        }
    } 
}
cmdHelpInfo_header[0].addEventListener('click', show_cmdHelpTextInfo);

// Command Help answer info
function show_cmdHelpAnswerInfo(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(cmdHelpInfo_result.innerHTML === cmdHelpInfo_array[1]){
            cmdHelpInfo_result.innerHTML = ' ';
            cmdHelpInfo_header[1].style.color = "black";
        } else {
            cmdHelpInfo_result.innerHTML = cmdHelpInfo_array[1];
            cmdHelpInfo_header[1].style.color = "blue";

            cmdHelpInfo_header[0].style.color = "black";
        } 
    }
}
cmdHelpInfo_header[1].addEventListener('click', show_cmdHelpAnswerInfo);


/*** Switches ***/
const switchesInfo_header = document.getElementsByClassName('switchesInfo_header');
const switchesInfo_result = document.getElementById('switchesInfo_result');

const switchesInfo_array = [
    "Chapter 14 - The Command Prompt (page 264)",
    "ipconfig/all <br> ipconfig/release <br> ipconfig/renew6",
    "Reference the ipconfig /? result to find the commands that match the descriptions."
];

// Switches textbook info
function show_switchesTextInfo(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(switchesInfo_result.innerHTML === switchesInfo_array[0]){
            switchesInfo_result.innerHTML = ' ';
            switchesInfo_header[0].style.color = "black";
        } else {
            switchesInfo_result.innerHTML = switchesInfo_array[0];
            switchesInfo_header[0].style.color = "blue";

            switchesInfo_header[1].style.color = "black";
            switchesInfo_header[2].style.color = "black";
        }
    } 
}
switchesInfo_header[0].addEventListener('click', show_switchesTextInfo);

// Switches answer info
function show_switchesAnswerInfo(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(switchesInfo_result.innerHTML === switchesInfo_array[1]){
            switchesInfo_result.innerHTML = ' ';
            switchesInfo_header[1].style.color = "black";
        } else {
            switchesInfo_result.innerHTML = switchesInfo_array[1];
            switchesInfo_header[1].style.color = "blue";

            switchesInfo_header[0].style.color = "black";
            switchesInfo_header[2].style.color = "black";
        } 
    }
}
switchesInfo_header[1].addEventListener('click', show_switchesAnswerInfo);

// Switches Student action info
function show_switchesStudentInfo(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(switchesInfo_result.innerHTML === switchesInfo_array[2]){
            switchesInfo_result.innerHTML = ' ';
            switchesInfo_header[2].style.color = "black";
        } else {
            switchesInfo_result.innerHTML = switchesInfo_array[2];
            switchesInfo_header[2].style.color = "blue";

            switchesInfo_header[0].style.color = "black";
            switchesInfo_header[1].style.color = "black";
        } 
    }
}
switchesInfo_header[2].addEventListener('click', show_switchesStudentInfo);


