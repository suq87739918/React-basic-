/**
 * 1.
 * var myName = 'Max';
 * console.log(myName);
 * 
 * myName = 'Manu';
 * console.log(myName);      会返回“Max”和“Manu”
 * 
 * 2.
 * let myName = 'Max';
 * console.log(myName);
 * 
 * myName = 'Manu';
 * console.log(myName);      会返回“Max”和“Manu”
 * 
 * 3.
 * const myName = 'Max';
 * console.log(myName);
 * 
 * myName = 'Manu';
 * console.log(myName);      会返回“Max”并报错，因为在第二部分里尝试对第一部分的Const值做出改变
 */
//返回名字
const printMyName = (name) => {
    console.log(name);
}
printMyName('Max');
//数字计算
const multiply = (number) => {
    return number * 2;
  }
  console.log(multiply(2));



  /**
   * 1.default export:
   *    import person from './person.js'
   * 2.named export:
   *    import {smth} from './utility.js'
   *    import * as bundle from './utility.js'          从utility.js引入所有内容，并命名为bundle
   */
   class Person{
    constructor(){
      this.name = "MAX";
    }
    printMyName(){
      console.log(this.name);
    }
  }
  const person = new Person();
  person.printMyName();



  class Human{
    constructor(){
      this.gender = 'male';
    }
    printGender(){
      conosole.log(this.gender);
    }
  }
  
  class Person extends Human{        //使Person中也有Human的信息
    constructor(){
      super();             //使用extends后需要super();
      this.name = "MAX";
    }
    printMyName(){
      console.log(this.name);
    }
  }
  const person = new Person();
  person.printMyName();
  person.printGender();



  class Human{
    gender = 'male';
    printGender = () => {
      conosole.log(this.gender);
    }
  }
  
  class Person extends Human{
    name = "MAX";
  }
    printMyName = () => {
      console.log(this.name);
    }
  }
  const person = new Person();
  person.printMyName();
  person.printGender();


  /**
   * 1.Spread: ...   扩展运算符
   *    Used to split up array elements OR object properties
   *    EX: const newArray = [...oldArray,1,2]      --->  新的Array是旧的Array加上1，2
   *        const newObject = {...oldObject,newProp:5}      
   * 2.Rest: ...     REST运算符
   *    Used to merge a list of function arguments into an array
   *    EX: function sortArgs(...args){ return args.sort }
   */
   const numbers = [1,2,3];
   const newNumber = [...numbers,4];
   console.log(newNumber);

   const arr = ['apple', 'banana', 'car'];
   function fn(...args) {// 作为rest运算符
   console.log(args);
   };
   fn(...arr);// 作为扩展运算符
   // ["apple", "banana", "car"]
   console.log(...arr);
   // apple banana car



   const person2 = {
    name : 'Max'
   }
   const NewPerson = {
    ...person2
    age2 : 28
   }
   console.log(NewPerson)     //输出为，name: Max, age:28，第二项里的...person2继承了person2里的数据



   /**
    * Destructuring:
    *   Easily extract array elements or object properties and store them in variables
    *   [a,b] = ["Hello","Max"]
    *   console.log(a)   =   Hello
    *   console.log(b)   =   Max
    * 
    *   {name} = {name:"Max", age: 28}
    *   console.log(name) = Max
    *   console.log(age) = undefined
    */
   //Array Destructuring:
   const numbersArray = [1,2,3];
   [num1,num2] = numbersArray
   console.log(num1,num2)           //输出为1，2
   [num1, ,num3] = numbersArray
   console.log(num1,num3)           //输出为1，3




   //Array Function
   const numbers3 = [1,2,3];
   const DoubleNumber3 = numbers3.map((num) => {
    return numbers3 * 3;
   })
   console.log(numbers3);     //输出结果[1,2,3]
   console.log(DoubleNumber3);    //输出结果[3,6,9]




   

   
