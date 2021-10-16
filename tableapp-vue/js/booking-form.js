Vue.component("booking-form", {
    template: `
    <div>
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <label for="userName">Name</label>
                    <input type="text" class="form-control" v-model="userName">
                </div>
            </div>
            <div class="col">
                <div class="form-group">
                    <label for="userEmail">Email</label>
                    <input type="text" class="form-control" v-model="userEmail">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <label for="userPax">Pax</label>
                    <select class="form-control" v-model="userPax">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                </div>
            </div>
            <div class="col">
                <div class="form-group">
                    <label for="userRemarks">Remarks</label>
                    <textarea class="form-control" v-model="userRemarks" rows="3"></textarea>
                </div>
                <button v-if="showBtn" type="button" class="btn btn-primary float-right" id="bookNowBtn" v-on:click="BookNow">Book Now</button>
            </div>
        </div>
    </div>
    `,
    data: function () {
        return {
            userName: "",
            userEmail: "",
            userPax: "",
            userRemarks: ""
        }
    },
    methods: {
        BookNow: function () {
            let url = 'https://api.sheety.co/b9b23bacbce0fa05289abc34d8cf52e6/bookingkpt/bookings';
            let body = {
                booking: {
                    name: this.userName,
                    email: this.userEmail,
                    pax: this.userPax,
                    remarks: this.userRemarks
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
                    alert("ID: " + json.booking.id + ", " + json.booking.name + " successfully added!")
                    this.userName = ""
                    this.userEmail = ""
                    this.userPax = ""
                    this.userRemarks = ""
                });
        }
    }, 
    computed: {
        showBtn : function () {
            if(this.userName == "" || this.userEmail == "" || this.userPax == "" || this.userRemarks == ""){
                return false
            } else {
                return true
            }
        }
    }
})