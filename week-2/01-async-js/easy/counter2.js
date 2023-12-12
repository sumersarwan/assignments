let count = 0;

function update() {
  count++;
  console.log(count);
  setTimeout(update, 1000);
}

update();
