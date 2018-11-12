

/*
Задание 5
Написать цикл, который создаёт массив промисов,
внутри каждого промиса происходит обращение к ресурсу (https://jsonplaceholder.typicode.com/users/number),
где вместо number подставляется число от 1 до 10, в итоге должно получиться 10 промисов.
Следует дождаться выполнения загрузки всеми промисами и далее вывести массив загруженных данных
*/

  let promisArry = [];
  for(i = 1; i <= 10; i++){
    promisArry[i-1] = fetch('https://jsonplaceholder.typicode.com/users/'+ i).then(response => response.json()).then(json => json);
  };
  Promise.all(promisArry).then((successData) => {
    console.log('successData', successData);
  }).catch((error) => {
    console.log('Failed:', error);
  })

