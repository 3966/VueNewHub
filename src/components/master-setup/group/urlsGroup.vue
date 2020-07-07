<template>
  <div class="urls">
    <div class="urls-title" @click="urlsClick(true)">
      <span
        class="glyphicon extension urls-glyphicon"
        :class="urls==true?'glyphicon-minus':'glyphicon-plus'"
      ></span>
      <span>Microsite/Landing Page Source URLs</span>
    </div>
    <div class="urls-box" v-show="urls">
      <div class="row">
        <div class="col-sm-2">Source Name :</div>
        <div class="col-sm-6">
          <input type name class="form-control url" data-event-input="true" />
        </div>
        <div class="col-sm-4">
          <div class="btn btn-zdy produce_url" data-event-click="true">Produce URL</div>
        </div>
      </div>
      <div class="row urlsBox">
        <div class="col-sm-3">
          <a
            href="https://www.hyperhub.com.au/newhub/Events/?gp_id=7&amp;source=Email"
            target="_blank"
          >Email</a>
          <img
            src="https://www.hyperhub.com.au/newhub/images/del2.svg"
            style="width:25px;float:right"
            class="del_url"
            data-value="Email"
            data-event-click="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   data(){
     return{
     urls: false,
   }
   },
   methods: {
     urlsClick(active) {
      if (this.urls == true) {
        this.urls = false;
      } else {
        this.urls = active;
      }
    },
   }



};
</script>

<style>
</style>