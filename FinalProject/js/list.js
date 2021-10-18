let refreshNow = document.getElementById("refreshNowBtn")
refreshNow.addEventListener("click", function () {
    GetBooking()
})

function GetBooking() {
    let url = 'https://api.sheety.co/cbecf18127083094540d1888bbc02c09/bookingFinalProject/sheet1';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            let bookingNameList = document.getElementById("bookingNameList")
            let bookingIds = []

            //clear the table/list
            for (let k = bookingNameList.rows.length - 1; k > 0; k--) {
                bookingNameList.deleteRow(k)
            }

            //load the new data/list
            for (let i = 0; i < json.sheet1.length; i++) {
                let gName = json.sheet1[i].name
                let gIdentificaiton = json.sheet1[i].identification
                let gNumber = json.sheet1[i].number
                let gEmail = json.sheet1[i].email
                let gPax = json.sheet1[i].pax
                let gRemarks = json.sheet1[i].remarks
                let gId = json.sheet1[i].id
                let btnId = "delete" + gId

                let row = bookingNameList.insertRow(bookingNameList.rows.length)
                row.insertCell(0).innerHTML = gId
                row.insertCell(1).innerHTML = gName
                row.insertCell(2).innerHTML = gIdentificaiton
                row.insertCell(3).innerHTML = gNumber
                row.insertCell(4).innerHTML = gEmail
                row.insertCell(5).innerHTML = gPax
                row.insertCell(6).innerHTML = gRemarks
                row.insertCell(7).innerHTML = "<button id='" + btnId + "' class='btn btn-danger'>Delete</button> "

                bookingIds.push(btnId)

            }

            // attach listener to buttons
            for (let j = 0; j < bookingIds.length; j++) {
                let el = document.getElementById(bookingIds[j])
                el.addEventListener("click", function () {
                    let theId = bookingIds[j].replace("delete", "")
                    DeleteBooking(theId)
                })
            }
        });

}

function DeleteBooking(id) {
    let url = 'https://api.sheety.co/cbecf18127083094540d1888bbc02c09/bookingFinalProject/sheet1/' + id;
    fetch(url, {
        method: 'DELETE',
    })
        .then(() => {
            alert('Record id'+id+"deleted~")
            GetBooking()
        });
}