var sum = function(a){
    return function(b){
       return b?sum(a+b):a;
    }

}



// var add1 = sum(5);
// var add2 = add1(4);
// console.log(add2(6)());
// function makeAdder(x) {
//     return function(y) {
//       return x + y;
//     };
//   }
  
//   var add5 = makeAdder(5);
//   var add10 = makeAdder(10);
  
//   console.log(add5(2));  // 7
//   console.log(add10(2)); // 12

 


//   var max = function(){
//       console.log("max");
//   }
//   max();

//   min();

//   function min(){
//       console.log("min");
//   }

//   var salary = "1000$";

//   (function () {
//    // var salary = undefined;
//     console.log("Original salary was " + salary);
  
//     salary = "5000$";
  
//     console.log("My New Salary " + salary);
//   })();


  // var employee = {
  //   name:"ajay",
  //   address:{
  //     street:"sharma street",
  //     post:'joura',
  //     pincode:476221
  //   },
  //   country:'India',
  //   education:{
  //     school:'mnnit',
  //     degree:'mca'
  //   }
  // }



  // function clone(obj){
  //   console.log("hello");
  //   var empClone={};
  //   for(let key in obj){
  //     if(typeof(key) === 'object' && object[key] !== null){
  //       empClone[key] = clone(obj[key]);
  //     }else{
  //       empClone[key] = obj[key];
  //     }
  //   }
  //   return empClone;
  // }

  // var e = clone(employee);
  // console.log(e == employee);



  // let multiply = function(x,y){
  //   console.log(x * y);
  // }

  // let multiplyBytwo = multiply.bind(this,2);
  // multiplyBytwo(4);



//   var emp = {
//     firstName:"ajay",
//     lastname:'Sharma'
//   }


//   let fullname = function(city,pincode){
//     console.log(this.firstName + " "+this.lastname + " City "+ city +" Pincode "+ pincode);
//   }

//   let fullnameObj = fullname.bind(emp,"Gwalior");
//   fullnameObj(476221);

// Function.prototype.mybind = function(...args){
//   let objref = this;
//   let params = args.slice(1);
//   return function(arg){
//     objref.apply(args[0],[...params,arg]);
//   }
// }

//   let fullnameObj1 = fullname.mybind(emp,"Gwalior");
//   fullnameObj1(476221);


// //Factory Method
// function createCircle(radius) {
//   return{
//     radius,
//     drow:function() {
//       console.log('drow');
//     }

//   }
// }

// const circle = createCircle(1); 

// function Circle(radius) {
//       this.radius = radius;
//       let totalAbstraction  = function() {
//         console.log("abstraction");
//       }
//        this.drow = function() {
//         totalAbstraction();
//         console.log('drow');
//       };
// }

// const another = new Circle(1);
// another.drow();


 
// function scope() {
//   for(var i =0;i<10;i++){
//     console.log(i);
//     setTimeout(function(){
//       console.log(i);
//     },500);
//   }
  
// }

// scope();

// console.log('a' + true);



let profile = {
  name:'ajay',

}

Object.freeze(profile);
profile.age = 29;

console.log(profile);

delete profile;
// console.log(Object.keys(profile).length);

console.log(Object.getOwnPropertySymbols(profile).length);