document.querySelector("#g")
.addEventListener('click',()=>{
    console.log("grand");
},false);
document.querySelector("#p")
.addEventListener('click',(e)=>{
    console.log("parent");
},true);
document.querySelector("#c")
.addEventListener('click',(e)=>{
    console.log("child");
    e.stopPropagation();

});