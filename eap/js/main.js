'use strict';

const evacuationBtn = document.getElementById('evacuation-btn');
const evacuationInfo = document.getElementById('evacuation-info');

const fireBtn = document.getElementById('fire-btn');
const fireInfo = document.getElementById('fire-info');

const earthquakeBtn = document.getElementById('earthquake-btn');
const earthquakeInfo = document.getElementById('earthquake-info');

const intruderBtn = document.getElementById('intruder-btn');
const intruderInfo = document.getElementById('intruder-info');

const bombBtn = document.getElementById('bomb-btn');
const bombInfo = document.getElementById('bomb-info');

const dropCoverBtn = document.getElementById('dropCover-btn');
const dropCoverInfo = document.getElementById('dropCover-info');

const lockdownBtn = document.getElementById('lockdown-btn');
const lockdownInfo = document.getElementById('lockdown-info');

const crashBtn = document.getElementById('crash-btn');
const crashInfo = document.getElementById('crash-info');

const weatherBtn = document.getElementById('weather-btn');
const weatherInfo = document.getElementById('weather-info');

const shelterBtn = document.getElementById('shelter-btn');
const shelterInfo = document.getElementById('shelter-info');

const emergInfo_array = [
    evacuationInfo,
    fireInfo,
    earthquakeInfo,
    intruderInfo,
    bombInfo,
    dropCoverInfo,
    lockdownInfo,
    crashInfo,
    weatherInfo,
    shelterInfo
];

//  Create single function "showInfo"
const proceduresContainer = document.getElementById('procedures-container');

function showInfo(event){  
    let emerg = event.target.id;
    console.log(emerg);
    let emergInfo = document.getElementById(`${emerg}-info`);
    console.log(emergInfo);
    for(let i=0; i<emergInfo_array.length; i++){
        emergInfo_array[i].classList.add("hideInfo");
    }
    emergInfo.classList.toggle("hideInfo");
}
proceduresContainer.addEventListener('click', function(){ showInfo(event); });
