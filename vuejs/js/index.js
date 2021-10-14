let app1 = new Vue({
    el: "#app1",
    data: {
        message: "Hello Vue!",
        message2: "Loaded on " + new Date().toLocaleString(),
        linkUrl: "https://bbc.in/2LAnJs8",
        linkText: "Google outage!",
        showIt: false,
        theList: [
            { text: "Learn HTML" },
            { text: "Learn CSS" },
            { text: "Learn Javascript" }
        ],
        groceryList: [
            {
                id:0,
                desc:"Rocket Salad"
            },
            {
                id:1,
                desc:"Cheese"
            },
            {
                id:2,
                desc:"Ramen"
            },
            {
                id:3,
                desc:"Ice Lemon Tea"
            },
            {
                id:4,
                desc:"Grind Coffee"
            },
        ],
        orderList: [
            {
                id:0,
                desc:"Nasi Lemak"
            },
            {
                id:1,
                desc:"Nasi Kerabu"
            }
        ]
    },
    methods: {
        toggleMsg: function(){
            if(this.showIt){
                this.showIt = false
            } else {
                this.showIt = true
            }
        }
    }
})