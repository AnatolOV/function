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

var arr = [1, 2, 3];

function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}


var arrOfArr = [[1, 2, 3, 4], [10, 20, -10, -20], [1, 34, 344]];



function makeWork(arrOfArr, func) {
  let max = 0;

  for (let i = 0; i < arrOfArr.length; i++) {
    max = worker(arrOfArr[i]);
    console.log(max + ` Сумма в массиве ${i + 1}`);

    if (worker(arrOfArr[i + 1]) > worker(arrOfArr[i])) {
      max = worker(arrOfArr[i + 1]);
      console.log(max + ' максимальный максимум');
    } else {
      max = worker(arrOfArr[i]);
    }

  }
  return max;
}
makeWork(arrOfArr, worker);

// Задание 3
function worker2(arr) {
  // Ваш код
}
