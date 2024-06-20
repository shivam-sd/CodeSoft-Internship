let btn = document.querySelector(".click");
let p = document.querySelector(".contact");

let tog = false;

btn.addEventListener("click" , () => {
   if(tog === false){
    tog = true;
    p.style.visibility = "visible";
    p.style.transition = "0.3s ";
}
else{
    tog = false;
    p.style.visibility = "hidden";
    p.style.transition = "0.3s ";
   }
})

let mode = false;

let manu = document.querySelector(".hamburger");
let item = document.querySelector(".overlay-hambuger");

manu.addEventListener("click" ,() => {
if(mode === false){
    mode = true;
    item.style.left = "0";
}
else{
    mode = false;
    item.style.left = "-200px";
}

})