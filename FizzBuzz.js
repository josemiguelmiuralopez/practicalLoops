//Fizz Buzz
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizz Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i)
  }
}

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