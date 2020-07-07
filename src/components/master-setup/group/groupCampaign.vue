<template>
  <div class="row group" type="false">
    <div
      class="group-campaign"
      v-for="(item,index3) in eventList"
      :key="index3"
      type="false"
      :data-id="item.id"
    >
      <div class="group-campaign-title" v-on:click.stop="hdclick(index3)">
        <span
          class="glyphicon extension group-campaign-glyphicon"
          :class="isActive==index3?'glyphicon-minus':'glyphicon-plus'"
        ></span>
        <span class="campaign-name-bind">{{item.name}}</span>
      </div>
     <group-campaign-box v-show="isActive==index3"></group-campaign-box>
    </div>
  </div>
</template>

<script>
import groupCampaignBox from "@/components/master-setup/group/groupCampaignBox.vue";
import btn from "@/assets/js/btn";
export default {
  components: {
    groupCampaignBox,
  },
  data() {
    return {
      isActive: -1,
      eventList: [
        {
          name: "Bronwyn Getaway Roadshow of Baby Boomers",
          id: "1",
          primary_profile_id: "2"
        },
        {
          name: "Bronwyn Getaway Roadshow of Baby Boomers",
          id: "2",
          primary_profile_id: "2"
        },
        {
          name: "Bronwyn Getaway Roadshow of Baby Boomers",
          id: "3",
          primary_profile_id: "2"
        },
        {
          name: "Bronwyn Getaway Roadshow of Baby Boomers",
          id: "4",
          primary_profile_id: "2"
        },
        {
          name: "Bronwyn Getaway Roadshow of Baby Boomers",
          id: "5",
          primary_profile_id: "2"
        }
      ],

    };
  },
  methods: {
    hdclick(index) {
      if (this.isActive == index) {
        this.isActive = -1;
      } else {
        this.isActive = index;
      }
      btn.$emit("cpBox",index);
      btn.$emit("cpBoxindex",this.isActive);
    }
  }
};
</script>

<style>
</style>