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

const homeBtn = document.getElementById('homeBtn');
function goHome(){
    window.location.href = 'file:///Applications/XAMPP/xamppfiles/htdocs/scjatc/eap/index.html';
}
homeBtn.addEventListener('click', goHome);
