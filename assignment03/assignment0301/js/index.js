let elcalculateFactorial = document.getElementById('calculateFactorial')
elcalculateFactorial.addEventListener("click", function () {
    let elfactorialNumber = document.getElementById('factorialNumber')
    let elresultFactorial = document.getElementById("resultFactorial")
    elresultFactorial.innerHTML = "answer is " + factorial(elfactorialNumber.value)
})


function factorial(num) {
    fact = 1
    for (let i = 1; i <= num; i++) {
        fact = fact * i
    }
    return fact

}

