
/*** Ping Localhost ***/
export const pingLocalhostInfo_header = document.getElementsByClassName('pingLocalhostInfo_header');
export const pingLocalhostInfo1_result = document.getElementById('pingLocalhostInfo1_result');
export const pingLocalhostInfo2_result = document.getElementById('pingLocalhostInfo2_result');

export const pingLocalhostInfo_array = [
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
export function show_pingLocalHostTextInfo_1(){
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

// Localhost Page 1 answer info
export function show_pingLocalHostAnswerInfo_1(){
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

// Localhost Page 1 student action info
export function show_pingLocalHostStudentInfo_1(){
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

// Localhost Page 2 textbook info
export function show_pingLocalHostTextInfo_2(){
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

// Localhost Page 2 answer info
export function show_pingLocalHostAnswerInfo_2(){
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

// Localhost Page 2 student action info
export function show_pingLocalHostStudentInfo_2(){
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

/*** Ping Hostname ***/
export const pingHostnameInfo_header = document.getElementsByClassName('pingHostnameInfo_header');
export const pingHostnameInfo_result = document.getElementById('pingHostnameInfo_result');

export const pingHostnameInfo_array = [
    "Chapter 14 - Connectivity Troubleshooting with Ping (page 269)",
    "ping mobilelab-16",
    "Enter answer and click \"enter\". <br><strong>Instructor Note: </strong>Answer is not case sensitive, but there SHOULD NOT be a space between \"mobilelab\" and the hypenated number."
];

export function show_pingHostnameTextInfo(){
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

export function show_pingHostnameAnswerInfo(){
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

export function show_pingHostnameStudentInfo(){
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

/*** Ping IP Address ***/
export const pingIpAddressInfo_header = document.getElementsByClassName('pingIpAddressInfo_header');
export const pingIpAddressInfo_result = document.getElementById('pingIpAddressInfo_result');

export const pingIpAddressInfo_array = [
    "Chapter 14 - Connectivity Troubleshooting with Ping (page 269)",
    "IPv6 Address"
];

export function show_pingIpAddressTextInfo(){
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

export function show_pingIpAddressAnswerInfo(){
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

/*** Ping IPv4 Address ***/
export const pingIpv4AddressInfo_header = document.getElementsByClassName('pingIpv4AddressInfo_header');
export const pingIpv4AddressInfo1_result = document.getElementById('pingIpv4AddressInfo1_result');
export const pingIpv4AddressInfo2_result = document.getElementById('pingIpv4AddressInfo2_result');

export const pingIpv4AddressInfo_array = [
    // Ping IPv4 address
    "Chapter 14 - Connectivity Troubleshooting with Ping (page 270, 271)",
    "Student should reference the textbook on page 270 to locate the switch command \"-4\" that forces the IPv4 address instead of IPv6.",
    // Enter answer
    "Chapter 14 - Connectivity Troubleshooting with Ping (page 269)",
    "ping mobilelab-16 -4",
    "Enter answer and click \"Submit Answer\". <br><strong>Instructor Note: </strong>Answer is not case sensitive, but there SHOULD NOT be a space between \"mobilelab\" and the hypenated number, but there SHOULD be a space before the \"-4\" switch."
];
// Localhost Page 1 textbook info
export function show_pingIpv4AddressTextInfo_1(){
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

// Localhost Page 1 student action info
export function show_pingIpv4AddressStudentInfo_1(){
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

// Localhost Page 2 textbook info
export function show_pingIpv4AddressTextInfo_2(){
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

// Localhost Page 2 answer info
export function show_pingIpv4AddressAnswerInfo(){
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

// Localhost Page 2 student action info
export function show_pingIpv4AddressStudentInfo_2(){
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

/*** Ping - Host Unreachable ***/
export const pingHostUnreachable_header = document.getElementsByClassName('pingHostUnreachable_header');
export const pingHostUnreachableQ1_result = document.getElementById('pingHostUnreachableQ1_result');
export const pingHostUnreachableQ2_result = document.getElementById('pingHostUnreachableQ2_result');
export const pingHostUnreachableQ3_result = document.getElementById('pingHostUnreachableQ3_result');

export const pingHostUnreachableInfo_array = [
    "Chapter 14 - Connectivity Troubleshooting with Ping (page 270)",
    // Question 1 Answer
    "routing",
    // Question 2 Answer
    "default gateway",
    // Question 3 Answer
    "router"
];
// Ping host unreachable Question 1 textbook info
export function show_pingHostUnreachableTextInfo_1(){
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

// Ping host unreachable Question 1 answer info
export function show_pingHostUnreachableAnswerInfo_1(){
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


// Ping host unreachable Question 2 textbook info
export function show_pingHostUnreachableTextInfo_2(){
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

// Ping host unreachable Question 2 answer info
export function show_pingHostUnreachableAnswerInfo_2(){
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

// Ping host unreachable Question 3 textbook info
export function show_pingHostUnreachableTextInfo_3(){
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

// Ping host unreachable Question 3 answer info
export function show_pingHostUnreachableAnswerInfo_3(){
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
