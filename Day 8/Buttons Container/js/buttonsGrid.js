const middleBtn = document.getElementById("btn5")
middleBtn.addEventListener("click", ()=>{
    let temp = document.getElementById("btn4").innerText
    document.getElementById("btn4").innerHTML = document.getElementById("btn7").innerText
    document.getElementById("btn7").innerHTML = document.getElementById("btn8").innerText
    document.getElementById("btn8").innerHTML = document.getElementById("btn9").innerText
    document.getElementById("btn9").innerHTML = document.getElementById("btn6").innerText
    document.getElementById("btn6").innerHTML = document.getElementById("btn3").innerText
    document.getElementById("btn3").innerHTML = document.getElementById("btn2").innerText
    document.getElementById("btn2").innerHTML = document.getElementById("btn1").innerText
    document.getElementById("btn1").innerHTML = temp
})