


Vue.component('profile', {
    template: `
        <div class="row" v-if="user"> 
 

            <div class="col-xs-12 col-sm-6 col-md-12" >
                <div class="row" style="margin-top:3em; margin-bottom:3em;">
                    <div class="col-sm-6 col-md-2">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzEWMQC9euAL2VV-iZ22uUw5lvEhpj30wFtwRsAF0-UU8xFx72&usqp=CAU" alt="" class="img-rounded img-responsive"
                            height="400" width="400"  style="margin-bottom: 10px;"/>
                    </div>
                    <div class="col-sm-6 col-md-10" style="margin-top:2em;">
                        <h5 style="margin-left:1em;">Ad Soyad: <b>{{user.name + ' ' + user.surname}}</b></h5> 
                        <h5 style="margin-left:1em;">Email: <b>{{user.email}}</b></h5> 
                        <h5 style="margin-left:1em;">Hakkında: <b>{{user.about}}</b></h5> 
                    </div>
                </div>                     
            </div>


            <div name="NavBar" style="margin-top: 10;" class="col-xs-12 col-sm-6 col-md-12 project-tab"> 


                  <ul class="nav nav-tabs" role="tablist">
                      <li><a href="#a" data-toggle="tab">Yorumlarım</a></li>
                      <li><a href="#b" data-toggle="tab">Favorilerim</a></li>
                  </ul>
              
                  <div class="tab-content">

                      <div class="tab-pane active" id="a">
                          <!-- YORUMLAR LIST -->
                          <div id="searchResultComments" class="container"  style="margin-bottom:1%">
                            <comment v-for="(comment,i) in comments" :key="i" :comment="comment"/>
                          </div>
                      </div>

                      <div class="tab-pane" id="b">
                          <!-- FAVORILER LIST -->
                          <div id="searchResultFavorites" class="container"  style="margin-bottom:1%">
                            <favorite v-for="(favorite,i) in favorites" :key="i" :favorite="favorite"/>
                          </div>
                      </div>

                  </div>

            </div> 

        </div>
    `,
    props: {
      user: Object,
      comments: Array,
      favorites: Array,
    },
    methods: {

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
            <span class="text-muted pull-right"  style="margin-right: 3em;">
                <button id="edit" type="button" data-toggle="modal" style="display:none" data-target="#exampleModal" data-whatever="@mdo">
                  <span class="glyphicon">&#x270f;</span>
                  </button>
                  <button id="trash" data-toggle="modal"  v-on:click="deleteComment" type="button">
                  <span class="glyphicon"> &#xe020;</span>
                </button>
            </span>
            <b><strong class="text-success" style="margin-left:1em;">@{{comment.username}}</strong></b>
            <b><p style="margin-left:1em;"> {{ comment.bookName + ' - ' + comment.author }} </p></b>
            <p><b style="margin-left:1em;"> Comment: </b>{{ comment.comment }} </p>
            <div class="col-md-12">
              <span class="text-muted pull-right">
                <small class="text-muted">{{ comment.created.split('T')[0] }}</small>
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

 
Vue.component('favorite', {
  template: `
     <div class="row" v-if="favorite">
        <div class="card col-md-12" style="padding-top:10px;"> 
            <button id="trash" v-on:click="deleteFavorite(favorite)" type="button" style="position:absolute; float:right; height:2em; top:2em; right:4em; ">
                <span class="glyphicon"> &#xe020;</span>
            </button> 
            <div class="row no-gutters" style="margin-bottom: 2%; margin-right:1em; border:1px solid #f8b739; border-radius: 6px;">  
                <div class="col-md-2">
                    <img v-if="favorite.imageLink" :src="favorite.imageLink" alt="resim yuklenemedi" style="padding: 20px" />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{favorite.bookName}}</h5>
                        <p class="card-text" style=" display: inline-block;width:600px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;max-height:150px"> {{favorite.author}} </p>
                    </div>
                </div>
                <br/> 
                <div>
                </div>
                    <button v-bind:id="favorite.selflink" class="btn btn-lg btn-primary" v-on:click="makeComment(favorite.selflink)" style="float:right; width:120px; height:40px; position:absolute; bottom:30px; right:4em; font-size: 14px;">Göster</button> 
                </div>

            </div> 
        </div> 
      </div>
  `,
  props: {
    favorite: Object
  },
  methods: {
    deleteFavorite: function(favorite) {
      bootbox.confirm({
        message: "Bu kitabı favorilerinizden kaldırmak istediğinize emin misiniz?",
        callback: function (result) {
          if (result) {
            $("#loadingModal").modal({ backdrop: false });
            axios.delete(`/favorite?userId=${favorite.userId}&bookId=${favorite.bookId}`)
              .then((response) => {
                $("#loadingModal").modal('hide');
                console.log(JSON.stringify(response));
                if (response.data.status.success) {
                  bootbox.alert({
                    size: "small", message: "Favorilerinizden başarıyla kaldırıldı!", callback: function () {
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
    makeComment:function(link){
      //axios({ method: 'post', url: '/book-info', data: { selflink: link } }); 
      window.location.href = '/book-info?q='+link
    }
  }
});



  
new Vue({
  el: '#app',
  data: {
      user: {},
      comments: [],
      favorites: []
  },
  medthods : {
    
  },
  mounted: function(){
    var self = this
    if (userId != "" && userId != undefined && userId != null) { 
        axios.post(`/profile?userId=${userId}`)
              .then((response) => {
                  self.user = response.data.payload

                  //GET COMMENTS
                  axios.get(`/comment?userId=${userId}`)
                      .then((response) => {
                          self.comments = response.data.payload
                          console.log(JSON.stringify(response)); 
                      }, (error) => {
                          console.log(JSON.stringify(error));
                      });



                          //GET FAVORITES
                  axios.get(`/favorite?userId=${userId}`)
                      .then((response) => {
                        self.favorites = response.data.payload
                      }, (error) => {
                          console.log(JSON.stringify(error));
                      })

              }, (error) => {
                  console.log(JSON.stringify(error));
              });
          
    } else {
      window.location = "/"
    }
  }
});
