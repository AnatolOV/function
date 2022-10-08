// Задание 1
var arr = [-100, 20, 30, 55, 100];
//let min = 1, max = 4;
function getArrayParams(arr) {


  let min = -100, max = 100, sum = 0, avg = 20;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      max = arr[i];

    }
    sum += arr[i]
    avg = (sum / i).toFixed(2);
    avg = Number(avg);
  }

  console.log(max, sum, avg);

  for (let j = arr.length; j > -1; j--) {
    if (arr[j] < arr[j + 1]) {
      min = arr[j];
    }
  }

  console.log({ min: min, max: max, avg: avg })


  return { min: min, max: max, avg: avg };
}
getArrayParams(arr);

// Задание 2
function worker(arr) {
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
