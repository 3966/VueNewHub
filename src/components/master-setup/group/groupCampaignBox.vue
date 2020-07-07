<template>
  <div class="group-campaign-box">
    <div class="row" style="font-size: 0.9vw;background: #ffff;padding: 15px;border-radius: 14px;">
      <div class="col-sm-3 text-center" v-for="(item,index5) in tabList" :key="index5">
        <a
          v-on:click.stop
          v-if="item.href"
          :href="(item.href.href)"
          target="_blank"
          class="network"
        >
          <img :src="(item.src)" :title="item.title" :class="item.class" width="30" />
          <img
            v-if="item.children"
            :src="(item.children.src)"
            style="position: absolute;
                   transform: translateX(-10px);"
            :class="item.children.class"
          />
        </a>
        <img
          v-else
          v-on:click.stop
          @click="tabclick(index5)"
          :src="(item.src)"
          :title="item.title"
          :class="item.class"
          width="30"
        />
        <img
          v-if="item.children"
          :src="(item.children.src)"
          style="position: absolute;
                   transform: translateX(-10px);"
          :class="item.children.class"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-2">Event Name:</div>
      <div class="col-sm-10" style="padding-bottom: 10px;">
        <input
          type
          name="event_name"
          class="form-control event_name"
          data-bind="campaign-name-bind"
          data-ajax="Campaign"
          data-event-input="true"
        />
      </div>
      <div class="col-sm-2">Event Heading:</div>
      <div class="col-sm-10" style="padding-bottom: 10px;">
        <input
          type
          name="event_heading"
          class="form-control event_heading"
          data-ajax="Campaign"
          data-event-input="true"
        />
      </div>
      <div class="col-sm-2">Banner Image:</div>
      <div class="col-sm-10" style="padding-bottom: 10px;position: relative;">
        <input
          type
          name="event_banner"
          class="form-control event_banner"
          data-ajax="Campaign"
          data-event-input="true"
           :value="photoSrc"
         
        />
        <img
          src="https://www.hyperhub.com.au/newhub/images/up.svg"
          style="position: absolute;width: 20px;right: 50px;top: 5px;"
          class="upload"
          data-event-click="true"
           @click="$refs.inputFile.click()"
        />
        <img
          src="https://www.hyperhub.com.au/newhub/images/yanjing.svg"
          style="position: absolute;width: 20px;right: 20px;top: 5px;"
          class="Preview_picture"
          data-event-click="true"
        />
      </div>
      <div class="col-sm-2">Event Description:</div>
      <div class="col-sm-10" style="padding-bottom: 10px;">
        <textarea
          name="event_description"
          class="form-control event_description"
          data-ajax="Campaign"
          style="height: 120px;"
          data-event-input="true"
        ></textarea>
      </div>
      <div class="col-sm-2">Footer Contact Info:</div>
      <div class="col-sm-10" style="padding-bottom: 10px;">
        <textarea
          name="footer_info"
          class="form-control footer_info"
          data-ajax="Campaign"
          style="height: 120px;"
          data-event-input="true"
        ></textarea>
      </div>
      <div class="col-sm-2">Finish Redirection URL:</div>
      <div class="col-sm-10" style="padding-bottom: 10px;">
        <input
          type
          name="finish_redirection_url"
          class="form-control finish_redirection_url"
          data-ajax="Campaign"
          data-event-input="true"
        />
      </div>
    </div>
    <div class="row">
      <!-- 问题组 -->
      <div class="col-sm-12 question_group" v-for="(item,index) in counter" :key="index">
        <group></group>
      </div>
      <div class="col-sm-4" style="padding-top: 20px;padding-bottom: 20px">
        <button class="btn btn-zdy add_question" @click="add_question()">+ New Event City</button>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-2">Thank you Heading:</div>
      <div class="col-sm-10" style="padding-bottom: 10px;">
        <input
          type
          name="thankyou_heading"
          class="form-control thankyou_heading"
          data-ajax="Campaign"
          data-event-input="true"
        />
      </div>
      <div class="col-sm-2">Thank you Description:</div>
      <div class="col-sm-10" style="padding-bottom: 10px;">
        <textarea
          name="thankyou_description"
          class="form-control thankyou_description"
          data-ajax="Campaign"
          style="max-width: 100%;resize:auto;height: auto;"
          data-event-input="true"
        ></textarea>
      </div>
    </div>
    <urls-group></urls-group>
      <!-- 触发本地上传 -->
    <form id="upForm" enctype="multipart/form-data">
      <input type="file" name="file" id="photo"  ref="inputFile" @click="photo($event)" />
    </form>
  </div>
</template>

<script>
import urlsGroup from "@/components/master-setup/group/urlsGroup.vue";
import group from "@/components/master-setup/group/group2.vue";
import btn from "@/assets/js/btn";
export default {
   components: {
     urlsGroup,
     group,


   },
  data() {   
    return {
      counter:[],
      isActive: -1,
      flag:0, 
      photoSrc:"请上传图片",
      tabList: [
        {
          src: "https://www.hyperhub.com.au/newhub/images/people.svg",
          title: "Primary Profile Settings",
          class: "PrimarySelect",
          children: {
            src: "https://www.hyperhub.com.au/newhub/images/!.svg",
            class: "PrimaryNull"
          }
        },

        {
          src: "https://www.hyperhub.com.au/newhub/images/template.svg",
          title: "View/Update Theme"
        },
        {
          src: "https://www.hyperhub.com.au/newhub/images/network.svg",
          title: "Preview Online",
          class: "network",

          href: {
            href: "https://www.hyperhub.com.au/newhub/Events/?gp_id:7"
          }
        },

        {
          src: "https://www.hyperhub.com.au/newhub/images/email.svg",
          class: "emailSelect",
          title: "Email Settings",
          children: {
            src: "https://www.hyperhub.com.au/newhub/images/!.svg",
            class: "emailNull"
          }
        },

        {
          src: "https://www.hyperhub.com.au/newhub/images/delete.svg",
          class: "del",
          title: "Delete"
        }
      ]
    };
  },
  
  methods: {
      tabclick(index) {
      this.flag = index + 1;
      btn.$emit("groupValue", this.flag);
    },
     add_question() {
      this.counter.push({});
    },
    photo(e){
     e.target.files;
     console.log(e.target.files)

    },
    // triggerClick(){
    //   this.$refs.file.dispatchEvent(new MouseEvent('click'))
    // }

  }

};
</script>

<style>
</style>