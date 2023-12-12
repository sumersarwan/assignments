function update() {
  const currentDate = new Date();

  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();
  let half = "AM";

  if (hours >= 12) {
    half = "PM";
    hours = hours % 12 || 12;
  }
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  console.log(`${hours}:${minutes}:${seconds} ${half}`);
  setTimeout(update, 1000);
}

update();
