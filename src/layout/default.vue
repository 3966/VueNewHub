<template>
  <el-container  style="height:100%">
    <el-container >
      <el-header  style="height: " >
        <top-nav />
      </el-header>
      <el-main> 
          <router-view></router-view>
      </el-main>
      <el-footer style="height: " > <foot-er/></el-footer>
    </el-container>
      <el-aside style =" width: " >
      <my-nav />
    </el-aside>

  </el-container>
</template>

<script>
import myNav from "@/components/right.vue";
import topNav from "@/components/topnav.vue";
import footEr from "@/components/footer.vue" 
import dashBoard from "@/components/dashboard.vue"

export default {
  components: {
    myNav,
    topNav,
    footEr,
    dashBoard

  }
};
</script>

<style>
</style>

