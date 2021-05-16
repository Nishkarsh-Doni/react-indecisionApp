// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//live-server public/   

class Person {
constructor(name = "Anonymous", age = 0){
    this.name = name;
    this.age = age;
}

getGreetings() {
return `${this.name} is ${this.age} old!`
}
}

const me = new Person('Nishkarsh',22);
console.log(me.getGreetings());