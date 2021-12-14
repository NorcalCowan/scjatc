

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


const homeIcon = document.getElementById('homeIcon');
function goHome(){
    location.href = "home.html";
}
homeIcon.addEventListener('click', goHome);

/*** EXPORT VARIABLES AND FUNCTIONS ***/
export{
    hamIcon,
    openNav,
    x_symbol,
    closeNav,
    completeLesson,
    section_array,
    hideSections,
    showSections,
    onClick,
    nav,
    homeIcon,
    goHome
}