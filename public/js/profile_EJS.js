


Vue.component('profile', {
    template: `
        <div class="row" v-if="user">
            <div class="col-xs-12 col-sm-6 col-md-12" >
                <div class="row" style="margin-top:3em; margin-bottom:3em;">
                    <div class="col-sm-6 col-md-2">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzEWMQC9euAL2VV-iZ22uUw5lvEhpj30wFtwRsAF0-UU8xFx72&usqp=CAU" alt="" class="img-rounded img-responsive"
                            height="300" width="300"  style="margin-bottom: 10px;"/>
                    </div>
                    <div class="col-sm-6 col-md-10" style="margin-top:6em;">
                        <h5 style="margin-left:3em;">Ad Soyad: <b>{{user.name + ' ' + user.surname}}</b></h5> 
                        <h5 style="margin-left:3em;">Email: <b>{{user.email}}</b></h5> 
                        <h5 style="margin-left:3em;">Hakkında: <b>{{user.about}}</b></h5> 
                    </div>
                </div>                     
            </div>
            <div name="NavBar" style="margin-top: 10;" class="col-xs-12 col-sm-6 col-md-12 ">
                <ul class="nav nav-tabs" id="myTab" role="tablist" >
                    <li class="nav-item">
                      <a class="nav-link active" id="profile-tab" data-toggle="tab" href="#yorumlarım" role="tab" aria-controls="profile" aria-selected="false">Yorumlarım</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="home-tab" data-toggle="tab" href="#favorilerim" role="tab" aria-controls="home" aria-selected="false">Favorilerim</a>
                    </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                      <div class="tab-pane fade show active" id="yorumlarım" role="tabpanel" aria-labelledby="profile-tab">
                          <!-- YORUMLAR LIST -->
                          <div id="searchResult" class="container"  style="margin-bottom:1%">
                            <comment v-for="(comment,i) in comments" :key="i" :comment="comment"/>
                          </div>
                      </div>
                      <div class="tab-pane fade" id="favorilerim" role="tabpanel" aria-labelledby="home-tab">
                          <!-- FAVORILER LIST -->
                      </div>
                    </div>
                </div> 
        </div>
    `,
    props: {
      user: Object,
      comments: Array
    },
    methods: {
      deleteComment: function (event) {

      },
      editComment: function (event) { 
         
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
            <span class="text-muted pull-right"  style="margin-right: 3em;">
                <button id="edit" type="button" data-toggle="modal" style="display:none" data-target="#exampleModal" data-whatever="@mdo">
                  <span class="glyphicon">&#x270f;</span>
                  </button>
                  <button id="trash" data-toggle="modal"  v-on:click="deleteComment" type="button">
                  <span class="glyphicon"> &#xe020;</span>
                </button>
            </span>
            <strong class="text-success">@{{comment.username}}</strong>
            <b><p> {{ comment.bookName + ' - ' + comment.author }} </p></b>
            <p><b> Comment: </b>{{ comment.comment }} </p>
            <div class="col-md-12">
              <span class="text-muted pull-right">
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
        user: {},
        comments: []
    },
    medthods : {
      getComments : function(){
        var self = this
      }
    },
    mounted: function(){
      var self = this
      if (userId != "" && userId != undefined && userId != null) { 
         axios.post(`/profile?userId=${userId}`)
                .then((response) => {
                    self.user = response.data.payload
                    axios.get(`/comment?userId=${userId}`)
                        .then((response) => {
                            self.comments = response.data.payload
                            console.log(JSON.stringify(response));
                        }, (error) => {
                            console.log(JSON.stringify(error));
                        });
                }, (error) => {
                    console.log(JSON.stringify(error));
                });
            
      } else {
        window.location = "/"
      }
    }
  });
  