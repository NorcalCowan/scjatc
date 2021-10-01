

/*** What's a Bit ***/
const whatsBitInfo_header = document.getElementsByClassName('whatsBitInfo_header');
const whatsBitInfo_result = document.getElementById('whatsBitInfo_result');

const whatsBitInfo_array = [
    "Chapter 6 - The Bits of an IP Address (page 117)",
    "4",
    "Enter answer as a number and click submit"
];

function show_WhatsBitTextInfo(){
    if(whatsBitInfo_result.innerHTML === whatsBitInfo_array[0]){
        whatsBitInfo_result.innerHTML = ' ';
        whatsBitInfo_header[0].style.color = "black";
    } else {
        whatsBitInfo_result.innerHTML = whatsBitInfo_array[0];
        whatsBitInfo_header[0].style.color = "blue";

        whatsBitInfo_header[1].style.color = "black";
        whatsBitInfo_header[2].style.color = "black";
    } 
}

function show_WhatsBitAnswerInfo(){
    if(whatsBitInfo_result.innerHTML === whatsBitInfo_array[1]){
        whatsBitInfo_result.innerHTML = ' ';
        whatsBitInfo_header[1].style.color = "black";
    } else {
        whatsBitInfo_result.innerHTML = whatsBitInfo_array[1];
        whatsBitInfo_header[1].style.color = "blue";

        whatsBitInfo_header[0].style.color = "black";
        whatsBitInfo_header[2].style.color = "black";
    } 
}

function show_WhatsBitStudentInfo(){
    if(whatsBitInfo_result.innerHTML === whatsBitInfo_array[2]){
        whatsBitInfo_result.innerHTML = ' ';
        whatsBitInfo_header[2].style.color = "black";
    } else {
        whatsBitInfo_result.innerHTML = whatsBitInfo_array[2];
        whatsBitInfo_header[2].style.color = "blue";

        whatsBitInfo_header[0].style.color = "black";
        whatsBitInfo_header[1].style.color = "black";
    } 
}

/*** What's a Byte ***/
const whatsByteInfo_header = document.getElementsByClassName('whatsByteInfo_header');
const whatsByteInfo_result = document.getElementById('whatsByteInfo_result');

const whatsByteInfo_array = [
    "Chapter 6 - The Bytes of an IP Address (page 117)",
    "3",
    "Enter answer as a number and click submit"
];

function show_WhatsByteTextInfo(){
    if(whatsByteInfo_result.innerHTML === whatsByteInfo_array[0]){
        whatsByteInfo_result.innerHTML = ' ';
        whatsByteInfo_header[0].style.color = "black";
    } else {
        whatsByteInfo_result.innerHTML = whatsByteInfo_array[0];
        whatsByteInfo_header[0].style.color = "blue";

        whatsByteInfo_header[1].style.color = "black";
        whatsByteInfo_header[2].style.color = "black";
    } 
}

function show_WhatsByteAnswerInfo(){
    if(whatsByteInfo_result.innerHTML === whatsByteInfo_array[1]){
        whatsByteInfo_result.innerHTML = ' ';
        whatsByteInfo_header[1].style.color = "black";
    } else {
        whatsByteInfo_result.innerHTML = whatsByteInfo_array[1];
        whatsByteInfo_header[1].style.color = "blue";

        whatsByteInfo_header[0].style.color = "black";
        whatsByteInfo_header[2].style.color = "black";
    } 
}

function show_WhatsByteStudentInfo(){
    if(whatsByteInfo_result.innerHTML === whatsByteInfo_array[2]){
        whatsByteInfo_result.innerHTML = ' ';
        whatsByteInfo_header[2].style.color = "black";
    } else {
        whatsByteInfo_result.innerHTML = whatsByteInfo_array[2];
        whatsByteInfo_header[2].style.color = "blue";

        whatsByteInfo_header[0].style.color = "black";
        whatsByteInfo_header[1].style.color = "black";
    } 
}

/*** Converting Binary to Decimal ***/
const convertBinDecInfo_header = document.getElementsByClassName('convertBinDecInfo_header');
const convertBinDecInfo_result = document.getElementById('convertBinDecInfo_result');

const convertBinDecInfo_array = [
    "Student should click on the 1 bits that are indicated as ON"
];

function show_ConvertBinDecStudentInfo(){
    if(convertBinDecInfo_result.innerHTML === convertBinDecInfo_array[0]){
        convertBinDecInfo_result.innerHTML = ' ';
        convertBinDecInfo_header[0].style.color = "black";
    } else {
        convertBinDecInfo_result.innerHTML = convertBinDecInfo_array[0];
        convertBinDecInfo_header[0].style.color = "blue";
    } 
}

/*** PRACTICE: Convert Binary to Decimal ***/
const practiceConvBinDec_header = document.getElementsByClassName('practiceConvBinDec_header');
const practiceConvBinDecInfo_result = document.getElementById('practiceConvBinDecInfo_result');

const practiceConvBinDecInfo_array = [
    "Chapter 6 - The Bytes of an IP Address (page 118, Figure 6-9)",
    "168",
    "Enter answer as a number and click submit"
];

function show_PracticeConvBinDecTextInfo(){
    if(practiceConvBinDecInfo_result.innerHTML === practiceConvBinDecInfo_array[0]){
        practiceConvBinDecInfo_result.innerHTML = ' ';
        practiceConvBinDec_header[0].style.color = "black";
    } else {
        practiceConvBinDecInfo_result.innerHTML = practiceConvBinDecInfo_array[0];
        practiceConvBinDec_header[0].style.color = "blue";

        practiceConvBinDec_header[1].style.color = "black";
        practiceConvBinDec_header[2].style.color = "black";
    } 
}

function show_PracticeConvBinDecAnswerInfo(){
    if(practiceConvBinDecInfo_result.innerHTML === practiceConvBinDecInfo_array[1]){
        practiceConvBinDecInfo_result.innerHTML = ' ';
        practiceConvBinDec_header[1].style.color = "black";
    } else {
        practiceConvBinDecInfo_result.innerHTML = practiceConvBinDecInfo_array[1];
        practiceConvBinDec_header[1].style.color = "blue";

        practiceConvBinDec_header[0].style.color = "black";
        practiceConvBinDec_header[2].style.color = "black";
    } 
}

function show_PracticeConvBinDecStudentInfo(){
    if(practiceConvBinDecInfo_result.innerHTML === practiceConvBinDecInfo_array[2]){
        practiceConvBinDecInfo_result.innerHTML = ' ';
        practiceConvBinDec_header[2].style.color = "black";
    } else {
        practiceConvBinDecInfo_result.innerHTML = practiceConvBinDecInfo_array[2];
        practiceConvBinDec_header[2].style.color = "blue";

        practiceConvBinDec_header[0].style.color = "black";
        practiceConvBinDec_header[1].style.color = "black";
    } 
}

/*** Converting Decimal to Binary ***/
const convertDecBin_header = document.getElementsByClassName('convertDecBin_header');
const convertDecBinInfo_result = document.getElementById('convertDecBinInfo_result');

const convertDecBinInfo_array = [
    "Student should click on the 0 bit with value of 64 to change it to a 1"
];

function show_ConvertDecBinStudentInfo(){
    if(convertDecBinInfo_result.innerHTML === convertDecBinInfo_array[0]){
        convertDecBinInfo_result.innerHTML = ' ';
        convertDecBin_header[0].style.color = "black";
    } else {
        convertDecBinInfo_result.innerHTML = convertDecBinInfo_array[0];
        convertDecBin_header[0].style.color = "blue";
    } 
}

/*** Converting Decimal to Binary (Remainder) ***/
const convertDecBinRemainder_header = document.getElementsByClassName('convertDecBinRemainder_header');
const convertDecBinRemainderInfo1_result = document.getElementById('convertDecBinRemainderInfo1_result');
const convertDecBinRemainderInfo2_result = document.getElementById('convertDecBinRemainderInfo2_result');
const convertDecBinRemainderInfo3_result = document.getElementById('convertDecBinRemainderInfo3_result');
const convertDecBinRemainderInfo4_result = document.getElementById('convertDecBinRemainderInfo4_result');
const convertDecBinRemainderInfo5_result = document.getElementById('convertDecBinRemainderInfo5_result');

const convertDecBinRemainderInfo_array = [
    "Student should click on the 0 bit with value of 64 to change it to a 1",
    "Student should click on the 0 bit with value of 32 to change it to a 1",
    "Student should click on the 0 bit with value of 16 to change it to a 1",
    "Student should click on the 0 bit with value of 4 to change it to a 1",
    "Student should click on the 0 bit with value of 1 to change it to a 1"
];

// Step 1 info
function show_ConvertDecBinRemainderStudentInfo_1(){
    console.log("student actions clicked");
    if(convertDecBinRemainderInfo1_result.innerHTML === convertDecBinRemainderInfo_array[0]){
        console.log("info hide");
        convertDecBinRemainderInfo1_result.innerHTML = ' ';
        convertDecBinRemainder_header[0].style.color = "black";
    } else {
        console.log("info display")
        convertDecBinRemainderInfo1_result.innerHTML = convertDecBinRemainderInfo_array[0];
        convertDecBinRemainder_header[0].style.color = "blue";
    } 
}

// Step 2 info
function show_ConvertDecBinRemainderStudentInfo_2(){
    if(convertDecBinRemainderInfo2_result.innerHTML === convertDecBinRemainderInfo_array[1]){
        convertDecBinRemainderInfo2_result.innerHTML = ' ';
        convertDecBinRemainder_header[1].style.color = "black";
    } else {
        convertDecBinRemainderInfo2_result.innerHTML = convertDecBinRemainderInfo_array[1];
        convertDecBinRemainder_header[1].style.color = "blue";
    } 
}

// Step 3 info
function show_ConvertDecBinRemainderStudentInfo_3(){
    if(convertDecBinRemainderInfo3_result.innerHTML === convertDecBinRemainderInfo_array[2]){
        convertDecBinRemainderInfo3_result.innerHTML = ' ';
        convertDecBinRemainder_header[2].style.color = "black";
    } else {
        convertDecBinRemainderInfo3_result.innerHTML = convertDecBinRemainderInfo_array[2];
        convertDecBinRemainder_header[2].style.color = "blue";
    } 
}

// Step 4 info
function show_ConvertDecBinRemainderStudentInfo_4(){
    if(convertDecBinRemainderInfo4_result.innerHTML === convertDecBinRemainderInfo_array[3]){
        convertDecBinRemainderInfo4_result.innerHTML = ' ';
        convertDecBinRemainder_header[3].style.color = "black";
    } else {
        convertDecBinRemainderInfo4_result.innerHTML = convertDecBinRemainderInfo_array[3];
        convertDecBinRemainder_header[3].style.color = "blue";
    } 
}

// Step 5 info
function show_ConvertDecBinRemainderStudentInfo_5(){
    if(convertDecBinRemainderInfo5_result.innerHTML === convertDecBinRemainderInfo_array[4]){
        convertDecBinRemainderInfo5_result.innerHTML = ' ';
        convertDecBinRemainder_header[4].style.color = "black";
    } else {
        convertDecBinRemainderInfo5_result.innerHTML = convertDecBinRemainderInfo_array[4];
        convertDecBinRemainder_header[4].style.color = "blue";
    } 
}

/*** Binary and IP Addresses ***/
const binIpAddress_header = document.getElementsByClassName('binIpAddress_header');
const binIpAddress_result = document.getElementById('binIpAddress_result');

const binIpAddressInfo_array = [
    "Chapter 6 - The Bytes of an IP Address (page 118-119)",
];

function show_binIpAddressTextInfo(){
    if(binIpAddress_result.innerHTML === binIpAddressInfo_array[0]){
        binIpAddress_result.innerHTML = ' ';
        binIpAddress_header[0].style.color = "black";
    } else {
        binIpAddress_result.innerHTML = binIpAddressInfo_array[0];
        binIpAddress_header[0].style.color = "blue";
    } 
}

/*** Setting Dip Switches ***/
const setDipSwitch_header = document.getElementsByClassName('setDipSwitch_header');
const setDipSwitchInfo_result = document.getElementById('setDipSwitchInfo_result');

const setDipSwitchInfo_array = [
    "Dip switch 2 and 3 set to ON"
];

function show_setDipSwitchAnswerInfo(){
    if(setDipSwitchInfo_result.innerHTML === setDipSwitchInfo_array[0]){
        setDipSwitchInfo_result.innerHTML = ' ';
        setDipSwitch_header[0].style.color = "black";
    } else {
        setDipSwitchInfo_result.innerHTML = setDipSwitchInfo_array[0];
        setDipSwitch_header[0].style.color = "blue";
    } 
}

/*** Binary Assessment ***/
const binaryAssessment_header = document.getElementsByClassName('binaryAssessment_header');
const binaryAssessmentQ1Info_result = document.getElementById('binaryAssessmentQ1Info_result');
const binaryAssessmentQ2Info_result = document.getElementById('binaryAssessmentQ2Info_result');
const binaryAssessmentQ3Info_result = document.getElementById('binaryAssessmentQ3Info_result');
const binaryAssessmentQ4Info_result = document.getElementById('binaryAssessmentQ4Info_result');

const binAssInfo_array = [
    "Bit",
    "8",
    "10101010",
    "Set addresses on components and devices"
];

function show_binAssQ1AnswerInfo(){
    if(binaryAssessmentQ1Info_result.innerHTML === binAssInfo_array[0]){
        binaryAssessmentQ1Info_result.innerHTML = ' ';
        binaryAssessment_header[0].style.color = "black";
    } else {
        binaryAssessmentQ1Info_result.innerHTML = binAssInfo_array[0];
        binaryAssessment_header[0].style.color = "blue";
    } 
}

function show_binAssQ2AnswerInfo(){
    if(binaryAssessmentQ2Info_result.innerHTML === binAssInfo_array[1]){
        binaryAssessmentQ2Info_result.innerHTML = ' ';
        binaryAssessment_header[1].style.color = "black";
    } else {
        binaryAssessmentQ2Info_result.innerHTML = binAssInfo_array[1];
        binaryAssessment_header[1].style.color = "blue";
    } 
}

function show_binAssQ3AnswerInfo(){
    if(binaryAssessmentQ3Info_result.innerHTML === binAssInfo_array[2]){
        binaryAssessmentQ3Info_result.innerHTML = ' ';
        binaryAssessment_header[2].style.color = "black";
    } else {
        binaryAssessmentQ3Info_result.innerHTML = binAssInfo_array[2];
        binaryAssessment_header[2].style.color = "blue";
    } 
}

function show_binAssQ4AnswerInfo(){
    if(binaryAssessmentQ4Info_result.innerHTML === binAssInfo_array[3]){
        binaryAssessmentQ4Info_result.innerHTML = ' ';
        binaryAssessment_header[3].style.color = "black";
    } else {
        binaryAssessmentQ4Info_result.innerHTML = binAssInfo_array[3];
        binaryAssessment_header[3].style.color = "blue";
    } 
}

/*** Exported variables/functions ***/

export{
    // What's a bit
    whatsBitInfo_header,
    whatsBitInfo_result,
    whatsBitInfo_array,
    show_WhatsBitTextInfo,
    show_WhatsBitAnswerInfo,
    show_WhatsBitStudentInfo,
    //What's a byte
    whatsByteInfo_header,
    whatsByteInfo_result,
    whatsByteInfo_array,
    show_WhatsByteTextInfo,
    show_WhatsByteAnswerInfo,
    show_WhatsByteStudentInfo,
    // Converting Binary to Decimal
    convertBinDecInfo_header,
    convertBinDecInfo_result,
    convertBinDecInfo_array,
    show_ConvertBinDecStudentInfo,
    // PRACTICE: Convert Binary to Decimal
    practiceConvBinDec_header,
    practiceConvBinDecInfo_result,
    practiceConvBinDecInfo_array,
    show_PracticeConvBinDecTextInfo,
    show_PracticeConvBinDecAnswerInfo,
    show_PracticeConvBinDecStudentInfo,
    // Coverting Decimal to Binary
    convertDecBin_header,
    convertDecBinInfo_result,
    convertDecBinInfo_array,
    show_ConvertDecBinStudentInfo,
    // Converting Decimal to Binary (Remainder)
    convertDecBinRemainder_header, 
    convertDecBinRemainderInfo1_result, 
    convertDecBinRemainderInfo2_result, 
    convertDecBinRemainderInfo3_result, 
    convertDecBinRemainderInfo4_result, 
    convertDecBinRemainderInfo5_result, 
    convertDecBinRemainderInfo_array,
    show_ConvertDecBinRemainderStudentInfo_1,
    show_ConvertDecBinRemainderStudentInfo_2,
    show_ConvertDecBinRemainderStudentInfo_3,
    show_ConvertDecBinRemainderStudentInfo_4,
    show_ConvertDecBinRemainderStudentInfo_5,
    // Binary and IP Addresses
    binIpAddress_header,
    binIpAddress_result,
    binIpAddressInfo_array,
    show_binIpAddressTextInfo,
    // Setting Dip Switches
    setDipSwitch_header,
    setDipSwitchInfo_result,
    setDipSwitchInfo_array,
    show_setDipSwitchAnswerInfo,
    // Binary Assessment
    binaryAssessment_header, 
    binaryAssessmentQ1Info_result, 
    binaryAssessmentQ2Info_result, 
    binaryAssessmentQ3Info_result, 
    binaryAssessmentQ4Info_result, 
    binAssInfo_array,
    show_binAssQ1AnswerInfo,
    show_binAssQ2AnswerInfo,
    show_binAssQ3AnswerInfo,
    show_binAssQ4AnswerInfo
}