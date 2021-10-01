
 
const hamIcon = document.getElementById("hamIcon");
hamIcon.addEventListener('click', openNav);
function openNav() {
    document.getElementById("Sidenav").style.width = "50%";
}
  
/* Set the width of the side navigation to 0 */
const x_symbol = document.getElementById("x_symbol");
x_symbol.addEventListener('click', closeNav);
function closeNav() {
document.getElementById("Sidenav").style.width = "0";
}


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
    // setTimeout(closeNav, 1000);
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

    // setTimeout(closeNav, 1000);
}
const nav = document.getElementsByClassName('nav');
for(let i=0; i<nav.length; i++){
    nav[i].addEventListener('click', onClick);
}

/*** ipconfig / all ***/
const ipconfigAllInfo_header = document.getElementsByClassName('ipconfigAllInfo_header');
const ipconfigAllInfo_result = document.getElementById('ipconfigAllInfo_result');

const ipconfigAllInfo_array = [
    "Chapter 14 - TCP/IP Configuration Check with IPCONFIG (page 265)",
    "mobilelab-#",
    "Student should refer to the result of running the ipconfig /all command and find the host name of their laptop, then enter that as the answer. <br><strong>Instructor Note: </strong>Each apprentice will have a different number, but all will start with <q>mobilelab</q>."
];
// ipconfig/all Textbook info
function show_ipconfigAllTextInfo(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(ipconfigAllInfo_result.innerHTML === ipconfigAllInfo_array[0]){
            ipconfigAllInfo_result.innerHTML = ' ';
            ipconfigAllInfo_header[0].style.color = "black";
        } else {
            ipconfigAllInfo_result.innerHTML = ipconfigAllInfo_array[0];
            ipconfigAllInfo_header[0].style.color = "blue";
    
            ipconfigAllInfo_header[1].style.color = "black";
            ipconfigAllInfo_header[2].style.color = "black";
        } 
    }
    
}
ipconfigAllInfo_header[0].addEventListener('click', show_ipconfigAllTextInfo);

// ipconfig/all Answer info
function show_ipconfigAllAnswerInfo(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(ipconfigAllInfo_result.innerHTML === ipconfigAllInfo_array[1]){
            ipconfigAllInfo_result.innerHTML = ' ';
            ipconfigAllInfo_header[1].style.color = "black";
        } else {
            ipconfigAllInfo_result.innerHTML = ipconfigAllInfo_array[1];
            ipconfigAllInfo_header[1].style.color = "blue";

            ipconfigAllInfo_header[0].style.color = "black";
            ipconfigAllInfo_header[2].style.color = "black";
        } 
    }
}
ipconfigAllInfo_header[1].addEventListener('click', show_ipconfigAllAnswerInfo);

// ipconfig/all Student action info
function show_ipconfigAllStudentInfo(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(ipconfigAllInfo_result.innerHTML === ipconfigAllInfo_array[2]){
            ipconfigAllInfo_result.innerHTML = ' ';
            ipconfigAllInfo_header[2].style.color = "black";
        } else {
            ipconfigAllInfo_result.innerHTML = ipconfigAllInfo_array[2];
            ipconfigAllInfo_header[2].style.color = "blue";

            ipconfigAllInfo_header[0].style.color = "black";
            ipconfigAllInfo_header[1].style.color = "black";
        } 
    }
}
ipconfigAllInfo_header[2].addEventListener('click', show_ipconfigAllStudentInfo);



/*** Network Interface Adapter ***/
const netIntAdaptInfo_header = document.getElementsByClassName('netIntAdaptInfo_header');
const netIntAdaptInfo_result = document.getElementById('netIntAdaptInfo_result');

const netIntAdaptInfo_array = [
    "Chapter 14 - TCP/IP Configuration Check with IPCONFIG (page 266, figure 14-3)",
    "Wireless LAN Adapter Wi-Fi",
    "Reference the result of their ipconfig /all command to identifty the network interface adapter being used. <br><strong>Instructor Note: </strong>Answer is not case sensitive, but should be entered as it appears in the ipconfig /all result."
];

// Network Interface Adapter textbook info
function show_netIntAdaptTextInfo(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(netIntAdaptInfo_result.innerHTML === netIntAdaptInfo_array[0]){
            netIntAdaptInfo_result.innerHTML = ' ';
            netIntAdaptInfo_header[0].style.color = "black";
        } else {
            netIntAdaptInfo_result.innerHTML = netIntAdaptInfo_array[0];
            netIntAdaptInfo_header[0].style.color = "blue";

            netIntAdaptInfo_header[1].style.color = "black";
            netIntAdaptInfo_header[2].style.color = "black";
        } 
    }
}
netIntAdaptInfo_header[0].addEventListener('click', show_netIntAdaptTextInfo);

// Network Interface Adapter answer info
function show_netIntAdaptAnswerInfo(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(netIntAdaptInfo_result.innerHTML === netIntAdaptInfo_array[1]){
            netIntAdaptInfo_result.innerHTML = ' ';
            netIntAdaptInfo_header[1].style.color = "black";
        } else {
            netIntAdaptInfo_result.innerHTML = netIntAdaptInfo_array[1];
            netIntAdaptInfo_header[1].style.color = "blue";

            netIntAdaptInfo_header[0].style.color = "black";
            netIntAdaptInfo_header[2].style.color = "black";
        } 
    }
}
netIntAdaptInfo_header[1].addEventListener('click', show_netIntAdaptAnswerInfo);

// Network Interface Adapter student action info
function show_netIntAdaptStudentInfo(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(netIntAdaptInfo_result.innerHTML === netIntAdaptInfo_array[2]){
            netIntAdaptInfo_result.innerHTML = ' ';
            netIntAdaptInfo_header[2].style.color = "black";
        } else {
            netIntAdaptInfo_result.innerHTML = netIntAdaptInfo_array[2];
            netIntAdaptInfo_header[2].style.color = "blue";

            netIntAdaptInfo_header[0].style.color = "black";
            netIntAdaptInfo_header[1].style.color = "black";
        }
    } 
}
netIntAdaptInfo_header[2].addEventListener('click', show_netIntAdaptStudentInfo);

/*** MAC Address ***/
const macAddressInfo_header = document.getElementsByClassName('macAddressInfo_header');
const macAddressInfo_result = document.getElementById('macAddressInfo_result');

const macAddressInfo_array = [
    "Chapter 14 - TCP/IP Configuration Check with IPCONFIG (page 266, figure 14-3)",
    "A0-AF-BD-65-8C-54"
];
// MAC address textbook info
function show_macAddressTextInfo(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(macAddressInfo_result.innerHTML === macAddressInfo_array[0]){
            macAddressInfo_result.innerHTML = ' ';
            macAddressInfo_header[0].style.color = "black";
        } else {
            macAddressInfo_result.innerHTML = macAddressInfo_array[0];
            macAddressInfo_header[0].style.color = "blue";

            macAddressInfo_header[1].style.color = "black";
        } 
    }
}
macAddressInfo_header[0].addEventListener('click', show_macAddressTextInfo);

// MAC address answer info
function show_macAddressAnswerInfo(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(macAddressInfo_result.innerHTML === macAddressInfo_array[1]){
            macAddressInfo_result.innerHTML = ' ';
            macAddressInfo_header[1].style.color = "black";
        } else {
            macAddressInfo_result.innerHTML = macAddressInfo_array[1];
            macAddressInfo_header[1].style.color = "blue";

            macAddressInfo_header[0].style.color = "black";
        }
    } 
}
macAddressInfo_header[1].addEventListener('click', show_macAddressAnswerInfo);


/*** Network ID Items ***/
const netIdItemsInfo_header = document.getElementsByClassName('netIdItemsInfo_header');
const netIdItemsInfo_result = document.getElementById('netIdItemsInfo_result');

const netIdItemsInfo_array = [
    "Chapter 14 - TCP/IP Configuration Check with IPCONFIG (page 266)",
    "IPv4 Address - 172.16.1.13 &#38 Subnet Mask - 255.255.252.0"
];

// Network ID items textbook info
function show_netIdItemsTextInfo(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(netIdItemsInfo_result.innerHTML === netIdItemsInfo_array[0]){
            netIdItemsInfo_result.innerHTML = ' ';
            netIdItemsInfo_header[0].style.color = "black";
        } else {
            netIdItemsInfo_result.innerHTML = netIdItemsInfo_array[0];
            netIdItemsInfo_header[0].style.color = "blue";

            netIdItemsInfo_header[1].style.color = "black";
        } 
    }
}
netIdItemsInfo_header[0].addEventListener('click', show_netIdItemsTextInfo);

// Network ID items answer info
function show_netIdItemsAnswerInfo(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(netIdItemsInfo_result.innerHTML === netIdItemsInfo_array[1]){
            netIdItemsInfo_result.innerHTML = ' ';
            netIdItemsInfo_header[1].style.color = "black";
        } else {
            netIdItemsInfo_result.innerHTML = netIdItemsInfo_array[1];
            netIdItemsInfo_header[1].style.color = "blue";

            netIdItemsInfo_header[0].style.color = "black";
        }
    } 
}
netIdItemsInfo_header[1].addEventListener('click', show_netIdItemsAnswerInfo);


/*** Network ID Creation ***/
const netIdCreationInfo_header = document.getElementsByClassName('netIdCreationInfo_header');
const netIdCreationInfo_result = document.getElementById('netIdCreationInfo_result');

const netIdCreationInfo_array = [
    "Chapter 14 - TCP/IP Configuration Check with IPCONFIG (page 266)",
    "172.16.1.0",
    "Student creates the network ID by dragging the numbers from the IPv4 Address and Subnet Mask address into the blue spaces below. Some of the spaces will not contain a number."
];
// Network ID Creation textbook info
function show_netIdCreationTextInfo(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(netIdCreationInfo_result.innerHTML === netIdCreationInfo_array[0]){
            netIdCreationInfo_result.innerHTML = ' ';
            netIdCreationInfo_header[0].style.color = "black";
        } else {
            netIdCreationInfo_result.innerHTML = netIdCreationInfo_array[0];
            netIdCreationInfo_header[0].style.color = "blue";

            netIdCreationInfo_header[1].style.color = "black";
        }
    } 
}
netIdCreationInfo_header[0].addEventListener('click', show_netIdCreationTextInfo);

// Network ID Creation answer info
function show_netIdCreationAnswerInfo(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(netIdCreationInfo_result.innerHTML === netIdCreationInfo_array[1]){
            netIdCreationInfo_result.innerHTML = ' ';
            netIdCreationInfo_header[1].style.color = "black";
        } else {
            netIdCreationInfo_result.innerHTML = netIdCreationInfo_array[1];
            netIdCreationInfo_header[1].style.color = "blue";

            netIdCreationInfo_header[0].style.color = "black";
        } 
    }
}
netIdCreationInfo_header[1].addEventListener('click', show_netIdCreationAnswerInfo);

// Network ID Creation student action info
function show_netIdCreationStudentInfo(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 1024) {
        if(netIdCreationInfo_result.innerHTML === netIdCreationInfo_array[2]){
            netIdCreationInfo_result.innerHTML = ' ';
            netIdCreationInfo_header[2].style.color = "black";
        } else {
            netIdCreationInfo_result.innerHTML = netIdCreationInfo_array[2];
            netIdCreationInfo_header[2].style.color = "blue";

            netIdCreationInfo_header[0].style.color = "black";
            netIdCreationInfo_header[1].style.color = "black";
        }
    } 
}
netIdCreationInfo_header[2].addEventListener('click', show_netIdCreationStudentInfo);




