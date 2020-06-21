let vm = new Vue({
    el: '#app',
    data: {
        results: null,
        books: "",
    },
    methods: {
        submit: function() {
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + this.books + '&maxResults=40')
                .then(response => (this.results = response.data.items))
        }
    },
})
