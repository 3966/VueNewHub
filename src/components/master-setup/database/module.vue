<template>
  <div class="white_box_tab">
    <ul class="ul_one">
      <li>
        <ul class="ul_two">
          <li class="slide_btn" data="0">
            <div class="data_li_title" @click="hdclick(true)">
              <span class="glyphicon glyphicon-plus extension"></span> Module-Advocacy/Purchase Cycle
            </div>
          </li>
          <li style="padding:20px;" class="slide_center" data="0" :class="{active:flag==true}">
            <ul>
              <form class="module_form">
                <li>
                  <span style="color: #f68e31;">ADVOCACY CYCLE</span>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Awareness</label>
                        <input
                          type
                          name="ad_Awareness"
                          class="form-control"
                          value="Opened any one of emails"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Engaged</label>
                        <input type name="ad_Engaged" class="form-control" value="Opened 3 emails" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Interest</label>
                        <input
                          type
                          name="ad_Interest"
                          class="form-control"
                          value="Opened 3 emails AND (onto website OR microsite)"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Understanding</label>
                        <input
                          type
                          name="ad_Understanding"
                          class="form-control"
                          value="Opened 6 emails AND (onto website OR microsite)"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Conviction</label>
                        <input
                          type
                          name="ad_Conviction"
                          class="form-control"
                          value="Opened 6 emails AND (onto website OR microsite) AND Member Portal"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Advocate</label>
                        <input
                          type
                          name="ad_Advocate"
                          class="form-control"
                          value="Opened 6 emails AND (onto website OR microsite) AND Member Portal AND Conference"
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <span style="color: #f68e31;">PURCHASE CYCLE</span>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Awareness</label>
                        <input
                          type
                          name="pu_Awareness"
                          class="form-control"
                          value="Opened any one of emails"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Engaged</label>
                        <input type name="pu_Engaged" class="form-control" value="Opened 3 emails" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Interest</label>
                        <input
                          type
                          name="pu_Interest"
                          class="form-control"
                          value="Opened 3 emails AND (onto website OR microsite)"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Consideration</label>
                        <input
                          type
                          name="pu_Consideration"
                          class="form-control"
                          value="Opened 6 emails AND (onto website OR microsite)"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Preference</label>
                        <input
                          type
                          name="pu_Preference"
                          class="form-control"
                          value="Opened 6 emails AND (onto website OR microsite) AND created profile"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Purchase</label>
                        <input
                          type
                          name="pu_Booking"
                          class="form-control"
                          value="Opened 6 emails AND (onto website OR microsite) AND created profile AND made referral"
                        />
                      </div>
                    </div>
                  </div>
                </li>
              </form>
              <li>
                <div class="row">
                  <div class="col-sm-2">
                    <button class="module_save btn btn-zdy">Save</button>
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