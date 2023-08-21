const monthEl = document.querySelector(".date h1");
const fulldateEl = document.querySelector(".date p");
const daysEl = document.querySelector(".days");

const monthInx = new Date().getMonth();
const lastday = new Date(new Date().getFullYear()
,monthInx + 1,0).getDate();
const firstday = new Date(new Date().getFullYear()
,monthInx,1).getDay() -1;

const months = 
[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

monthEl.InnerText = months[monthInx];
fulldateEl.InnerText = new Date().toDateString();


let days = "";

for(let i = 1; i<=firstday; i--) {
    days += <div class = "empty"></div>;
 }

 for(let i = 1; i<=lastday; i++) {
    if (i === new Date().getDate()){
        days += <div class ="today">${i}</div>;
    }
    else{
    days += <div>${i}</div>;
    }
 }

 daysEl.innerHTML = days;

