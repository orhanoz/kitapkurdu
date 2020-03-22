
Vue.component('book', {
  template: `
     <div class="row" >
        <div class="card col-md-10">
            <div class="row no-gutters" style="margin-bottom: 2%;border:pink;border-style: groove;">
                <div class="col-md-2">
                    <img :src="book.volumeInfo.imageLinks.smallThumbnail" alt="resim yuklenemedi" style="margin: 2%" />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{book.volumeInfo.title}}</h5>
                        <p class="card-text"> {{book.volumeInfo.description}} </p>
                    </div>
                </div>
            </div> 
        </div> 
      </div>
  `,
  props: {
    book: Object
  }
});

var app = new Vue({
  el: "#app",
  data: {
    message: "Vue world!",
    books: [],
    searchText: "",
    pageIndex: 0
  },  
  mounted : function(){ }, 
  methods: {
    greet: function (event) {
      // `this` inside methods points to the Vue instance
      alert('Hello ' + this.message + '!')
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    },
    searchBooks: function() { 
        var searchTextFormatted = this.searchText.replace(" ", "+")  
        var self = this
        axios
          .get(`https://www.googleapis.com/books/v1/volumes?q=${searchTextFormatted}&startIndex=${this.pageIndex}`)
          .then(function(response){
              self.books = response.data.items 
              console.log(response)
          })
          .catch(error => {
              console.log(error.response)
          });  
    },
    previous: function(){ 
      if (this.pageIndex != 0) { this.pageIndex--; } 
      this.searchBooks()
    },
    next: function(){
      this.pageIndex++;
      this.searchBooks()
    }
  } //methods: {}
}); 