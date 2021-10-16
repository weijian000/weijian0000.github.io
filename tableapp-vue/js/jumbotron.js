Vue.component("jumbotron", {
    template: `
    <div class="row">
        <div class="col">
            <div class="jumbotron">
                <h1 class="display-4">{{page.mainTitle}}</h1>
                <p class="lead">{{page.subTitle}}</p>
                <hr class="my-4">
                <a class="btn btn-primary btn-lg" v-bind:href="page.buttonUrl" role="button">{{page.buttonText}}</a>
            </div>
        </div>
    </div>
    `,
    props:["page"]
})