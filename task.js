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
//Посчитайте, сколько раз у вас вызывается функция насадка внутри цикла 
//(на 55 строке, в условии дважды и внутри условия ещё раз). 
//Если переданная функция (насадка) будет сложной в вычислениях,
// то вы рискуете получить проблемы в производительности. Лучше было посчитать результат
// насадки один раз, сохранить в константу, а затем использовать это значение как при 
//проверке условия, так и при переприсвоении значения. (для соседних элементов функцию
// вызывать не нужно).
//???????
// Я не понимаю каким образом сохранить результат насадки один раз? Он же будет перезаписываться в цикле? Как потом использовать его, если он меняется?

function makeWork(arrOfArr, func) {
  let max = 0;

  for (let i = 0; i < arrOfArr.length; i++) {
    max = func(arrOfArr[i]);
    console.log(max + ` Сумма в массиве ${i + 1}`);

    if (func(arrOfArr[i + 1]) > func(arrOfArr[i])) {
      max = func(arrOfArr[i + 1]);
      console.log(max + ' максимальный максимум');
    } else {
      max = func(arrOfArr[i]);
    }

  }
  return max;
}


// Задание 3

function worker2(arr) {
  // Ваш код

  const max = Math.max.apply(null, numbers);
  const min = Math.min.apply(null, numbers);

  return Math.abs(max - min);
 
}

