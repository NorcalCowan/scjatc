

const hamIcon = document.getElementById("hamIcon");
hamIcon.addEventListener('click', openNav);
function openNav() {
    document.getElementById("Sidenav").style.width = "50%";
}
  
/* Set the width of the side navigation to 0 */
function closeNav() {
document.getElementById("Sidenav").style.width = "0";
}

const completeLesson = document.getElementById('completeLesson');
const section_array = document.getElementsByTagName('section');
function hideSections(){
    for(i=0; i<section_array.length; i++){
        section_array[i].style.display = 'none'; 
    }
}
function showSections(){
    for(i=0; i<section_array.length; i++){
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
for(i=0; i<nav.length; i++){
    nav[i].addEventListener('click', onClick);
}