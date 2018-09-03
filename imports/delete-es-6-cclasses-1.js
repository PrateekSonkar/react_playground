class Person6 {
  constructor(name = 'Anonymous',age = 0){
    console.log("Name : ",name);
    console.log("Age : ",age);
    this.name = name;
    this.age = age;
  }
  getGreeting(){
    return `Hi. my name is ${this.name}`;
  }
  getDescription(){
    return `${this.name} is ${this.age} year(s) old`;
  }
}

class Traveller1 extends Person6 {
  constructor(name,age,homeLocation){
    super(name,age)
    this.homeLocation = homeLocation;
  }

  getGreeting(){
    let greetings = super.getGreeting();
    if(!!this.homeLocation){
      greetings += ` I am from ${this.homeLocation}`
    }
    return greetings;
  }
}

const me6 = new Traveller1("Prateek",32,"Allahabad");
console.log(me6.getGreeting());

const other6 = new Traveller1();
console.log(other.getGreeting());