<template>
  <div class="white_box_tab">
    <ul class="ul_one">
      <li>
        <ul class="ul_two">
          <li class="slide_btn" data="0">
            <div class="data_li_title" @click="hdclick(true)">
              <span class="glyphicon glyphicon-plus extension"></span> Subscriptions
            </div>
          </li>
          <li style="padding:20px;" class="slide_center" data="0" :class="{active:flag==true}" >
            <ul>
              <form class="areas_of_interest_form">
                <li>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Option1</label>
                        <input type name="subscriptions[]" class="form-control" value="Opt 1" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Option2</label>
                        <input type name="subscriptions[]" class="form-control" value="Opt 2" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Option3</label>
                        <input type name="subscriptions[]" class="form-control" value="Opt 3" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Option4</label>
                        <input type name="subscriptions[]" class="form-control" value="Opt 4" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Option5</label>
                        <input type name="subscriptions[]" class="form-control" value="Opt 5" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Option6</label>
                        <input type name="subscriptions[]" class="form-control" value="Opt 6" />
                      </div>
                    </div>
                  </div>
                </li>
              </form>
              <li>
                <div class="row">
                  <div class="col-sm-2">
                    <button class="areas_of_interest_save btn btn-zdy">Save</button>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
 export default {
    data(){
    return{
       flag:false
       }
    },
  methods:{
    hdclick(active){
      if(this.flag==true){
        this.flag= false
      }else{
        this.flag = active
      }


    }
  }
};
</script>

<style>
</style>