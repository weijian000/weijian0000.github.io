let elcalculatePalindrome = document.getElementById("calculatePalindrome")
let elPalindrome = document.getElementById("Palindrome").value
let elresultPalindrome = document.getElementById("resultPalindrome")
elcalculatePalindrome.addEventListener("click", function () {
    elresultPalindrome.innerHTML = "This is a " + palindrome(elPalindrome) + " Palindrome"
})

function palindrome(number) {
    let reversed = elPalindrome.split("").reverse().join("")
    if (elPalindrome==reversed){
        return "A"
    }
    else {
        return "B"
    }
    
}
