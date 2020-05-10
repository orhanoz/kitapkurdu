Vue.component('book-detail', {
  template: `
    <div class="col-xs-12 col-lg-12" v-if="book.volumeInfo">
     
          <div style="float:right;font-size:large;position:relative;">
            <i @click="addFavorites($event, book)" :class="isFavorite ? 'heart fa fa-heart' : 'heart fa fa-heart-o'" style="font-size:25px;"></i>
          </div>   

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
                            <div class="panel-body  col-lg-12" style="margin-bottom:5em;">
                          
                                <textarea id="yorumtext" class="form-control" placeholder="Yorum yaz..." rows="3" ></textarea>
                                <br>                              
                                <button v-on:click="YorumEkle" type="button" class="btn btn-info pull-right">Yorum Ekle</button>  
                                <i>  <p id="errorText" style="color:red;float:right;margin-right:20px;visibility: collapse;">Lütfen Yorum Alanını Yıldızlarla Beraber Doldurunuz..!!</p> </i>   
                           
                                <form class="rating">
                                <label>
                                  <input type="radio" name="stars" value="1" v-model="rating" />
                                  <span class="icon">★</span>
                                </label>
                                <label>
                                  <input type="radio" name="stars" value="2" v-model="rating"/>
                                  <span class="icon">★</span>
                                  <span class="icon">★</span>
                                </label>
                                <label>
                                  <input type="radio" name="stars" value="3" v-model="rating"/>
                                  <span class="icon">★</span>
                                  <span class="icon">★</span>
                                  <span class="icon">★</span>   
                                </label>
                                <label>
                                  <input type="radio" name="stars" value="4" v-model="rating"/>
                                  <span class="icon">★</span>
                                  <span class="icon">★</span>
                                  <span class="icon">★</span>
                                  <span class="icon">★</span>
                                </label>
                                <label>
                                  <input type="radio" name="stars" value="5" v-model="rating"/>
                                  <span class="icon">★</span>
                                  <span class="icon">★</span>
                                  <span class="icon">★</span>
                                  <span class="icon">★</span>
                                  <span class="icon">★</span>
                                </label>
                              </form>  
                              <hr>
                            </div>
                            <div id="searchResult" class="container"  style="margin-bottom:1%;" v-if="comments">
                              <comment v-for="(comment,i) in comments" :key="i" :comment="comment"/>
                            </div>
                          </div>
                      </div>
              
                  </div>
              </div>     
                
              </div>
              <div class="modal fade" ref="exampleModal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Yorum Düzenle</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form action="/comment" medhod="put">
                      <input type="hidden" id="id" name="id">
                      <div class="form-group">
                        <label for="yorum-bolmesi" class="col-form-label">Yorum:</label>
                        <input type="text" class="form-control" id="yorum-bolmesi" required>
                      </div>
                      <div class="form-group">
                      <form class="rating-edit">
                      <label>
                        <input type="radio" name="stars" value="1" />
                        <span class="icon">★</span>
                      </label>
                      <label>
                        <input type="radio" name="stars" value="2"/>
                        <span class="icon">★</span>
                        <span class="icon">★</span>
                      </label>
                      <label>
                        <input type="radio" name="stars" value="3" />
                        <span class="icon">★</span>
                        <span class="icon">★</span>
                        <span class="icon">★</span>   
                      </label>
                      <label>
                        <input type="radio" name="stars" value="4" />
                        <span class="icon">★</span>
                        <span class="icon">★</span>
                        <span class="icon">★</span>
                        <span class="icon">★</span>
                      </label>
                      <label>
                        <input type="radio" name="stars" value="5" />
                        <span class="icon">★</span>
                        <span class="icon">★</span>
                        <span class="icon">★</span>
                        <span class="icon">★</span>
                        <span class="icon">★</span>
                      </label>
                    </form>   
                   
                    </div>
                  </form>
                  </div>
                  <div class="modal-footer">
                  <i>  <p id="errorTextDuzenle" style="color:red;float:right;margin-right:20px;display: none;">Lütfen Yorum Alanını Yıldızlarla Beraber Doldurunuz..!!</p> </i>     
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
    comments: Array,
    isFavorite: {type:Boolean, default: false},
  },
  updated: function() {
    var self = this
    if(this.book.id) {    
      axios.get(`/favorite?bookId=${this.book.id}&userId=${userId}`)
            .then((response) => {
              if(response.data.status.success) {
                self.isFavorite = true
              }
              console.log(JSON.stringify(response));
            }, (error) => {
              console.log(JSON.stringify(error));
            });
  
          }
  },
  computed: {
    computedUserId: function() {
      return window.userId
    }
  },
  methods: {
    YorumEkle: function (event) {
      var self = this
      var yorumText = document.getElementById("yorumtext").value
      if (userId != "" && userId != undefined && userId != null) {
        if (yorumText == '' || this.rating == null || this.rating == undefined) {
          document.getElementById("errorText").style.visibility = "visible";
        } else if (yorumText != '' && this.rating != null && this.rating != undefined) {
          document.getElementById("errorText").style.visibility = "collapse";
          axios.post(`/comment?userId=${userId}&bookId=${self.book.id}`, {
            comment: yorumText,
            rating: this.rating,
            bookName: self.book.volumeInfo.title,
            author: self.book.volumeInfo.authors.count == 0 ? "Unknown" : self.book.volumeInfo.authors[0],
            selflink: selflink,
            imageLink: self.book.volumeInfo.imageLinks.smallThumbnail == undefined ? '' : self.book.volumeInfo.imageLinks.smallThumbnail,
            username: user.name + user.surname
          })
            .then((response) => {
              console.log(response);
              if (response.data.status.success) {
                bootbox.alert({
                  size: "small", message: "Yorum başarıyla eklendi!", callback: function () {
                    location.reload()
                  }
                })
              } else {
                bootbox.alert({
                  size: "small", message: "İşlem başarısız!\nTekrar Deneyin!", callback: function () {
                    location.reload()
                  }
                })
              }
            }, (error) => {
              console.log(error);
              bootbox.alert({
                size: "small", message: "İşlem başarısız!\nTekrar Deneyin!", callback: function () {
                  location.reload()
                }
              })
            });
        }
      } else {
        alert("Go sign in!")
      }
    }, 
    onModalAppear: function (e) {
      // var id = $(e.relatedTarget).data('id'); 
      // var rating = $(e.relatedTarget).data('rating'); 
      // var comment = $(e.relatedTarget).data('comment'); 
      // $(e.currentTarget).find('input[id="id"]').val(id);
      // $(e.currentTarget).find('input[id="yorum-bolmesi"]').val(comment); 
      // console.log(id + ' ' + rating + ' ' + comment)
    },
    addFavorites: function(event, book) {     
      // if() {
      //   //Favorilendi.
      //   event.target.className = "heart fas fa-heart" 
      // } else{
      //   //Favoriden çıktı
      //   event.target.className = "heart fa fa-heart-o"
      // } 

      var self = this
      var isFavorite = event.target.className == "heart fa fa-heart"
      bootbox.confirm({
        message: isFavorite ? "Favorilerinizden çıkarmak istediğinize emin misiniz?" :  "Favorilerinize eklemek istediğinize emin misiniz?",
        callback: function (result) {
          if (result) {
            $("#loadingModal").modal({ backdrop: false });
            if(isFavorite) {
              axios.delete(`/favorite?userId=${userId}&bookId=${book.id}`)
                   .then((response) => {
                      $("#loadingModal").modal('hide');
                      console.log(JSON.stringify(response));
                      if (response.data.status.success) {
                        event.target.className = "heart fa fa-heart-o"
                        bootbox.alert({
                          size: "small", message: "Favorilerinizden başarıyla silindi!", callback: function () {
                            location.reload()
                          }
                        })
                      } else {
                        bootbox.alert({
                          size: "small", message: "İşlem başarısız!\nTekrar Deneyin!", callback: function () {
                            location.reload()
                          }
                        })
                      }
                    }, (error) => {
                      $("#loadingModal").modal('hide');
                      console.log(JSON.stringify(error));
                      bootbox.alert({
                        size: "small", message: "İşlem başarısız!\nTekrar Deneyin!", callback: function () {
                          location.reload()
                        }
                      })
                    });
              } else {
                axios.post(`/favorite?userId=${userId}&bookId=${book.id}`, {
                      bookName: book.volumeInfo.title,
                      author: book.volumeInfo.authors.count == 0 ? "Unknown" : book.volumeInfo.authors[0],
                      selflink: selflink,
                      imageLink: book.volumeInfo.imageLinks.smallThumbnail == undefined ? '' : book.volumeInfo.imageLinks.smallThumbnail
                    })
                    .then((response) => {
                      console.log(response);
                      if (response.data.status.success) {
                        event.target.className = "heart fa fa-heart"
                        bootbox.alert({
                          size: "small", message: "Favorilerinize başarıyla eklendi!", callback: function () {
                            location.reload()
                          }
                        })
                      } else {
                        bootbox.alert({
                          size: "small", message: "İşlem başarısız!\nTekrar Deneyin!", callback: function () {
                            location.reload()
                          }
                        })
                      }
                    }, (error) => {
                      console.log(error);
                      bootbox.alert({
                        size: "small", message: "İşlem başarısız!\nTekrar Deneyin!", callback: function () {
                          location.reload()
                        }
                      })
                    });
              } //if(isFavorite)
          }
        }
      })


      

    }

  }
});

//<!--  v-on:click="editComment(comment)" -->
// :data-id="comment.id" :data-comment="comment.comment" :data-rating="comment.rating" data-target="#exampleModal"
Vue.component('comment', {
  template: `
    <div id="comment-item" v-if="comment" style="margin-left:1em;">
      <br>
        <div class="clearfix"></div>
        <a href="#" class="pull-left">
            <img src="https://bootdey.com/img/Content/user_2.jpg" alt="" class="img-circle">
        </a>
        <div class="media-body" >
            <span class="text-muted pull-right" v-if="comment.userId == computedUserId"  style="margin-right: 10em;">
                <button id="edit" type="button" data-toggle="modal" v-on:click="editComment(comment)" > 
                  <span class="glyphicon">&#x270f;</span>
                  </button>
                  <button id="trash" v-on:click="deleteComment" type="button">
                  <span class="glyphicon"> &#xe020;</span>
                </button>
            </span>
            <strong class="text-success" style="margin-left:1em;">@{{comment.username}}</strong>
            <p style="margin-left:1em;"> {{ comment.comment }} </p>
            <div class="col-md-12">
              <span class="text-muted pull-right" style="margin-right: 7em;">
                <small class="text-muted" style="margin-right:2em;">{{ comment.created.split('T')[0] }}</small>
              </span>
            </div>
            <form class="rating-comment" style="margin-left:1em;">
              <label>
                <input type="radio" name="stars" value="comment.rating"/>
                <span class="icon" v-for="n in comment.rating ">★</span>
              </label>
            </form>                                                      
        </div>  
        <br>
        <hr style="width:90%;margin-left:-1em;">    
      </div>
  `,
  props: {
    comment: Object
  },
  computed: {
    computedUserId: function() {
      return window.userId
    }
  },
  methods: {
    deleteComment: function (event) {
      var self = this
      bootbox.confirm({
        message: "Yorumu silmek istediğinize emin misiniz?",
        callback: function (result) {
          if (result) {
            $("#loadingModal").modal({ backdrop: false });
            axios.delete(`/comment?id=${self.comment.id}`)
              .then((response) => {
                $("#loadingModal").modal('hide');
                console.log(JSON.stringify(response));
                if (response.data.status.success) {
                  bootbox.alert({
                    size: "small", message: "Yorumunuz başarıyla silindi!", callback: function () {
                      location.reload()
                    }
                  })
                } else {
                  bootbox.alert({
                    size: "small", message: "İşlem başarısız!\nTekrar Deneyin!", callback: function () {
                      location.reload()
                    }
                  })
                }
              }, (error) => {
                $("#loadingModal").modal('hide');
                console.log(JSON.stringify(error));
                bootbox.alert({
                  size: "small", message: "İşlem başarısız!\nTekrar Deneyin!", callback: function () {
                    location.reload()
                  }
                })
              });
          }
        }
      })
    },
    editComment: function (comment) {
        //açılan pop-updaki yorum alanı ve yıldız boş bırakmasın diye check 
        console.log(comment)
        bootbox.prompt({ title: "Yorumu Düzenle!", inputType: 'textarea', value:comment.comment, callback: function(newComment){ 
          console.log(newComment); 
          if(newComment) {
            bootbox.confirm({
              message: "Yorumu güncellemek istediğinize emin misiniz?",
              callback: function (result) {
                if (result) {
                  $("#loadingModal").modal({ backdrop: false });
                  axios.put(`/comment?id=${comment.id}`, {comment: newComment, rating: comment.rating})
                    .then((response) => {
                      $("#loadingModal").modal('hide');
                      console.log(JSON.stringify(response));
                      if (response.data.status.success) {
                        bootbox.alert({
                          size: "small", message: "Yorumunuz başarıyla güncellendi!", callback: function () {
                            location.reload()
                          }
                        })
                      } else {
                        bootbox.alert({
                          size: "small", message: "İşlem başarısız!\nTekrar Deneyin!", callback: function () {
                            location.reload()
                          }
                        })
                      }
                    }, (error) => {
                      $("#loadingModal").modal('hide');
                      console.log(JSON.stringify(error));
                      bootbox.alert({
                        size: "small", message: "İşlem başarısız!\nTekrar Deneyin!", callback: function () {
                          location.reload()
                        }
                      })
                    });
                } //if
              } //callback
            })//bootbox.confirm
          }
        }
      })
    }
  }
});

new Vue({
  el: '#app',
  data: {
    book: {},
    comments: []
  },
  medthods: {
    
  },
  mounted: function () {
    var self = this
    if (selflink != "" && selflink != undefined && selflink != null) {
      axios
        .get(selflink)
        .then(function (response) {
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
