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
