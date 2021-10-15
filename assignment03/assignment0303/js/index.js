let elcalculateVowel = document.getElementById("calculateVowel")
elcalculateVowel.addEventListener("click", function () {
    let elVowel = document.getElementById("vowel")
    let elresultVowel = document.getElementById("resultVowel")
    elresultVowel.innerHTML = "answer is" + Vowels(elVowel.value)
})

function Vowels(){
    let counts = 0
    let lengths = document.getElementById("vowel").length
    for (let i = 0; i<lengths; i++)
        if (elVowel.charAt(i)=="a"|elVowel.charAt(i)=='e'|elVowel.charAt(i)=='i'|elVowel.charAt(i)=='o'|elVowel.charAt(i)=='u'|elVowel.charAt(i)=='A'|elVowel.charAt(i)=='E'|elVowel.charAt(i)=='I'|elVowel.charAt(i)=='O'|elVowel.charAt(i)=='U') {
            counts++
        }
    return counts
}
