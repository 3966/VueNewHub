<template>
                 <div class="content-wrapper">
                    <div class="page-head">
                        <div class="row">
                            <div class="col-sm-6">
                                <ol class="breadcrumb">
                                   
                                </ol>
                            </div>
                            <div class="col-sm-6 text-right">
                                <h1>Master Setup</h1>
                            </div>
                        </div>
                    </div>
                    
                    <div class="page-content">
                        <div class="tab">
                            <ul class="nav nav-tabs tab-hd" role="tablist" >
                                <li v-for ="(item,index) in masterList" :key="index" @click="hdclick(index)" v-bind:class="{active:index==isActive}"> <a><router-link :to="{name:item.name} ">{{item.title}}</router-link> </a></li>
                            </ul>
                            <div class="tab-content">
                                <router-view></router-view>
                            </div>
                        </div>
                    </div>
                    
                </div>

</template>

<script>
export default {

     data() {
         return{
             isActive:0,
             masterList:[
                    { 
                        title:"DATABASE",
                        name:"database"
                    },
                    {
                        title:"PROFILE",
                        name:"profile"
                    },
                    { 
                        title:"EMAIL",
                        name:"email"
                    },
                    {
                        title:"EVENT",
                        name:"event"
                    },
                 
                    {
                        title:"SURVEY",
                        name:"survey"
                    },
                    { 
                       title:"CAMPAIGN",
                       name:"campaign"
                    },
              
             ]
         }
     },
    methods:{
      hdclick(index){
             this.isActive =index;
      }
    }       
}
</script>

<style>
  @import'../assets/css/master_setup/master_setup.css'
</style>