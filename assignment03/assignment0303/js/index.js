let elcalculateVowel = document.getElementById("calculateVowel")
let elVowel = document.getElementById("vowel")
let elresultVowel = document.getElementById("resultVowel")
elcalculateVowel.addEventListener("click", function () {    
    elresultVowel.innerHTML = "answer is" + Vowels(elVowel.value)
})

function Vowels(){
    let counts = 0
    let lengths = length(document.getElementById("vowel").value)
    for (let i = 0; i<lengths; i++)
        if (elVowel.value.charAt(i)=="a"|elVowel.value.charAt(i)=='e'|elVowel.value.charAt(i)=='i'|elVowel.value.charAt(i)=='o'|elVowel.value.charAt(i)=='u'|elVowel.value.charAt(i)=='A'|elVowel..value.charAt(i)=='E'|elVowel.value.charAt(i)=='I'|elVowel.value.charAt(i)=='O'|elVowel.value.charAt(i)=='U') {
            counts++
        }
    return counts
}
