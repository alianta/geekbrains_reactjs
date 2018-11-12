
/*
Задание 4
При помощи генератора написать функцию - анкету, которая запрашивает у пользователя на ввод параметры и передаёт их в генератор.
В конце, когда генератор завершается, он должен вернуть все введённые входные параметры в виде объекта.
Этот объект нужно вывести в консоли.
*/

  function* worksheet(){
    const name = prompt("Enter your name:");
    yield name;
    const surname = prompt("Enter your surname:");
    yield surname;
    const age = prompt("Enter your age:");
    yield age;
    return {'name':name, 'surname': surname, 'age': age};
  }

  const anket = worksheet();
  const firstIteration = anket.next(); // { value: 1, done: false }
  //console.log('firstIteration', firstIteration);
  const secondIteration = anket.next(); // { value: 2, done: false }
  //console.log('secondIteration', secondIteration);
  const thirdIteration = anket.next(); // { value: 3, done: true }
  //console.log('thirdIteration', thirdIteration);
  const forthIteration = anket.next(); // { value: undefined done: true }
  console.log('First variant:', forthIteration.value);

  /* Другой вариант*/
  let sequence = Object.assign({}, [...worksheet()]);
  console.log('Second variant:', sequence);


