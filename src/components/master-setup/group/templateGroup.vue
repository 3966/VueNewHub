<template>
      <div class="templateGroup"  :class="{active:flag ==2}" v-on:click.stop="show(-1)">
        <div class="row templateList" v-on:click.stop>
          <div class="col-sm-12" style="padding-bottom: 10px;">
            <h5>Please select a theme/tempalte below:</h5>
          </div>
          <div
            class="col-sm-3 item template_slide"
            v-for="(item,index) in templateList"
            :key="index"
            style="position: relative;"
            :data-id="item.id"
            @click="evClick(index)"
          >
            <div class="warp">
              <div
                class="filter"
                style="background-image: url(&quot;https://www.hyperhub.com.au/newhub/uploads/null&quot;);"
              ></div>
              <div class="hit">{{item.title}}</div>
              <div class="choose">{{evActive==index?"Actived":"Enable"}}</div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import btn from '@/assets/js/btn';
export default {

  data(){
    return{
        flag:0,
        evActive:0,
        templateList: [
        {
          title: "Sorry",
          id: 1,
          icon: "1592553444.jpg"
        },
        {
          title: "Sorry (Not Attended)",
          id: 2,
          icon: "1592553444.jpg"
        },
        {
          title: "ThankYou",
          id: 3,
          icon: "1592553444.jpg"
        }
      ],
    }
  },
   mounted(){
   btn.$on("groupValue",data=>{
       this.flag =data;
   })
  },
  methods: {
  evClick(index) {
    this.evActive = index;
    },
      show(index) {
      this.flag = index;

    },
    }

}
</script>

<style>

</style>