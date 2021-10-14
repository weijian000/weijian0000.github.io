let refreshNow = document.getElementById("refreshNowBtn")
refreshNow.addEventListener("click", function () {
    GetBooking()
})

function GetBooking() {
    let url = 'https://api.sheety.co/cbecf18127083094540d1888bbc02c09/bookings/sheet1';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            let bookingNameList = document.getElementById("bookingNameList")

            //clear the table/list
            for(let k = bookingNameList.rows.length - 1; k > 0; k--){
                bookingNameList.deleteRow(k)
            }

            //load the new data/list
            for(let i = 0; i < json.sheet1.length; i++){
                let gName = json.sheet1[i].name
                let gEmail = json.sheet1[i].email
                let gPax = json.sheet1[i].pax
                let gRemarks = json.sheet1[i].remarks
                let gId = json.sheet1[i].id

                let row = bookingNameList.insertRow(bookingNameList.rows.length)
                row.insertCell(0).innerHTML = gId
                row.insertCell(1).innerHTML = gName
                row.insertCell(2).innerHTML = gEmail
                row.insertCell(3).innerHTML = gPax
                row.insertCell(4).innerHTML = gRemarks
                row.insertCell(5).innerHTML = ""

            }
        });
}