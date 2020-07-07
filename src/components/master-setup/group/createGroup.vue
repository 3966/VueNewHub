<template>
      <div class="row">
        <div class="col-sm-12">
          <div class="row">
            <div class="col-sm-2 global_title">{{propsname}}:</div>
            <div class="col-sm-8">
              <input type class="form-control" id="event_name"/>
            </div>
            <div class="col-sm-2 text-right">
              <button class="btn btn-zdy create_campaign">Create</button>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
     props: ['propsname'],
   data(){
    return{
      }
   },

}
</script>

<style>

</style>