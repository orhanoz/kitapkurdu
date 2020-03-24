Vue.component('book-detail', {

  template: `
  <div class="col-xs-12 col-lg-12 ">
        <div class="row" v-if="book.volumeInfo">         
            <div class="col-xs-6 col-lg-4">     
              <div>
                <img v-if="book.volumeInfo.imageLinks" v-bind:src="book.volumeInfo.imageLinks.thumbnail" alt="Generic placeholder thumbnail" style="margin-bottom: 2%;">
                </div>
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
            <div class="col-xs-6 col-lg-8">
              <ul>
                <li >
                  
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
                <li  >
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
            <div class="col-lg-12">
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
                                <textarea class="form-control" placeholder="Yorum yaz..." rows="3"></textarea>
                                <br>
                                <button type="button" class="btn btn-info pull-right">Yorum Ekle</button>
                                <input id="input-1" book="input-1" class="rating rating-loading" data-min="0" data-max="5" data-step="0.1" value="2">
                                <div class="clearfix"></div>
                                <hr>
                                <ul class="media-list">
                                    <li class="media">
                                        <a href="#" class="pull-left">
                                            <img src="https://bootdey.com/img/Content/user_1.jpg" alt="" class="img-circle">
                                        </a>
                                        <div class="media-body">
                                            <span class="text-muted pull-right">
                                                <small class="text-muted">30 min ago</small>
                                            </span>
                                            <strong class="text-success">@MartinoMont</strong>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Lorem ipsum dolor sit amet, <a href="#">#consecteturadipiscing </a>.
                                            </p>
                                        </div>
                                    </li>
                                    <li class="media">
                                        <a href="#" class="pull-left">
                                            <img src="https://bootdey.com/img/Content/user_2.jpg" alt="" class="img-circle">
                                        </a>
                                        <div class="media-body">
                                            <span class="text-muted pull-right">
                                                <small class="text-muted">30 min ago</small>
                                            </span>
                                            <strong class="text-success">@LaurenceCorreil</strong>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Lorem ipsum dolor <a href="#">#ipsumdolor </a>adipiscing elit.
                                            </p>
                                        </div>
                                    </li>
                                    <li class="media">
                                        <a href="#" class="pull-left">
                                            <img src="https://bootdey.com/img/Content/user_3.jpg" alt="" class="img-circle">
                                        </a>
                                        <div class="media-body">
                                            <span class="text-muted pull-right">
                                                <small class="text-muted">30 min ago</small>
                                            </span>
                                            <strong class="text-success">@JohnNida</strong>
                                            <p>
                                                Lorem ipsum dolor <a href="#">#sitamet</a> sit amet, consectetur adipiscing elit.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
            
                </div>
            </div>             
              
            </div>
          </div>
        </div>
  `,
  props: {
    book: Object
  },
  methods:{

  }
});

new Vue({
  el: '#demo',
  data: {
    books: [],
  },
  mounted: function(){
    var self = this
    if (selflink != "" && selflink != undefined && selflink != null) {
      axios
        .get(selflink)
        .then(function(response){
            self.books = [response.data]
            console.log(self.books)
        })
        .catch(error => {
            console.log(error.response)
        });
    }
  }
});