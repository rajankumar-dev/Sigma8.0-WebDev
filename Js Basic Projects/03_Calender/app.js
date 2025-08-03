const container = document.querySelector(".container");
const month = document.querySelector(".month");
const days = document.querySelector(".days");
const date = document.querySelector(".date");
const year = document.querySelector(".year");

let currDate = new Date();
//For Months Name
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const monthName =monthNames[currDate.getMonth()];
month.innerText = monthName;


//For Days Name
const dayNumber = currDate.getDay();
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const weekdayName = weekdays[dayNumber];
days.innerText = weekdayName;

//For Date
date.innerText = currDate.getDate();

//For Year
year.innerText = currDate.getFullYear();