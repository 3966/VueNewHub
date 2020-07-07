<template>
  <div class="PrimaryGroup" :class="{active:flag ==1}" v-on:click.stop="show(-1)">
    <div class="row PrimaryList" v-on:click.stop>
      <div
        class="col-sm-3 btn"
        v-for="(item,index9) in PrimaryList"
        :key="index9"
        style="padding-bottom:10px"
        :class="{active:index9==Active}"
        v-on:click.capture="prClick(index9)"
        primary_profile_id="index9"
      >{{item}}</div>
    </div>
  </div>
</template>

<script>
import btn from '@/assets/js/btn.js';
export default {
   data(){
       return{
         flag:0,
         Active:0,
          PrimaryList: ["Customers", "Prospects", "Staff", "test3"],

    
       }
   },
  mounted(){
   btn.$on("groupValue",data=>{
       this.flag =data;
   })
  },
  methods: {
   prClick(index) {
      this.Active = index;
    },
    show(active){
      this.flag = active
    }

  }



};
</script>

<style>
</style>