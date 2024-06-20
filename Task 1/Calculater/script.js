let input = document.getElementById("inputbox");
let btn = document.querySelectorAll("button");
// console.log(btn)

let calc = "";

let arr = Array.from(btn);
// console.log(arr)

arr.forEach((btn) =>{
    btn.addEventListener("click" , (e) => {
        if(e.target.innerHTML === 'AC'){
            input.value = "";
        setInterval(autoRefresh , 700)
        }
        else if(e.target.innerHTML === 'DEL'){
           calc =  calc.substring(0,calc.length-1)
            input.value = calc;
        }
        else if (e.target.innerHTML === '='){
            calc = eval(calc);
            input.value = calc;
        }
        else{
        calc = calc + e.target.innerHTML;
        input.value = calc;
        }
    })
})

// the functioon is work to auto reftesh the page after press AC button on every 700 milisecons.

function autoRefresh(){
    window.location = window.location.href;
}