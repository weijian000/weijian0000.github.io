let bookNowBtn = document.getElementById("bookNowBtn")
bookNowBtn.addEventListener('click', function () {
    let userName = document.getElementById("userName")
    let userNameVal = userName.value

    let userIdentification = document.getElementById("userIdentification")
    let userIdentificationVal = userIdentification.value

    let userNumber = document.getElementById("userNumber")
    let userNumberVal = userNumber.value

    let userEmail = document.getElementById("userEmail")
    let userEmailVal = userEmail.value

    let userPax = document.getElementById("userPax")
    let userPaxVal = userPax.value

    let userRemarksVal = document.getElementById("userRemarks").value

    BookNow(userNameVal, userIdentificationVal, userNumberVal, userEmailVal, userPaxVal, userRemarksVal)

})

function BookNow(userName, userIdentification, userNumber, userEmail, userPax, userRemarks) {
    let url = 'https://api.sheety.co/cbecf18127083094540d1888bbc02c09/bookingFinalProject/sheet1/';
    let body = {
        sheet1: {
            name: userName,
            identification: userIdentification,
            number: userNumber,
            email: userEmail,
            pax: userPax,
            remarks: userRemarks
        }
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json())
        .then(json => {
            alert("ID: " + json.sheet1.id + ", " + json.sheet1.name + " successfully added!")
        });
}