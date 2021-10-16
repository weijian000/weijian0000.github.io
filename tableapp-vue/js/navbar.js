Vue.component("navbar", {
    template: `
    <div class="row">
        <div class="col">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="index.html">Table Booking App</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li v-for="m in menu" class="nav-item">
                            <a class="nav-link" v-bind:href="m.linkUrl" v-bind:target="openNewTab(m.newTab)">{{m.linkText}}</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
    `,
    data: function () {
        return {
            menu: [
                {
                    linkUrl: "index.html",
                    linkText: "Home"
                },
                {
                    linkUrl: "book.html",
                    linkText: "Book Table"
                },
                {
                    linkUrl: "list.html",
                    linkText: "View Booking"
                },
                {
                    linkUrl: "https://www.metallica.com",
                    linkText: "Metallica",
                    newTab: true
                }
            ]
        }
    },
    methods: {
        openNewTab: function (open) {
            let _target = ""
            if(open){
                _target = "_blank"
            } else {
                _target = "_self"
            }
            return _target
        }
    }
})