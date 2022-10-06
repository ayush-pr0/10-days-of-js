let counter = 0;
const btn = document.getElementById("btn");
btn.addEventListener("click", ()=>{
    btn.innerHTML = ++counter    
})
