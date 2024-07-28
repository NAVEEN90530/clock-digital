let weekbox = document.querySelector(".container .pre-container .weeks");

let weeks = ['SUN' , 'MON' , 'TUE' , 'WED' , 'THU' , 'FRI' , 'SAT'];

let li = '';

let getWeeks =()=>{
    weeks.forEach((week)=>{
        li += `<span>${week}</span>`;
    })
    weekbox.innerHTML = li;
}

getWeeks()

let d = new Date();
let day = d.getDay();

let currDay = weekbox.querySelectorAll("span")[day];
currDay.classList.add("curr-day")

let container = document.querySelector(".container");
let toggleBtn = document.querySelector(".toogle-btn");

toggleBtn.addEventListener("click", () => {
    container.classList.toggle("dark");
    if (container.classList.contains("dark")) {
        toggleBtn.innerHTML = `<i class="fa-regular fa-sun"></i>`;
        toggleBtn.style.background = "#fff";
        toggleBtn.style.color = "#272e38";
    } else {
        toggleBtn.innerHTML = `<i class="fa-regular fa-moon"></i>`;
        toggleBtn.style.background = "#272e38";
        toggleBtn.style.color = "#fff";
    }
});

let hour = document.querySelector(".container .pre-container .timer .hour");

let minute = document.querySelector(".container .pre-container .timer .min");

let second = document.querySelector(".container .pre-container .timer .sec");

let num = 0;

let getTime =()=>{
    let d = new Date();
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();

    if(hr >12){
        hr = hr-12;
        num = 1
    }
    hr < 10 ? hr = "0" + hr :hr ;
    min < 10 ? min = "0" + min :min ;
    sec < 10 ? sec = "0" + sec :sec ;

    hour.innerHTML = hr;
    minute.innerHTML = min;
    second.innerHTML = sec;


    let meridiem = document.querySelectorAll(".container .pre-container .meridien span")[num];
    meridiem.classList.add("curr-time-period");
}

setInterval(getTime,1000)