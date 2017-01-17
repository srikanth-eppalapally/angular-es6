
 class HttpServices {

    constructor($http){
        'ngInject';

        this.http = $http;
    }

     getData(query) {
         console.log('11', this);
         var url = 'https://api.stackexchange.com/2.2/search?key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow&page=2&pagesize=50&fromdate=1482192000&todate=1483920000&order=desc&min=1483488000&max=1483920000&sort=activity&tagged='+query+'&intitle='+query+'&filter=default'
         return this.http.get(url)
             .then((data) => {
                return data;
             });
     }
}

 export default HttpServices;

