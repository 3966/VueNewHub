<template id = "page">
  <div id="nav"  v-show="hubflag" >
    <div class="mynav">
      <div class="top top_moblie">
        <div class="logo" style="background:#ffffff;width: 100%; height: 100%;padding:10px;">
          <a href="https://www.hyperhub.com.au/newhub/Page/model.php">
            <img
              src="https://www.hyperhub.com.au/newhub/assets/images/new_logo.png"
              alt="logo"
              style="    width: auto; max-width: 100%;margin: 0;margin-top: 10px;"
            />
          </a>
        </div>
        <div style="clear: both;"></div>
      </div>
      <div class="menu_mobile">
        <span class="glyphicon glyphicon-menu-hamburger visible-xs myicon" aria-hidden="true"></span>
        <ul class="menu">
          <li class="database_tital hubli"  v-for="(item,index) in navList" :key="index"  v-bind:class="{active:index==isActive}"   @click="addClass(index)">
            <a style="cursor:pointer;" data="false">
              <div class="icon">
                <img
                  style="margin-top: -9px;"
                 :src="(item.icon)"
                  alt="icon"
                  class
                />
              </div>{{item.title}}
              <i class="fa fa-angle-right"></i>
            </a>
            <ul class="dropdown">
              <li class="database2_tital" v-for="(items,index) in item.children" :key="index" >
                <a :href="(items.link)"  v-on:click.stop="doThis">
                   {{items.title}} 
                  <i class="fa fa-angle-right"></i>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    import btn from '@/assets/js/btn.js'
export default {
	data(){
    return{
        hubflag:true,
        isActive:-1,
         navList:[ 
            {
              icon:"https://www.hyperhub.com.au/newhub/images/icons/Database.png",
              title:"Database",
              children:[
                {
                 title:"Graphs and Groups",
                 link:"https://www.hyperhub.com.au/newhub/Database/database2.php?P=database2"
                },
                {
                 title:"Search Database",
                 link:"https://www.hyperhub.com.au/newhub/Database/database4.php?P=database4"
                },
                {
                 title:"Add New Contact ",
                 link:"https://www.hyperhub.com.au/newhub/Database/database5.php?P=database5"
                },
              ]
              },
            {
              icon: "https://www.hyperhub.com.au/newhub/images/icons/Profile.png",
              title:"Profile",
              children:[
                {
                 title:"Total Database",
                 link:"https://www.hyperhub.com.au/newhub/Profile/Profile.php?P=Profile"
                },
               ]
            },
            {
              icon: "https://www.hyperhub.com.au/newhub/images/icons/Email.png",
              title:"Email",
              children:[
                {
                 title:"Graphs and Groups",
                 link:"https://www.hyperhub.com.au/newhub/Email/email5.php?P=email5"
                },
                {
                 title:"Create New Email",
                 link:"https://www.hyperhub.com.au/newhub/Email/email.php?P=email"
                },
                {
                 title:"View Campaign",
                 link:"https://www.hyperhub.com.au/newhub/Email/email4.php?P=email4"
                },
              ]
              },
            {
              icon: "https://www.hyperhub.com.au/newhub/images/icons/Events.png",
              title:"Events",
              children:[
                {
                  title:"",
                  link:"https://www.hyperhub.com.au/newhub/Events/event_group.php"
                }
              ]

              },
            {
              icon: "https://www.hyperhub.com.au/newhub/images/icons/Survey.png",
              title:"Survey",
              children:[
                {
                  title:" Graphs and Groups",
                  link:"https://www.hyperhub.com.au/newhub/Survey/survey_group.php"
                },
                {
                  title:"Surveys",
                  children:[]
                }
              ]
              },
            {
              icon: "https://www.hyperhub.com.au/newhub/images/icons/Campaign.png",
              title:"Campaign",
              children:[
                {
                 title:"Graphs and Groups",
                 link:"https://www.hyperhub.com.au/newhub/Campaign/campaign_group.php"
                },
                    
                {
                 title:"Campaigns",
                 children:[

                 ],
                 
                },
              ]
            },





         ]

		 }
	}, 
	mounted (){
    btn.$on('potValue',data=>{
      this.hubflag = data;
     })
       
	},
	methods:{
      addClass(index){
        if( this.isActive ==index){
             this.isActive = -1;
        }else{
            this.isActive = index; 
        }
 
      },
    stopPropagation(event){
      console;log(11111)
      var e= arguments.callee.caller.arguments[0] || event;//这里是因为除了IE有event其他浏览器没有所以要做兼容
        if(window.event){       //这是IE浏览器
            e.cancelBubble=true;
        }else if(e && e.stopPropagation){     //这是其他浏览器
            e.stopPropagation();//阻止冒泡事件
        }
}
  },


}
 
</script>

<style>
@import "../assets/css/right/right.css";
@import "../assets/css/font-awesome/css/font-awesome.css";
</style>