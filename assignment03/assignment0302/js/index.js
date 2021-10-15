let elcalculatePalindrome = document.getElementById("calculatePalindrome")
let elPalindrome = document.getElementById("Palindrome")
let elresultPalindrome = document.getElementById("resultPalindrome")
elcalculatePalindrome.addEventListener("click", function () {
    elresultPalindrome.innerHTML = "This is " + palindrome(elPalindrome.value) + " Palindrome"
})

function palindrome(number) {
    let reversed = elPalindrome.value.split("").reverse().join("")
    if (elPalindrome.value==reversed){
        return "a"
    }
    else {
        return "NOT"
    }
    
}
