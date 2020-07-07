<template>
  <div class="emailGroup" :class="{active:group==4}" v-on:click.stop="show(-1)" >
    <div class="row emailList" v-on:click.stop>
      <div class="col-sm-12" style="padding-bottom: 10px;">
        <div
          class="btn btn-active"
          v-for="(item,index) in emailList"
          :key="index"
          :go="item.go"
          @click="EClick(index)"
          :class="{btn_active:index==EActive}"
        >{{item.name}}</div>
      </div>
      <div
        class="row email_list"
        v-for="(item,index) in emailList"
        :key="index"
        :class="{active:EActive==index}"
      >
        <div
          v-for="(items,index2) in item.children"
          :key="index2"
          class="col-sm-3 item email_slide"
          style="position: relative;"
          :data-id="items.id"
          :email_type="item.name"
           @click ="onClick(index2)"
        >
          <div class="warp">
            <div
              class="filter"
              :class="{activeFilter:ETActive==index2}"
              style="background-image: url(https://www.hyperhub.com.au/newhub/images/temp4.png);"
            ></div>
            <div class="hit">{{items.title}}</div>
            <div
              style="display: flex;position: absolute;bottom:82px;width: 100%;"
              class="prevent"
              data-event-click="true"
            >
              <div style="width: 50%;text-align: center;">
                <a
                  target="_blank"
                  class="viewEmail"
                  :href="'https://www.hyperhub.com.au/newhub/Email/email.php?P=email&amp;id='+items.id"
                >
                  <img
                    src="https://www.hyperhub.com.au/newhub/images/edit.png"
                    style="width: 30px;"
                  />
                </a>
              </div>
              <div style="width: 50%;text-align: center;">
                <a
                  target="_blank"
                  class="viewEmail"
                  :href="'https://www.hyperhub.com.au/newhub/Email/email.php?P=email&amp;id='+items.id"
                >
                  <img
                    src="https://www.hyperhub.com.au/newhub/images/yanjing.svg"
                    style="width: 30px;"
                  />
                </a>
              </div>
            </div>
            <div
              class="choose"
              :class="{activeFilter:ETActive==index2}"
            >{{ETActive==index2?"Actived":"Enable"}}</div>
          </div>
        </div>
        <div class="col-sm-3">
          <a
            class="btn1 add2"
            href="https://www.hyperhub.com.au/newhub/Email/email.php?P=email&amp;type=Event&amp;email_type=Welcome/Invitation Email"
            target="_blank"
          >
            <img
              src="https://www.hyperhub.com.au/newhub/images/add.svg"
              class
              title="Create New Email"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import btn from '@/assets/js/btn.js'
export default {
  data() {
    return {
      EActive: 0,
      ETActive: 0,
      group:0,
      emailList: [
        {
          go: "Welcome/Invitation Email",
          name: "Welcome/Invitation Email",
          children: [
            {
              title: "Invincible fai",
              id: 1
            },
            {
              title: "Invincible fai",
              id: 2
            },
            {
              title: "Invincible fai",
              id: 3
            }
          ]
        },
        {
          go: "Confirmation",
          name: " Registration Confirmation",
          children: [
            {
              title: "Confirmation",
              id: 1
            },
            {
              title: " Confirmation",
              id: 2
            },
            {
              title: " Confirmation",
              id: 3
            }
          ]
        },
        {
          go: "Reminder",
          name: "Reminder",
          children: [
            {
              title: "Reminder",
              id: 1
            },
            {
              title: "Reminder",
              id: 2
            },
            {
              title: "Reminder",
              id: 3
            }
          ]
        },
        {
          go: "ThankYou",
          name: "Thank You(Attended)",
          children: [
            {
              title: "ThankYou",
              id: 1
            },
            {
              title: "ThankYou",
              id: 2
            },
            {
              title: "ThankYou",
              id: 3
            }
          ]
        },

        {
          go: "Sorry",
          name: " Sorry (Not Attended)",
          children: [
            {
              title: "Sorry",
              id: 1
            },
            {
              title: "Sorry",
              id: 2
            },
            {
              title: "Sorry",
              id: 3
            }
          ]
        }
      ]
    };
  },
  	mounted (){
    btn.$on('groupValue',data=>{
      this.group = data;
     })
       
	},
 methods:{
   EClick(index) {
      this.EActive = index;
    },
     show(index) {
      this.group = index;
    },
    onClick(index){
      this.ETActive=index;
    }
  },
  
};
</script>

<style>
</style>