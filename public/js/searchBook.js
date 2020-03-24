Vue.component('book-detail', {

  template: `
  <div class="col-xs-12 col-lg-12 ">
        <div class="row" v-if="name.volumeInfo">         
          <!-- bir ana sayfa col-lg-12 dir sayfayı 2 dive böldüm 4-8 diye image ve kategoriler 4 lük ksıımda yazılar 8 lik kısımda -->
            <div class="col-xs-6 col-lg-4">     
              <div>
                <!-- kitabın resmi  -->
                <img v-if="name.volumeInfo.imageLinks" v-bind:src="name.volumeInfo.imageLinks.thumbnail" alt="Generic placeholder thumbnail" style="margin-bottom: 2%;">
                </div>
                <!-- puan kısmı tamamiyle bootstrapdan kopyaladım kodu -->
                <div class="rating-block" style="margin-bottom: 2%;">
                  <h5><b>Puan Veren Kişi Sayısı: </b></h5>
                  <h4 class="bold padding-bottom-7">    {{ name.volumeInfo.ratingsCount }}</h4>
                  <h5><b>Ortalama Kullanıcı Puanı</b></h5>
                  <h4 class="bold padding-bottom-7">    {{ name.volumeInfo.averageRating }} <small>/ 5</small></h4>
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
<!-- 
                googleda kitap için yazılan yorumları da ekledim aşağı kısımlar zaten buradakilerin aynısı sadece li ve ul lar var ki listeli gözüksün diye -->
                <a v-bind:href=" name.accessInfo.webReaderLink " ><b>GoogleBooks Yorumları</b></a>               
      
            </div>            
            <div class="col-xs-6 col-lg-8">
              <ul>
                <li >
                  
                  <div v-for="tags of name.volumeInfo.authors" style="margin-bottom:1%">
                    <label ><b>Yazarlar:</b></label>
                    {{ tags }}
                  </div>             
                </li>
                <li >
                  <label><b>Yayınevi:</b></label>
                  {{ name.volumeInfo.publisher }}
                </li>
                <li  >
                  <label><b>Yayın Tarihi:</b></label>
                  {{ name.volumeInfo.publishedDate }}
                </li>
                <li  >
                  <label><b>ISBN:</b></label>
                  {{ name.volumeInfo.industryIdentifiers[1].identifier }}
                </li>
                <li >
                  <label><b>Kitap Adı:</b></label>
                  {{ name.volumeInfo.title }}
                </li>
                <li >
                  <label><b>Kitap Konusu:</b></label>
                  <p v-html=" name.volumeInfo.description "></p>
                </li>
                <li >
                  <label><b>Sayfa Sayısı:</b></label>
                  {{ name.volumeInfo.pageCount }}
                  </li>
                        
              </ul>
          
            </div>
            <div class="col-lg-12">
              <label style="margin-top:1%"><b>Kategoriler:</b></label>                
              <div v-for="tags of name.volumeInfo.categories" class="some-class">
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
                                <input id="input-1" name="input-1" class="rating rating-loading" data-min="0" data-max="5" data-step="0.1" value="2">
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
    name: Object
  },
  methods:{

  }
});

new Vue({
  el: '#demo',
  data: {
      name: {}
  },
  mounted: function(){
    var self = this
    if (selflink != "" && selflink != undefined && selflink != null) {
      axios
        .get(selflink)
        .then(function(response){
            self.name = response.data
            console.log(self.name)
        })
        .catch(error => {
            console.log(error.response)
        });
      }
  }
});