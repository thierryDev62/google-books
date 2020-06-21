new Vue({
    el: '#app',
    data: {
        results: true,
        books: "",
        isOk: false
    },
    methods: {
        submit: function() {
            if(this.books !== '') {
                axios.get('https://www.googleapis.com/books/v1/volumes?q=' + this.books + '&maxResults=20')
                    .then(response => (this.results = response.data.items));
                this.isOk = true;
            } else {
                return false;
            }
        }
    },
})



