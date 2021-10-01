/*** Get variables and functions from Binary module ***/
import * as Binary from './modules/binary.mjs';

/**** BINARY eventlistners ****/
// Whats a bit
Binary.whatsBitInfo_header[0].addEventListener('click', Binary.show_WhatsBitTextInfo);
Binary.whatsBitInfo_header[1].addEventListener('click', Binary.show_WhatsBitAnswerInfo);
Binary.whatsBitInfo_header[2].addEventListener('click', Binary.show_WhatsBitStudentInfo);
// What's a byte
Binary.whatsByteInfo_header[0].addEventListener('click', Binary.show_WhatsByteTextInfo);
Binary.whatsByteInfo_header[1].addEventListener('click', Binary.show_WhatsByteAnswerInfo);
Binary.whatsByteInfo_header[2].addEventListener('click', Binary.show_WhatsByteStudentInfo);
// Converting binary to decimal
Binary.convertBinDecInfo_header[0].addEventListener('click', Binary.show_ConvertBinDecStudentInfo);
Binary.practiceConvBinDec_header[0].addEventListener('click', Binary.show_PracticeConvBinDecTextInfo);
Binary.practiceConvBinDec_header[1].addEventListener('click', Binary.show_PracticeConvBinDecAnswerInfo);
Binary.practiceConvBinDec_header[2].addEventListener('click', Binary.show_PracticeConvBinDecStudentInfo);
// Converting decimal to binary
Binary.convertDecBin_header[0].addEventListener('click', Binary.show_ConvertDecBinStudentInfo);
// Converting decimal to binary (remainder)
Binary.convertDecBinRemainder_header[0].addEventListener('click', Binary.show_ConvertDecBinRemainderStudentInfo_1);
Binary.convertDecBinRemainder_header[1].addEventListener('click', Binary.show_ConvertDecBinRemainderStudentInfo_2);
Binary.convertDecBinRemainder_header[2].addEventListener('click', Binary.show_ConvertDecBinRemainderStudentInfo_3);
Binary.convertDecBinRemainder_header[3].addEventListener('click', Binary.show_ConvertDecBinRemainderStudentInfo_4);
Binary.convertDecBinRemainder_header[4].addEventListener('click', Binary.show_ConvertDecBinRemainderStudentInfo_5);
// Binary and IP addresses
Binary.binIpAddress_header[0].addEventListener('click', Binary.show_binIpAddressTextInfo);
// Setting dip switches
Binary.setDipSwitch_header[0].addEventListener('click', Binary.show_setDipSwitchAnswerInfo);
// Binary assessment
Binary.binaryAssessment_header[0].addEventListener('click', Binary.show_binAssQ1AnswerInfo);
Binary.binaryAssessment_header[1].addEventListener('click', Binary.show_binAssQ2AnswerInfo);
Binary.binaryAssessment_header[2].addEventListener('click', Binary.show_binAssQ3AnswerInfo);
Binary.binaryAssessment_header[3].addEventListener('click', Binary.show_binAssQ4AnswerInfo);

/*** Get variables and functions from Ping module ***/
import * as Ping from './modules/ping.mjs';



/*** Variables and functions used globally ***/
const hamIcon = document.getElementById("hamIcon");
hamIcon.addEventListener('click', openNav);
function openNav() {
    document.getElementById("Sidenav").style.width = "50%";
}
  
// Set the width of the side navigation to 0
const x_symbol = document.getElementById('x_symbol');
x_symbol.addEventListener('click', closeNav);
function closeNav() {
document.getElementById("Sidenav").style.width = "0";
}
// Section content
const completeLesson = document.getElementById('completeLesson');
const section_array = document.getElementsByTagName('section');
function hideSections(){
    for(let i=0; i<section_array.length; i++){
        section_array[i].style.display = 'none'; 
    }
}
function showSections(){
    for(let i=0; i<section_array.length; i++){
        section_array[i].style.display = 'block'; 
    }
}
completeLesson.addEventListener('click', showSections);


const onClick = (event) => {
    console.log(event.srcElement.id);
    let clickedID = event.srcElement.id;
    console.log(clickedID);
    hideSections();

    let section = document.querySelector('#section_' + clickedID);
    console.log(section);
    section.style.display = 'block';
}
const nav = document.getElementsByClassName('nav');
for(let i=0; i<nav.length; i++){
    nav[i].addEventListener('click', onClick);
}



/**** PING eventlistners ****/
// Ping localhost
Ping.pingLocalhostInfo_header[0].addEventListener('click', Ping.show_pingLocalHostTextInfo_1);
Ping.pingLocalhostInfo_header[1].addEventListener('click', Ping.show_pingLocalHostAnswerInfo_1);
Ping.pingLocalhostInfo_header[2].addEventListener('click', Ping.show_pingLocalHostStudentInfo_1);
Ping.pingLocalhostInfo_header[3].addEventListener('click', Ping.show_pingLocalHostTextInfo_2);
Ping.pingLocalhostInfo_header[4].addEventListener('click', Ping.show_pingLocalHostAnswerInfo_2);
Ping.pingLocalhostInfo_header[5].addEventListener('click', Ping.show_pingLocalHostStudentInfo_2);
// Ping hostname
Ping.pingHostnameInfo_header[0].addEventListener('click', Ping.show_pingHostnameTextInfo);
Ping.pingHostnameInfo_header[1].addEventListener('click', Ping.show_pingHostnameAnswerInfo);
Ping.pingHostnameInfo_header[2].addEventListener('click', Ping.show_pingHostnameStudentInfo);
// Ping IP Address
Ping.pingIpAddressInfo_header[0].addEventListener('click', Ping.show_pingIpAddressTextInfo);
Ping.pingIpAddressInfo_header[1].addEventListener('click', Ping.show_pingIpAddressAnswerInfo);
// Ping IPv4
Ping.pingIpv4AddressInfo_header[0].addEventListener('click', Ping.show_pingIpv4AddressTextInfo_1);
Ping.pingIpv4AddressInfo_header[1].addEventListener('click', Ping.show_pingIpv4AddressStudentInfo_1);
Ping.pingIpv4AddressInfo_header[2].addEventListener('click', Ping.show_pingIpv4AddressTextInfo_2);
Ping.pingIpv4AddressInfo_header[3].addEventListener('click', Ping.show_pingIpv4AddressAnswerInfo);
Ping.pingIpv4AddressInfo_header[4].addEventListener('click', Ping.show_pingIpv4AddressStudentInfo_2);
// Ping host unreachable
Ping.pingHostUnreachable_header[0].addEventListener('click', Ping.show_pingHostUnreachableTextInfo_1);
Ping.pingHostUnreachable_header[1].addEventListener('click', Ping.show_pingHostUnreachableAnswerInfo_1);
Ping.pingHostUnreachable_header[2].addEventListener('click', Ping.show_pingHostUnreachableTextInfo_2);
Ping.pingHostUnreachable_header[3].addEventListener('click', Ping.show_pingHostUnreachableAnswerInfo_2);
Ping.pingHostUnreachable_header[4].addEventListener('click', Ping.show_pingHostUnreachableTextInfo_3);
Ping.pingHostUnreachable_header[5].addEventListener('click', Ping.show_pingHostUnreachableAnswerInfo_3);
