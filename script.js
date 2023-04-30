const hrs = document.querySelector("#hr");
const mins = document.querySelector("#min");
const secs = document.querySelector("#sec");
const date_name = document.querySelector("#date-name");
const date_num = document.querySelector("#date-num");
const month_name = document.querySelector("#month-name");
const year = document.querySelector("#year-num");

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const days = ["Sun", "Mon", "Tus", "Wed", "Thu", "Fri", "Sat"];

function animationFrame() {
  window.requestAnimationFrame(animationFrame);

  const date = new Date();

  hrs.innerHTML = `${date.getHours()} :`;
  mins.innerHTML = `${date.getMinutes()} :`;
  secs.innerHTML = date.getSeconds();

  const day = date.getDay();
  date_name.innerHTML = days[day];
  date_num.innerHTML = day;
  //   console.log(day);

  const month = date.getMonth();
  month_name.innerHTML = months[month];
  //   console.log(month);

  year.innerHTML = date.getFullYear();
}
animationFrame();

const getTime = setInterval(() => {
  const Hr = document.querySelector(".Hr");
  const Min = document.querySelector(".Min");
  const Sec = document.querySelector(".Sec");

  let time = new Date();

  let strokeHr = time.getHours();
  let strokeMin = time.getMinutes();
  let strokeSec = time.getSeconds();

  let calc_hr = strokeHr * 30 + strokeMin / 2;
  let calc_min = strokeMin * 6 + strokeSec / 10;
  let calc_sec = strokeSec * 6;

  Hr.style.transform = `rotate(${calc_hr}deg)`;
  Min.style.transform = `rotate(${calc_min}deg)`;
  Sec.style.transform = `rotate(${calc_sec}deg)`;
}, 1000);
