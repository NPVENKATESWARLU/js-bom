//---------------------- function as a decleration-------------->
// function demo(){
//     alert("hai world");
// }
// demo();
//------------------------- function as a expression------------>
// var test = function (){
//     alert("this function as expresion")
// };
// test();
// (function(){
//     alert("hai venkatesh")
// })();
// const demo = () => {
//     alert("hai world");
// };
// demo();
//--------------------- array method ends-------------------------------->
//--------------------------- push method starts----------------------->
// var animals = ["dog","cat"];
// animals.push("crocodile");
// animals.pop();
// animals.unshift("cangroo");
// animals.shift();
// console.log(animals);
//---------------------------push method starts----------------------->
//--------------------------- merge two array starts----------------------->
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// console.log(animals.join(fruits));
// console.log(animals.concat(fruits));
//--------------------------- merge two array ends----------------------->
//--------------------------- delete array starts----------------------->
// delete fruits[1];
// console.log(fruits);
//--------------------------- delete array ends----------------------->
//--------------------------- splice starts----------------------->
// fruits.splice(1,0,"mango");
// fruits.splice(1,1,"kiwi");
// console.log(fruits);
// console.log(fruits.slice(2,3));
// console.log(fruits.sort());
// console.log(fruits.reverse());
//--------------------------- splice ends----------------------->
//--------------------------- numeric sort starts----------------------->
var numbers = [40, 3, 100, 33, 26, 18, 58];
console.log(numbers.sort(function (a, b) {
    return b - a;
}));
//--------------------------- numeric sort ends----------------------->
//--------------------- array method emds-------------------------------->
// console.log(window.location.host);
// console.log("window inner width--->",window.innerWidth);
// console.log("window outer width--->",window.outerWidth);
// console.log("window outer width--->",window.open());
// console.log("window outer width--->",window.close());
// console.log("window outer width--->",window.moveTo());
// console.log("window outer width--->",window.resizeTo());
// console.log("screen--->",window.screen);
// console.log("screen width--->",screen.width);
// console.log("screen height--->",screen.height);
// console.log("screen avail width--->",screen.availWidth);
// console.log("screen avail height--->",screen.availHeight);
// console.log("screen color depth--->",screen.colorDepth);
// console.log("screen pixel depth--->",screen.pixelDepth);
// console.log("window loction------------>",window.location);
// console.log("window loction hostname------------>",window.location.hostname);
// console.log("window loction href------------>",window.location.href);
// console.log("window loction pathname------------>",window.location.pathname);
// console.log("window loction protocol------------>",window.location.protocol);
// console.log("window loction port------------>",window.location.port);
// console.log("window loction assign------------>",window.location.assign("file:///C:/temp/html-class/js-bom/index.html"));
// console.log("window history------------>", window.history);
// console.log("window history forward------------>", history.forward());
// console.log("window history back------------>", history.back());
// function goBack() {
//     window.history.back();
//   }
// ---------------------popup alert starts--------------------------------->
// function myFunction(){
//     if(window.confirm("press cancel button")){
//             txt = "you pressed ok";
//     }else{
//         txt = "you pressed cancel"
//     }
// }
// function myFunction(){
//     if(window.prompt("press ok button","NP Venkateswarlu")){
//             txt = "you pressed ok";
//     }else{
//         txt = "you pressed cancel"
//     }
// }
function myFunction(){
    alert("Hi everyone \nHello world" )
}
// ---------------------popup alert ends--------------------------------->