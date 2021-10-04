
 /*** Import navigation JS from module ***/
import * as Nav from './modules/nav.mjs';
// Event listeners for Nav functions
Nav.hamIcon.addEventListener('click', Nav.openNav);
Nav.x_symbol.addEventListener('click', Nav.closeNav);
Nav.completeLesson.addEventListener('click', Nav.showSections);



/*** Ping Localhost ***/
const pingLocalhostInfo_header = document.getElementsByClassName('pingLocalhostInfo_header');
const pingLocalhostInfo1_result = document.getElementById('pingLocalhostInfo1_result');
const pingLocalhostInfo2_result = document.getElementById('pingLocalhostInfo2_result');

const pingLocalhostInfo_array = [
    // Ping localhost
    "Chapter 14 - Connectivity Troubleshooting with Ping (page 270)",
    "ping localhost",
    "After accessing the command prompt, student should enter the command \"ping localhost\" which will ping the laptop they are using. This will provide them with the \"name\" of their laptop.",
    // Type in missing info
    "Chapter 14 - Connectivity Troubleshooting with Ping (page 269)",
    "mobilelab-# <br>(should be the same as the label on their laptop)",
    "Locate the information by referencing their ping result.<br><strong>Instructor Note: </strong>Since each person has a different number laptop, the only entry required for a correct result is \"mobilelab\""
];
// Localhost Page 1 textbook info
function show_pingLocalHostTextInfo_1(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(pingLocalhostInfo1_result.innerHTML === pingLocalhostInfo_array[0]){
            pingLocalhostInfo1_result.innerHTML = ' ';
            pingLocalhostInfo_header[0].style.color = "black";
        } else {
            pingLocalhostInfo1_result.innerHTML = pingLocalhostInfo_array[0];
            pingLocalhostInfo_header[0].style.color = "blue";
    
            pingLocalhostInfo_header[1].style.color = "black";
            pingLocalhostInfo_header[2].style.color = "black";
        } 
    }
    
}
pingLocalhostInfo_header[0].addEventListener('click', show_pingLocalHostTextInfo_1);

// Localhost Page 1 answer info
function show_pingLocalHostAnswerInfo_1(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(pingLocalhostInfo1_result.innerHTML === pingLocalhostInfo_array[1]){
            pingLocalhostInfo1_result.innerHTML = ' ';
            pingLocalhostInfo_header[1].style.color = "black";
        } else {
            pingLocalhostInfo1_result.innerHTML = pingLocalhostInfo_array[1];
            pingLocalhostInfo_header[1].style.color = "blue";

            pingLocalhostInfo_header[0].style.color = "black";
            pingLocalhostInfo_header[2].style.color = "black";
        } 
    }
}
pingLocalhostInfo_header[1].addEventListener('click', show_pingLocalHostAnswerInfo_1);

// Localhost Page 1 student action info
function show_pingLocalHostStudentInfo_1(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(pingLocalhostInfo1_result.innerHTML === pingLocalhostInfo_array[2]){
            pingLocalhostInfo1_result.innerHTML = ' ';
            pingLocalhostInfo_header[2].style.color = "black";
        } else {
            pingLocalhostInfo1_result.innerHTML = pingLocalhostInfo_array[2];
            pingLocalhostInfo_header[2].style.color = "blue";

            pingLocalhostInfo_header[0].style.color = "black";
            pingLocalhostInfo_header[1].style.color = "black";
        } 
    }
}
pingLocalhostInfo_header[2].addEventListener('click', show_pingLocalHostStudentInfo_1);


// Localhost Page 2 textbook info
function show_pingLocalHostTextInfo_2(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(pingLocalhostInfo2_result.innerHTML === pingLocalhostInfo_array[3]){
            pingLocalhostInfo2_result.innerHTML = ' ';
            pingLocalhostInfo_header[3].style.color = "black";
        } else {
            pingLocalhostInfo2_result.innerHTML = pingLocalhostInfo_array[3];
            pingLocalhostInfo_header[3].style.color = "blue";

            pingLocalhostInfo_header[4].style.color = "black";
            pingLocalhostInfo_header[5].style.color = "black";
        } 
    }
}
pingLocalhostInfo_header[3].addEventListener('click', show_pingLocalHostTextInfo_2);

// Localhost Page 2 answer info
function show_pingLocalHostAnswerInfo_2(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(pingLocalhostInfo2_result.innerHTML === pingLocalhostInfo_array[4]){
            pingLocalhostInfo2_result.innerHTML = ' ';
            pingLocalhostInfo_header[4].style.color = "black";
        } else {
            pingLocalhostInfo2_result.innerHTML = pingLocalhostInfo_array[4];
            pingLocalhostInfo_header[4].style.color = "blue";

            pingLocalhostInfo_header[3].style.color = "black";
            pingLocalhostInfo_header[5].style.color = "black";
        } 
    }
}
pingLocalhostInfo_header[4].addEventListener('click', show_pingLocalHostAnswerInfo_2);

// Localhost Page 2 student action info
function show_pingLocalHostStudentInfo_2(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(pingLocalhostInfo2_result.innerHTML === pingLocalhostInfo_array[5]){
            pingLocalhostInfo2_result.innerHTML = ' ';
            pingLocalhostInfo_header[5].style.color = "black";
        } else {
            pingLocalhostInfo2_result.innerHTML = pingLocalhostInfo_array[5];
            pingLocalhostInfo_header[5].style.color = "blue";

            pingLocalhostInfo_header[3].style.color = "black";
            pingLocalhostInfo_header[4].style.color = "black";
        } 
    }
}
pingLocalhostInfo_header[5].addEventListener('click', show_pingLocalHostStudentInfo_2);

/*** Ping Hostname ***/
const pingHostnameInfo_header = document.getElementsByClassName('pingHostnameInfo_header');
const pingHostnameInfo_result = document.getElementById('pingHostnameInfo_result');

const pingHostnameInfo_array = [
    "Chapter 14 - Connectivity Troubleshooting with Ping (page 269)",
    "ping mobilelab-16",
    "Enter answer and click \"enter\". <br><strong>Instructor Note: </strong>Answer is not case sensitive, but there SHOULD NOT be a space between \"mobilelab\" and the hypenated number."
];

function show_pingHostnameTextInfo(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(pingHostnameInfo_result.innerHTML === pingHostnameInfo_array[0]){
            pingHostnameInfo_result.innerHTML = ' ';
            pingHostnameInfo_header[0].style.color = "black";
        } else {
            pingHostnameInfo_result.innerHTML = pingHostnameInfo_array[0];
            pingHostnameInfo_header[0].style.color = "blue";

            pingHostnameInfo_header[1].style.color = "black";
            pingHostnameInfo_header[2].style.color = "black";
        } 
    }
}
pingHostnameInfo_header[0].addEventListener('click', show_pingHostnameTextInfo);

function show_pingHostnameAnswerInfo(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(pingHostnameInfo_result.innerHTML === pingHostnameInfo_array[1]){
            pingHostnameInfo_result.innerHTML = ' ';
            pingHostnameInfo_header[1].style.color = "black";
        } else {
            pingHostnameInfo_result.innerHTML = pingHostnameInfo_array[1];
            pingHostnameInfo_header[1].style.color = "blue";

            pingHostnameInfo_header[0].style.color = "black";
            pingHostnameInfo_header[2].style.color = "black";
        } 
    }
}
pingHostnameInfo_header[1].addEventListener('click', show_pingHostnameAnswerInfo);

function show_pingHostnameStudentInfo(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(pingHostnameInfo_result.innerHTML === pingHostnameInfo_array[2]){
            pingHostnameInfo_result.innerHTML = ' ';
            pingHostnameInfo_header[2].style.color = "black";
        } else {
            pingHostnameInfo_result.innerHTML = pingHostnameInfo_array[2];
            pingHostnameInfo_header[2].style.color = "blue";

            pingHostnameInfo_header[0].style.color = "black";
            pingHostnameInfo_header[1].style.color = "black";
        }
    } 
}
pingHostnameInfo_header[2].addEventListener('click', show_pingHostnameStudentInfo);

/*** Ping IP Address ***/
const pingIpAddressInfo_header = document.getElementsByClassName('pingIpAddressInfo_header');
const pingIpAddressInfo_result = document.getElementById('pingIpAddressInfo_result');

const pingIpAddressInfo_array = [
    "Chapter 14 - Connectivity Troubleshooting with Ping (page 269)",
    "IPv6 Address"
];

function show_pingIpAddressTextInfo(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(pingIpAddressInfo_result.innerHTML === pingIpAddressInfo_array[0]){
            pingIpAddressInfo_result.innerHTML = ' ';
            pingIpAddressInfo_header[0].style.color = "black";
        } else {
            pingIpAddressInfo_result.innerHTML = pingIpAddressInfo_array[0];
            pingIpAddressInfo_header[0].style.color = "blue";

            pingIpAddressInfo_header[1].style.color = "black";
        } 
    }
}
pingIpAddressInfo_header[0].addEventListener('click', show_pingIpAddressTextInfo);

function show_pingIpAddressAnswerInfo(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(pingIpAddressInfo_result.innerHTML === pingIpAddressInfo_array[1]){
            pingIpAddressInfo_result.innerHTML = ' ';
            pingIpAddressInfo_header[1].style.color = "black";
        } else {
            pingIpAddressInfo_result.innerHTML = pingIpAddressInfo_array[1];
            pingIpAddressInfo_header[1].style.color = "blue";

            pingIpAddressInfo_header[0].style.color = "black";
        }
    } 
}
pingIpAddressInfo_header[1].addEventListener('click', show_pingIpAddressAnswerInfo);


/*** Ping IPv4 Address ***/
const pingIpv4AddressInfo_header = document.getElementsByClassName('pingIpv4AddressInfo_header');
const pingIpv4AddressInfo1_result = document.getElementById('pingIpv4AddressInfo1_result');
const pingIpv4AddressInfo2_result = document.getElementById('pingIpv4AddressInfo2_result');

const pingIpv4AddressInfo_array = [
    // Ping IPv4 address
    "Chapter 14 - Connectivity Troubleshooting with Ping (page 270, 271)",
    "Student should reference the textbook on page 270 to locate the switch command \"-4\" that forces the IPv4 address instead of IPv6.",
    // Enter answer
    "Chapter 14 - Connectivity Troubleshooting with Ping (page 269)",
    "ping mobilelab-16 -4",
    "Enter answer and click \"Submit Answer\". <br><strong>Instructor Note: </strong>Answer is not case sensitive, but there SHOULD NOT be a space between \"mobilelab\" and the hypenated number, but there SHOULD be a space before the \"-4\" switch."
];
// Localhost Page 1 textbook info
function show_pingIpv4AddressTextInfo_1(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(pingIpv4AddressInfo1_result.innerHTML === pingIpv4AddressInfo_array[0]){
            pingIpv4AddressInfo1_result.innerHTML = ' ';
            pingIpv4AddressInfo_header[0].style.color = "black";
        } else {
            pingIpv4AddressInfo1_result.innerHTML = pingIpv4AddressInfo_array[0];
            pingIpv4AddressInfo_header[0].style.color = "blue";

            pingIpv4AddressInfo_header[1].style.color = "black";
        } 
    }
}
pingIpv4AddressInfo_header[0].addEventListener('click', show_pingIpv4AddressTextInfo_1);

// Localhost Page 1 student action info
function show_pingIpv4AddressStudentInfo_1(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(pingIpv4AddressInfo1_result.innerHTML === pingIpv4AddressInfo_array[1]){
            pingIpv4AddressInfo1_result.innerHTML = ' ';
        } else {
            pingIpv4AddressInfo1_result.innerHTML = pingIpv4AddressInfo_array[1];
            pingIpv4AddressInfo_header[1].style.color = "blue";

            pingIpv4AddressInfo_header[0].style.color = "black";
        }
    } 
}
pingIpv4AddressInfo_header[1].addEventListener('click', show_pingIpv4AddressStudentInfo_1);


// Localhost Page 2 textbook info
function show_pingIpv4AddressTextInfo_2(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(pingIpv4AddressInfo2_result.innerHTML === pingIpv4AddressInfo_array[2]){
            pingIpv4AddressInfo2_result.innerHTML = ' ';
            pingIpv4AddressInfo_header[2].style.color = "black";
        } else {
            pingIpv4AddressInfo2_result.innerHTML = pingIpv4AddressInfo_array[2];
            pingIpv4AddressInfo_header[2].style.color = "blue";

            pingIpv4AddressInfo_header[3].style.color = "black";
            pingIpv4AddressInfo_header[4].style.color = "black";
        }
    } 
}
pingIpv4AddressInfo_header[2].addEventListener('click', show_pingIpv4AddressTextInfo_2);

// Localhost Page 2 answer info
function show_pingIpv4AddressAnswerInfo(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(pingIpv4AddressInfo2_result.innerHTML === pingIpv4AddressInfo_array[3]){
            pingIpv4AddressInfo2_result.innerHTML = ' ';
            pingIpv4AddressInfo_header[3].style.color = "black";
        } else {
            pingIpv4AddressInfo2_result.innerHTML = pingIpv4AddressInfo_array[3];
            pingIpv4AddressInfo_header[3].style.color = "blue";

            pingIpv4AddressInfo_header[2].style.color = "black";
            pingIpv4AddressInfo_header[4].style.color = "black";
        }
    } 
}
pingIpv4AddressInfo_header[3].addEventListener('click', show_pingIpv4AddressAnswerInfo);

// Localhost Page 2 student action info
function show_pingIpv4AddressStudentInfo_2(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(pingIpv4AddressInfo2_result.innerHTML === pingIpv4AddressInfo_array[4]){
            pingIpv4AddressInfo2_result.innerHTML = ' ';
            pingIpv4AddressInfo_header[4].style.color = "black";
        } else {
            pingIpv4AddressInfo2_result.innerHTML = pingIpv4AddressInfo_array[4];
            pingIpv4AddressInfo_header[4].style.color = "blue";

            pingIpv4AddressInfo_header[2].style.color = "black";
            pingIpv4AddressInfo_header[3].style.color = "black";
        }
    } 
}
pingIpv4AddressInfo_header[4].addEventListener('click', show_pingIpv4AddressStudentInfo_2);

/*** Ping - Host Unreachable ***/
const pingHostUnreachable_header = document.getElementsByClassName('pingHostUnreachable_header');
const pingHostUnreachableQ1_result = document.getElementById('pingHostUnreachableQ1_result');
const pingHostUnreachableQ2_result = document.getElementById('pingHostUnreachableQ2_result');
const pingHostUnreachableQ3_result = document.getElementById('pingHostUnreachableQ3_result');

const pingHostUnreachableInfo_array = [
    "Chapter 14 - Connectivity Troubleshooting with Ping (page 270)",
    // Question 1 Answer
    "routing",
    // Question 2 Answer
    "default gateway",
    // Question 3 Answer
    "router"
];
// Ping host unreachable Question 1 textbook info
function show_pingHostUnreachableTextInfo_1(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(pingHostUnreachableQ1_result.innerHTML === pingHostUnreachableInfo_array[0]){
            pingHostUnreachableQ1_result.innerHTML = ' ';
            pingHostUnreachable_header[0].style.color = "black";
        } else {
            pingHostUnreachableQ1_result.innerHTML = pingHostUnreachableInfo_array[0];
            pingHostUnreachable_header[0].style.color = "blue";

            pingHostUnreachable_header[1].style.color = "black";
        }
    } 
}
pingHostUnreachable_header[0].addEventListener('click', show_pingHostUnreachableTextInfo_1);

// Ping host unreachable Question 1 answer info
function show_pingHostUnreachableAnswerInfo_1(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(pingHostUnreachableQ1_result.innerHTML === pingHostUnreachableInfo_array[1]){
            pingHostUnreachableQ1_result.innerHTML = ' ';
            pingHostUnreachable_header[1].style.color = "black";
        } else {
            pingHostUnreachableQ1_result.innerHTML = pingHostUnreachableInfo_array[1];
            pingHostUnreachable_header[1].style.color = "blue";

            pingHostUnreachable_header[0].style.color = "black";
        } 
    }
}
pingHostUnreachable_header[1].addEventListener('click', show_pingHostUnreachableAnswerInfo_1);


// Ping host unreachable Question 2 textbook info
function show_pingHostUnreachableTextInfo_2(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(pingHostUnreachableQ2_result.innerHTML === pingHostUnreachableInfo_array[0]){
            pingHostUnreachableQ2_result.innerHTML = ' ';
            pingHostUnreachable_header[2].style.color = "black";
        } else {
            pingHostUnreachableQ2_result.innerHTML = pingHostUnreachableInfo_array[0];
            pingHostUnreachable_header[2].style.color = "blue";

            pingHostUnreachable_header[3].style.color = "black";
        }
    } 
}
pingHostUnreachable_header[2].addEventListener('click', show_pingHostUnreachableTextInfo_2);

// Ping host unreachable Question 2 answer info
function show_pingHostUnreachableAnswerInfo_2(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(pingHostUnreachableQ2_result.innerHTML === pingHostUnreachableInfo_array[2]){
            pingHostUnreachableQ2_result.innerHTML = ' ';
            pingHostUnreachable_header[3].style.color = "black";
        } else {
            pingHostUnreachableQ2_result.innerHTML = pingHostUnreachableInfo_array[2];
            pingHostUnreachable_header[3].style.color = "blue";

            pingHostUnreachable_header[2].style.color = "black";
        } 
    }
}
pingHostUnreachable_header[3].addEventListener('click', show_pingHostUnreachableAnswerInfo_2);


// Ping host unreachable Question 3 textbook info
function show_pingHostUnreachableTextInfo_3(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(pingHostUnreachableQ3_result.innerHTML === pingHostUnreachableInfo_array[0]){
            pingHostUnreachableQ3_result.innerHTML = ' ';
            pingHostUnreachable_header[4].style.color = "black";
        } else {
            pingHostUnreachableQ3_result.innerHTML = pingHostUnreachableInfo_array[0];
            pingHostUnreachable_header[4].style.color = "blue";

            pingHostUnreachable_header[5].style.color = "black";
        }
    } 
}
pingHostUnreachable_header[4].addEventListener('click', show_pingHostUnreachableTextInfo_3);

// Ping host unreachable Question 3 answer info
function show_pingHostUnreachableAnswerInfo_3(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(pingHostUnreachableQ3_result.innerHTML === pingHostUnreachableInfo_array[3]){
            pingHostUnreachableQ3_result.innerHTML = ' ';
            pingHostUnreachable_header[5].style.color = "black";
        } else {
            pingHostUnreachableQ3_result.innerHTML = pingHostUnreachableInfo_array[3];
            pingHostUnreachable_header[5].style.color = "blue";

            pingHostUnreachable_header[4].style.color = "black";
        } 
    }
}
pingHostUnreachable_header[5].addEventListener('click', show_pingHostUnreachableAnswerInfo_3);

