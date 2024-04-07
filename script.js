const currentTaskTimes = document.querySelectorAll(".current_task_time");
const previousTaskTimes = document.querySelectorAll(".previous_task_time");
const dailyLink = document.querySelector(".link.daily");
const weeklyLink = document.querySelector(".link.weekly");
const monthlyLink = document.querySelector(".link.monthly");


async function getData() {
  try {
    const response = await fetch("./data.json");
    data = await response.json();
    return data;
  } catch(err){
    alert("somethine went wrong :(");
    return;
  }
}

async function showDaily() {
  const data = await getData();
  if (data) {
    data.forEach((data, index) => {
      currentTaskTimes[index].textContent = `${data.timeframes.daily.current}hrs`;
      previousTaskTimes[index].textContent = `${data.timeframes.daily.previous}hrs`;
    })
  }
}

async function showWeekly() {
  const data = await getData();
  if (data) {
    data.forEach((data, index) => {
      currentTaskTimes[index].textContent = `${data.timeframes.weekly.current}hrs`;
      previousTaskTimes[index].textContent = `${data.timeframes.weekly.previous}hrs`;
    })
  }
}

async function showMonthly() {
  const data = await getData();
  if (data) {
    data.forEach((data, index) => {
      currentTaskTimes[index].textContent = `${data.timeframes.monthly.current}hrs`;
      previousTaskTimes[index].textContent = `${data.timeframes.monthly.previous}hrs`;
    })
  }
}

function removeColor() {
  const links = document.querySelectorAll(".link");
  links.forEach(link => {
    link.style.color = "hsl(236, 100%, 87%)";
  })
}

dailyLink.addEventListener("click", () => {
  showDaily();
  removeColor();
  dailyLink.style.color = "white";
});

weeklyLink.addEventListener("click", () => {
  showWeekly();
  removeColor();
  weeklyLink.style.color = "white";
});

monthlyLink.addEventListener("click", () => {
  showMonthly();
  removeColor();
  monthlyLink.style.color = "white";
})


