let elcalculatePanlindrome = document.getElementById("calculatePanlindrome")
elcalculatePanlindrome.addEventListener("click", function () {
    let elPanlindrome = document.getElementById("Panlindrome")
    let elresultPandolindrome = document.getElementById("resultPandolindrome")
    elresultPandolindrome.innerHTML = "This is" + Panlindrome(elPanlindrome)
})

let elPanlindromes = elPanlindrome.next()
let length = elPanlindromes.length()
function Panlindrome() {
    for (i= length-1;i>0;i--)
        reverse=reverse+elPanlindromes.charAt(i);
    if (elPanlindromes.equals(reverse)){
    console.log(true)}
    else(
        alert="this is not a panlindromes"
    )

}