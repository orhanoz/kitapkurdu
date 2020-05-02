
Vue.component('book', {
  template: `
     <div class="row">
        <div class="card col-md-10" style="padding-top:18px;">
            <div class="row no-gutters" style="margin-bottom: 2%; border:1px solid #f8b739; border-radius: 6px;">
                <div class="col-md-2">
                    <img v-if="book.volumeInfo.imageLinks" :src="book.volumeInfo.imageLinks.smallThumbnail" alt="resim yuklenemedi" style="padding: 20px" />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{book.volumeInfo.title}}</h5>
                        <p class="card-text" style=" display: inline-block;width:600px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;max-height:150px"> {{book.volumeInfo.description}} </p>
                       
                    </div>
                </div>
                <br/> 
                <div>
                </div>
                    <button  v-bind:id="book.selfLink" class="btn btn-lg btn-primary" v-on:click="makeComment(book.selfLink)" style="float:right; width:120px; height:40px; position:absolute; bottom:30px; right:30px; font-size: 14px;">Göster</button> 
                </div>
            </div> 
            
        </div> 
      </div>
  `,
  props: {
    book: Object
  },
  methods: {
    makeComment:function(link){
      //axios({ method: 'post', url: '/book-info', data: { selflink: link } }); 
      window.location.href = '/book-info?q='+link
    }
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
        this.pageIndex = this.pageIndex == 0 ? 1 : this.pageIndex
        var searchTextFormatted = this.searchText.replace(" ", "+")  
        var self = this
        axios
          .get(`https://www.googleapis.com/books/v1/volumes?q=${searchTextFormatted}&startIndex=${this.pageIndex - 1}`)
          .then(function(response){
              self.books = response.data.items 
              console.log(response)
          })
          .catch(error => {
              console.log(error.response)
          });  
    },
    makeComment: function(id){
      alert("ID: "+id)
    },
    previous: function(){ 
      if (this.pageIndex > 1) { this.pageIndex--; } 
      this.searchBooks()
    },
    next: function(){
      this.pageIndex++;
      this.searchBooks()
    },
    enter: function(event){ 
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("searchButton").click();
      } 
    }
  } //methods: {}
}); 