

/*
Задание 3
Необходимо написать иерархию классов вида:
Human -> Employee -> Developer
Human -> Employee -> Manager

Каждый Менеджер (Manager) должен иметь внутренний массив своих сотрудников (разработчиков),
а также методы по удалению/добавлению разработчиков.

Каждый Разработчик (Developer) должны иметь ссылку на Менеджера
и методы для изменения менеджера (имеется ввиду возможность назначить другого менеджера).

У класса Human должны быть следующие параметры:
name (строка),
age (число),
dateOfBirth (строка или дата).

У класса Employee должны присутствовать параметры:
salary (число),
department (строка).

В классе Human должен присутствовать метод displayInfo, который возвращает строку со всеми параметрами экземпляра Human.

В классе Employee должен быть реализовать такой же метод (displayInfo),
который вызывает базовый метод и дополняет его параметрами из экземпляра Employee.

Чтобы вызвать метод базового класса, необходимо внутри вызова метода displayInfo класса Employee написать:
super.displayInfo(), это вызовет метод disaplyInfo класс Human и вернет строку с параметрами Human'a.
*/

class Human{
  constructor(name, age, dateOfBirth) {
	if(typeof name == 'string'){
		this.name = name;
	}else{
		console.log("Wrong type of parametr 'name'. It should be string!");
	}
	
    if(typeof age == 'number'){
		this.age = age;
	}else{
		console.log("Wrong type of parametr 'age'. It should be number!");
	}
    if(typeof dateOfBirth == 'string' || typeof dateOfBirth == 'object'){
		this.dateOfBirth = dateOfBirth;
	}else{
		console.log("Wrong type of parametr 'dateOfBirth'. It should be string or data!");
	}
    
  }
  displayInfo(){
    return "name: "+this.name+ ", age: " + this.age + ", dateOfBirth: "+ this.dateOfBirth;
  }
}

class Employee extends Human{
  constructor(name, age, dateOfBirth, salary, department){
    super(name, age, dateOfBirth);
	if(typeof salary == 'number'){
		this.salary = salary;
	}else{
		console.log("Wrong type of parametr 'salary'. It should be number!");
	}
    if(typeof department == 'string'){
		this.department = department;
	}else{
		console.log("Wrong type of parametr 'department'. It should be string!");
	}
    
  }
  displayInfo(){
    return super.displayInfo() + ", salary: "+this.salary+ ", department: " + this.department
  }
}
class Developer extends Employee{
  constructor(name, age, dateOfBirth, salary, department){
    super(name, age, dateOfBirth, salary, department);
	this.manager = '';
  }
  setManager(manager) {
	this.manager = manager.name;
  }

}
class Manager extends Employee{
  constructor(name, age, dateOfBirth, salary, department){
    super(name, age, dateOfBirth, salary, department);
    this.developerList = [];
  }

  addDeveloper(newDev){
	//добавление разработчика
    this.developerList.push(newDev);
	newDev.manager = this.name;
  }
  remDeveloper(dev){
	//удаление разработчика
	let id = this.developerList.indexOf(dev);
	this.developerList.splice(id,1);
	dev.manager = '';
  }
}

let human1 = new Human("Человек1", 25, "12.07.2018");
console.log("human1:",human1.displayInfo()); // Вася
let human2 = new Human("Человек2", 70, "20.07.2018");
console.log("human2:",human2.displayInfo());

let employee1 = new Employee("Вася", 25, "12.07.2018", 800, "IT department");
console.log("employee1:",employee1.displayInfo()); // Вася
let employee2 = new Employee("Петя", 70, "20.07.2018", 1500, "Chef department");
console.log("employee1:",employee2.displayInfo());

let manager1 = new Manager("Менеджер Вася", 25, "12.07.2018", 800, "IT department");
console.log("manager1:",employee1.displayInfo()); // Вася
let manager2 = new Manager("Менеджер Петя", 70, "20.07.2018", 1500, "Chef department");
console.log("manager2:",employee2.displayInfo());

let developer1 = new Developer("Разрабочик Сергей", 10, "12.07.2018", 800, "department");
console.log("developer1:",employee1.displayInfo()); // Вася
let developer2 = new Developer("Разработчик Антон", 20, "20.07.2018", 1500, "department");
console.log("developer2:",employee2.displayInfo());

//добавление и удаление разработчика у менеджера
manager1.addDeveloper(developer1);
manager1.addDeveloper(developer2);
manager1.remDeveloper(developer2);
console.log("List of developers delete one developer fom list:",manager1.developerList)

//Менеджеры, которые назначены разработчикам
console.log("Manager if developer1:",developer1.manager)
console.log("Manager if developer2:",developer2.manager)

//смены менеджера для второго разработчика
console.log("Change manager to developer2.");
developer2.setManager(manager2);
console.log("New manager of developer2:",developer2.manager)
