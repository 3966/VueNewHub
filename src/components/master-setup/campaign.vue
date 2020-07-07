<template>
  <div role="tabpanel" class="tab-pane active in" id="dashboard_SURVEY">
    <div class="white_box_tab">
        <!-- 组件 -->
        <!-- 创建 组件 -->
        <!-- <create-group ></create-group> -->
      <b-div :propsname ="propsname" ></b-div>
         <!-- email 组件块 -->
      <email-group></email-group>
        <!-- primary 组件块 -->
      <primary-group></primary-group>
        <!-- template  模块 --> 
      <template-group></template-group>
        <!-- campaign  信息 -->
      <group-campaign></group-campaign>
  </div>

  </div>
</template>

<script>
import emailGroup from "@/components/master-setup/group/emailGroup.vue";
import primaryGroup from "@/components/master-setup/group/primaryGroup.vue";
import templateGroup from "@/components/master-setup/group/templateGroup.vue";
import groupCampaign from "@/components/master-setup/group/groupCampaign.vue";
import createGroup from "@/components/master-setup/group/createGroup.vue";
import btn from "@/assets/js/btn";
export default {
  components: {
    emailGroup,
    primaryGroup,
    templateGroup,
    groupCampaign,
    createGroup,
   'b-div':createGroup
  },
  data() {
    return { 
      propsname:"Campaign Name",
      flag: false,
      EActive: 0,
    };
  },
  methods: {
    show(index) {
      this.flag = index;
    },
    EClick(index) {
      this.EActive = index;
    },

  }
};
</script>

<style >
@import "C:\Users\Zero\Desktop\D active\Vue\newdemo\src\assets\css\eventss\index.css";
@import "C:\Users\Zero\Desktop\D active\Vue\newdemo\src\assets\css\eventss\timePacker.css";
</style>