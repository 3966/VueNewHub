<template>
     <div role="tabpanel" class="tab-pane active in" id="dashboard_DATABASE">
         <edit></edit>
         <module></module>
         <sub-box></sub-box>
</div>
</template>

<script>
 import Edit from '@/components/master-setup/database/edit .vue'
 import Module from '@/components/master-setup/database/module.vue'
 import subBox from '@/components/master-setup/database/sub.vue'

export default {
    components:{
        Edit,
        Module,
        subBox
        
    }

}
</script>

<style>
 @import'C:\Users\Zero\Desktop\D active\Vue\newdemo\src\assets\css\database\index.css'
</style>