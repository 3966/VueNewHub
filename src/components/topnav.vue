<template>
  <div class="top hidden-xs" >
    <div class="row hubrow">
      <div class="col-sm-5">
        <div class="logged" style="line-height: 4.6875vw;">You are logged in as Admin Test-Bi</div>
        <!-- My Account -->
        <a
          href="https://www.hyperhub.com.au/newhub/Page/My_Account.php"
          class="ho2"
        >My Account</a>
      </div>
      <div class="col-sm-7 text-right hubpadding">
        <ul>
          <li v-for ="(item,index) in topNavList" :key = "index" >
            <router-link :to="{name: item.link }">{{item.title}}</router-link>
          </li>
        </ul>
        <div class="icon icon-menu menu_control" data-type="false" @click= "hdclick(false)">
          <span class="glyphicon glyphicon-align-justify" aria-hidden="true"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
   import btn from '@/assets/js/btn.js'
export default {

     data(){
     return{
        topNavList:[
           { title:"Dashboard " ,
             link:"dashboard"
           },
           { 
              title:"Access Privilege" ,
              link:"PriviLege"
           },
           { 
              title:"Master Setup" ,
              link:"masterSetup"
           },
           { 
              title:"Help" ,
              link:"mailto:margaux@hyperhyper.com.au"
           },
          //  {
          //      title: "Log Out",
          //      link:"https://www.hyperhub.com.au/newhub/Page/logout.php?click=logout"
          //  },
           {
               title:"log gin",
               link:"login"
           }


       
         ],
         hubflag:true,
         
       }
          },
      methods: {
          hdclick(opt){
            
              if(this.hubflag == false){
                 this.hubflag = true;
              }else{
                  this.hubflag = opt; 
              }
              btn.$emit('potValue',this.hubflag)
          }
      },



};
</script>

<style>
 @import "../assets/css/topnav/topnav.css"; 
</style>