let name={
    firstname:'vishal',
    lastName:'adarsh',
    
}
 function fullName(address){
    console.log("FullName: "+this.firstname+" "+ this.lastName +" "+address);
}
fullName.call(name,"Rajsthan");

let name1 = {
    firstname:'ajay',
    lastName:'sharma',
}
fullName.call(name1,"madhyaPradesh");

const bind = fullName.bind(name1,"haridwar");
//console.log(bind);
bind();

fullName.apply(name1,["rameshwar"]);