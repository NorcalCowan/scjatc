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

const fullPlanBtn = document.getElementById('fullPlan_btn');
function showFullPlan(){
    window.location.href = 'views/eap_full-plan.html';
}
fullPlanBtn.addEventListener('click', showFullPlan);