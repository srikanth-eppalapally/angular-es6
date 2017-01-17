class HomeController{
    constructor(HttpServices) {
        'ngInject';
        this.HttpServices = HttpServices;
        this.inputQuery = "";
        this.questions = [];
    }

    searchQuestions(){
        var that = this;
        var promise = this.HttpServices.getData(this.inputQuery);
        promise.then((resp) => {
            that.questions = resp.data.items;
        })
    }




}

export default HomeController;