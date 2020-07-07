<template>
  <div class="white_box_tab">
    <ul class="ul_one">
      <li>
        <ul class="ul_two">
          <li class="slide_btn" data="0">
            <div class="data_li_title" @click ="hdclick(true)">
              <span class="glyphicon glyphicon-plus extension"></span> Edit Profiles
            </div>
          </li>
          <li style="padding:20px;" class="slide_center" :class="{active:flag==true}" data="0">
            <ul class="ul_three">
              <li>
                <div class="row">
                  <div class="profiles_tr">
                    <div
                      class="col-sm-6"
      
                    >
                      <input
                        type="text"
                        value="Customers"
                        class="primary_profile_text"
                        data-id="1"

                      />
                      <label class style="margin-left: 6px;margin-right:6px;">Select Module</label>
                      <select
                        name="Process_Cycle"
                        class="form-control Process_Cycle"
                        style="height:34px;width:30%;display: inline-block;"
          
                      >
                        <option value="Advocacy cycle">Advocacy cycle</option>
                        <option value="Purchase cycle" selected>Purchase cycle</option>
                      </select>
                      <img
                        src="https://www.hyperhub.com.au/newhub/images/del.png"
                        alt
                        style="float: right;margin-top:7px;display:none"
                        class="del_select"
                        data-id="1"
             
                        width="20"
                      />
                    </div>
                    <div
                      class="col-sm-6"
   
                    >
                      <input
                        type="text"
                        value="Prospects"
                        class="primary_profile_text"
                        data-id="2"
 
                      />
                      <label class style="margin-left: 6px;margin-right:6px;">Select Module</label>
                      <select
                        name="Process_Cycle"
                        class="form-control Process_Cycle"
                        style="height:34px;width:30%;display: inline-block;"
                   
                      >
                        <option value="Advocacy cycle" selected>Advocacy cycle</option>
                        <option value="Purchase cycle">Purchase cycle</option>
                      </select>
                      <img
                        src="https://www.hyperhub.com.au/newhub/images/del.png"
                        alt
                        style="float: right;margin-top:7px;display:none"
                        class="del_select"
                        data-id="2"
         
                        width="20"
                      />
                    </div>
                    <div
                      class="col-sm-6"
               
                    >
                      <input
                        type="text"
                        value="Staff"
                        class="primary_profile_text"
                        data-id="3"

                      />
                      <label class style="margin-left: 6px;margin-right:6px;">Select Module</label>
                      <select
                        name="Process_Cycle"
                        class="form-control Process_Cycle"
                        style="height:34px;width:30%;display: inline-block;"

                      >
                        <option value="Advocacy cycle">Advocacy cycle</option>
                        <option value="Purchase cycle" selected>Purchase cycle</option>
                      </select>
                      <img
                        src="https://www.hyperhub.com.au/newhub/images/del.png"
                        alt
                        style="float: right;margin-top:7px;display:none"
                        class="del_select"
                        data-id="3"

                        width="20"
                      />
                    </div>
                    <div
                      class="col-sm-6"

                    >
                      <input
                        type="text"
                        value="test3"
                        class="primary_profile_text"
                        data-id="7"
       
                      />
                      <label class style="margin-left: 6px;margin-right:6px;">Select Module</label>
                      <select
                        name="Process_Cycle"
                        class="form-control Process_Cycle"
                        style="height:34px;width:30%;display: inline-block;"
                
                      >
                        <option value="Advocacy cycle" selected>Advocacy cycle</option>
                        <option value="Purchase cycle">Purchase cycle</option>
                      </select>
                      <img
                        src="https://www.hyperhub.com.au/newhub/images/del.png"
                        alt
                        style="float: right;margin-top:7px;display:none"
                        class="del_select"
                        data-id="7"
       
                        width="20"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12 profiles_confirm" style="text-align: center;display:none">
                    <br />
                    <br />
                    <label class>Profiles:</label>
                    <input type="text" value class="primary_profile" />
                    <button type class="btn btn-warning confirm">confirm</button>
                  </div>
                  <div class="col-sm-12" style="text-align: center;">
                    <div class>
                      <img
                        src="https://www.hyperhub.com.au/newhub/images/add.svg"
                        class="add"
                        style="padding:20px;"
                        width="75"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li style="text-align:right;margin-top:20px;">
                <!-- <div class="row">
                                <div class="col-sm-6">
                                  
                                </div>
                                <div class="col-ms-4">
                                    
                                    <button class="Edit_Profiles page_index_btn" type="button" style="font-size: 1.1vw;">SAVE</button>
                                </div>
                </div>-->
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