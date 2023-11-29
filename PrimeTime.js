//Prime Time
const n = 10;

for (let i = n; true; i++) {
  let yesPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      yesPrime = false;
      break;
    }
  }

  if (yesPrime) {
    console.log(i);
    break;
  }
}