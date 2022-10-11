// Задание 1

function getArrayParams(arr) {
  let min = -Infinity, max = Infinity, sum = 0, avg = 20;
  max = Math.max.apply(null, arr);
  min = Math.min.apply(null, arr);
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  avg = (sum / arr.length).toFixed(2);
  avg = Number(avg);
  return { min: min, max: max, avg: avg };
}


// Задание 2

function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

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
var numbers = [5, 6, 2, 3, 7];
function worker2(arr) {
  // Ваш код
  const max = Math.max.apply(null, numbers);

  const min = Math.min.apply(null, numbers);

  return Math.abs(max - min);
 
}

