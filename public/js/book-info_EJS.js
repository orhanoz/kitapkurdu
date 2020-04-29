Vue.component('book-detail', {
  template: `
    <div class="col-xs-12 col-lg-12" v-if="book.volumeInfo">
          <div class="row">         
              <div class="col-xs-6 col-lg-4">     
                <div>
                  <!-- kitabın resmi  -->
                  <img v-if="book.volumeInfo.imageLinks" v-bind:src="book.volumeInfo.imageLinks.thumbnail" alt="Generic placeholder thumbnail" style="margin-bottom: 2%;">
                  </div>
                  <!-- puan kısmı tamamiyle bootstrapdan kopyaladım kodu -->
                  <div class="rating-block" style="margin-bottom: 2%;">
                    <h5><b>Puan Veren Kişi Sayısı: </b></h5>
                    <h4 class="bold padding-bottom-7">    {{ book.volumeInfo.ratingsCount }}</h4>
                    <h5><b>Ortalama Kullanıcı Puanı</b></h5>
                    <h4 class="bold padding-bottom-7">    {{ book.volumeInfo.averageRating }} <small>/ 5</small></h4>
                    <button type="button" class="btn btn-warning btn-sm" aria-label="Left Align">
                      <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                    </button>
                    <button type="button" class="btn btn-warning btn-sm" aria-label="Left Align">
                      <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                    </button>
                    <button type="button" class="btn btn-warning btn-sm" aria-label="Left Align">
                      <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                    </button>
                    <button type="button" class="btn btn-default btn-grey btn-sm" aria-label="Left Align">
                      <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                    </button>
                    <button type="button" class="btn btn-default btn-grey btn-sm" aria-label="Left Align">
                      <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                    </button>
                  </div>           
                  <a v-bind:href=" book.accessInfo.webReaderLink " ><b>GoogleBooks Yorumları</b></a>               
        
              </div>            
              <div class="col-xs-6 col-lg-8" v-if="book.volumeInfo">

                <ul>
                  <li>
                    <div v-for="tags of book.volumeInfo.authors" style="margin-bottom:1%">
                      <label ><b>Yazarlar:</b></label>
                      {{ tags }}
                    </div>             
                  </li>
                  <li >
                    <label><b>Yayınevi:</b></label>
                    {{ book.volumeInfo.publisher }}
                  </li>
                  <li  >
                    <label><b>Yayın Tarihi:</b></label>
                    {{ book.volumeInfo.publishedDate }}
                  </li>
                  <li v-if="book.volumeInfo.industryIdentifiers && book.volumeInfo.industryIdentifiers.count > 0">
                    <label><b>ISBN:</b></label>
                    {{ book.volumeInfo.industryIdentifiers[1].identifier }}
                  </li>
                  <li >
                    <label><b>Kitap Adı:</b></label>
                    {{ book.volumeInfo.title }}
                  </li>
                  <li >
                    <label><b>Kitap Konusu:</b></label>
                    <p v-html=" book.volumeInfo.description "></p>
                  </li>
                  <li >
                    <label><b>Sayfa Sayısı:</b></label>
                    {{ book.volumeInfo.pageCount }}
                    </li>    
                </ul>
            
              </div>
              <div class="col-lg-12" v-if="book.volumeInfo.categories" >
                <label style="margin-top:1%"><b>Kategoriler:</b></label>                
                <div v-for="tags of book.volumeInfo.categories" class="some-class">
                  <span class="label label-info">{{ tags }}</span>
                </div>
              </div>
              <div class="col-lg-12" style="margin-top: 1%;">  
                <div class="row bootstrap snippets">
                  <div class="col-md-6 col-sm-12 col-lg-12">
                      <div class="comment-wrapper">
                          <div class="panel panel-info">
                            <div class="panel-heading">
                              Yorumlar
                            </div>
                            <div class="panel-body  col-lg-12">
                          
                                <textarea id="yorumtext" class="form-control" placeholder="Yorum yaz..." rows="3" ></textarea>
                                <br>                              
                                <button v-on:click="YorumEkle" type="button" class="btn btn-info pull-right">Yorum Ekle</button>  
                                <i>  <p id="errorText" style="color:red;float:right;margin-right:20px;visibility: collapse;">Lütfen Yorum Alanını Doldurunuz..!!</p> </i>                 
                                <input id="input-1" book="input-1" class="rating rating-loading" data-min="0" data-max="5" data-step="0.1" value="2">
                            </div>

                            <div id="searchResult" class="container"  style="margin-bottom:1%" v-if="comments">
                              <comment v-for="(comment,i) in comments" :key="i" :comment="comment"/>
                            </div>
                          </div>
                      </div>
              
                  </div>
              </div>     
                
              </div>
              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Yorum Düzenle</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <div class="form-group">
                        <label for="yorum-bolmesı" class="col-form-label">Yorum:</label>
                        <input type="text" class="form-control" id="yorum-bolmesı" required>
                      </div>
                      <div class="form-group">
                      <input id="input-1" book="input-1" class="rating rating-loading" data-min="0" data-max="5" data-step="0.1" value="2">
                    </div>
                  </form>
                  </div>
                  <div class="modal-footer">
                  <i>  <p id="errorTextDuzenle" style="color:red;float:right;margin-right:20px;display: none;">Lütfen Yorum Alanını Doldurunuz..!!</p> </i>     
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Kapat</button>
                    <button type="button" class="btn btn-primary">Yorum Düzenle</button>
                  </div>
                </div>
              </div>
            </div>
                       
                  </div>
            </div>
    </div>
  `,
  props: {
    book: Object,
    comments: Array
  },
  methods:{
    YorumEkle: function (event) {
      var self = this
      var yorumText = document.getElementById("yorumtext").value
      if (userId != "" && userId != undefined && userId != null) {
        if(yorumText == '') {
          document.getElementById("errorText").style.visibility ="visible";
        } else {
          document.getElementById("errorText").style.visibility ="collapse"; 
          //TOOD: send commend request!
          // 1- show confirm box: "Are you sure to send this comment?" > yes > send request | cancel... 
          // 2- submit comment form /comment?userId=123456&bookId=123456 (comment & rating) > send
          // 3- if success > show popup > refresh page
          // 4- if fails > show popup > refresh page

          axios.post(`/comment?userId=${userId}&bookId=${self.book.id}`, {
            comment: yorumText,
            rating: 3.7,
            bookName: self.book.volumeInfo.title,
            author: self.book.volumeInfo.authors.count == 0 ? "Unknown" : self.book.volumeInfo.authors[0],
            selflink: selflink,
            imageLink: self.book.volumeInfo.imageLinks.smallThumbnail == undefined ? '' : self.book.volumeInfo.imageLinks.smallThumbnail,
            username: user.name+user.surname
          })
          .then((response) => {
            console.log(response);
            if(response.data.status.success){ 
                bootbox.alert({ size:"small", message: "Yorum başarıyla eklendi!", callback: function(){
                  location.reload()
                }})
            } else {
                bootbox.alert({ size:"small", message: "İşlem başarısız!\nTekrar Deneyin!", callback: function(){
                  location.reload()
                }})
            }
          }, (error) => {
            console.log(error);
            bootbox.alert({ size:"small", message: "İşlem başarısız!\nTekrar Deneyin!", callback: function(){
              location.reload()
            }})
          });
        }
      } else {
        alert("Go sign in!")
      }
    }

  }
});


Vue.component('comment', {
  template: `
      <div id="comment-item" v-if="comment">
        <div class="clearfix"></div>
        <hr>
        <a href="#" class="pull-left">
            <img src="https://bootdey.com/img/Content/user_2.jpg" alt="" class="img-circle">
        </a>
        <div class="media-body">
            <span class="text-muted pull-right" v-if="comment.userId"  style="margin-right: 5em;">
                <button id="edit" type="button" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
                  <span class="glyphicon">&#x270f;</span>
                  </button>
                  <button id="trash" data-toggle="modal"  v-on:click="deleteComment" type="button">
                  <span class="glyphicon"> &#xe020;</span>
                </button>
            </span>
            <strong class="text-success">@{{comment.username}}</strong>
            <p> {{ comment.comment }} </p>
            <div class="col-md-12">
              <span class="text-muted pull-right"  style="margin-right: 3em;">
                <small class="text-muted">{{ comment.created }}</small>
                <small class="text-muted">{{ comment.rating }}</small>
              </span>
            </div>
        </div>  
      </div>
  `,
  props: {
    comment: Object
  },
  methods: {
    deleteComment: function (event) {
      var self = this
      bootbox.confirm({ 
          message: "Yorumu istediğinize emin misiniz?",
          callback: function(result){ 
              if(result) {
                  $("#loadingModal").modal({backdrop:false });
                  axios.delete(`/comment?id=${self.comment.id}`)
                    .then((response) => {
                      $("#loadingModal").modal('hide');
                      console.log(JSON.stringify(response));
                      if(response.data.status.success) {
                        bootbox.alert({ size:"small", message: "Yorumunuz başarıyla silindi!", callback: function(){
                          location.reload()
                        }})
                      } else {
                        bootbox.alert({ size:"small", message: "İşlem başarısız!\nTekrar Deneyin!", callback: function(){
                          location.reload()
                        }})
                      }
                    }, (error) => {
                      $("#loadingModal").modal('hide');
                      console.log(JSON.stringify(error));
                      bootbox.alert({ size:"small", message: "İşlem başarısız!\nTekrar Deneyin!", callback: function(){
                        location.reload()
                      }})
                    });
              }
          }
      })
    },
    editComment: function (event) { 
      //açılan pop-updaki alanı boş bırakmasın diye check 
      if(document.getElementById("yorum-bolmesı").value == '') {
        document.getElementById("errorTextDuzenle").style.display ="inline";
      } else{
        document.getElementById("errorTextDuzenle").style.display ="none";
        bootbox.alert({ size:"small", message: "EDIT COMMENT!"})
      }
    }
  }
}); 

new Vue({
  el: '#app',
  data: {
      book: {},
      comments: []
  },
  medthods : {
    getComments : function(){
      var self = this
    }
  },
  mounted: function(){
    var self = this
    if (selflink != "" && selflink != undefined && selflink != null) {
      axios
        .get(selflink)
        .then(function(response){
            self.book = response.data
            console.log(self.book)
            var itself = self
            axios.get(`/comment?bookId=${self.book.id}`)
            .then((response) => {
              itself.comments = response.data.payload
              console.log(JSON.stringify(response));
            }, (error) => {
              console.log(JSON.stringify(error));
            });
        })
        .catch(error => {
            console.log(error.response)
        });
    } else {
      window.location = "/search"
    }
  }
});
