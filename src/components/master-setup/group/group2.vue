<template>
  <div class="group2" type="false" data-id="15">
    <div class="group2-title">
      <span
        class="glyphicon extension group2-glyphicon"
       :class="flag==true?'glyphicon-minus':'glyphicon-plus'"
        @click="groupClick(true)"
      ></span>
      <input
        type
        name="event_city"
        class="form-control question"
        value
        data-ajax="question"
        placeholder="Please enter the event city name"
        style="display: inline-block;width: 500px;border: none;box-shadow: none;"
        data-event-input="true"
        data-event-keydown="true"
      />
      <div
        style="float: right;padding-right: 10px;display: inline-block;font-size: 16px;margin-top: 5px;"
      >
        <span class="event-date-bind">15 Jul 2020</span>
      </div>
    </div>
    <div class="group2-box" v-show="flag">
      <div class="row">
        <div class="col-sm-2 omit">
          <span title="Event Date">Event Date</span>
        </div>
        <div class="col-sm-10" style="margin-bottom: 5px;">
          <input
            type="date"
            class="form-control question_description"
            value
            placeholder="Event Date"
            data-ajax="question"
            name="event_date"
            data-bind="event-date-bind"
            data-event-input="true"
            data-event-keydown="true"
          />
        </div>
        <div class="col-sm-2 omit">
          <span title="Event Venue">Event Venue</span>
        </div>
        <div class="col-sm-10" style="margin-bottom: 5px;">
          <input
            class="form-control question_description"
            value
            placeholder="Event Venue"
            data-ajax="question"
            name="event_venue"
            data-event-input="true"
            data-event-keydown="true"
          />
        </div>
        <div class="col-sm-2 omit">
          <span title="Event Address">Event Address</span>
        </div>
        <div class="col-sm-10" style="margin-bottom: 5px;">
          <input
            class="form-control question_description"
            value
            placeholder="Event Address"
            data-ajax="question"
            name="event_address"
            data-event-input="true"
            data-event-keydown="true"
          />
        </div>
        <div class="col-sm-2 omit">
          <span title="Google Map Image (for email)">Google Map Image (for email)</span>
        </div>
        <div class="col-sm-10" style="margin-bottom: 5px;position: relative;">
          <input
            class="form-control question_description"
            value
            placeholder="Google Map Image (for email)"
            data-ajax="question"
            name="map_image_email"
            data-event-input="true"
            data-event-keydown="true"
          />
          <img
            src="https://www.hyperhub.com.au/newhub/images/up.svg"
            style="position: absolute;width: 20px;right: 50px;top: 5px;"
            class="upload"
            data-event-click="true"
          />
          <img
            src="https://www.hyperhub.com.au/newhub/images/yanjing.svg"
            style="position: absolute;width: 20px;right: 20px;top: 5px;"
            class="Preview_picture"
            data-event-click="true"
          />
        </div>
        <div class="col-sm-2 omit">
          <span title="Google Map Short Link (for email)">Google Map Short Link (for email)</span>
        </div>
        <div class="col-sm-10" style="margin-bottom: 5px;position: relative;">
          <input
            type
            class="form-control question_image"
            value
            placeholder="Google Map Short Link (for email)"
            data-ajax="question"
            name="map_short_link"
            data-event-input="true"
            data-event-keydown="true"
          />
        </div>
        <div class="col-sm-2 omit">
          <span title="Google Map Link (for online page)">Google Map Link (for online page)</span>
        </div>
        <div class="col-sm-10" style="margin-bottom: 5px;position: relative;">
          <input
            type
            class="form-control question_image"
            value
            placeholder="Google Map Link (for online page)"
            data-ajax="question"
            name="map_long_link"
            data-event-input="true"
            data-event-keydown="true"
          />
        </div>

        <div class="col-sm-2 omit">
          <span title="Parking">Parking</span>
        </div>
        <div class="col-sm-10" style="margin-bottom: 5px;position: relative;">
          <textarea
            class="form-control question_image"
            value
            placeholder="Parking"
            data-ajax="question"
            style="height: 120px;"
            name="parking_info"
            data-event-input="true"
          ></textarea>
        </div>
        <div class="col-sm-2 omit">
          <span title="Parking">Cost Value</span>
        </div>
        <div class="col-sm-10" style="margin-bottom: 5px;position: relative;">
          $
          <input
            type
            class="form-control question_image"
            value
            data-ajax="question"
            name="cost_value"
            style="width: 100px;display: inline-block;"
            data-event-input="true"
            data-event-keydown="true"
          /> inc GST
        </div>
        <div class="col-sm-2 omit">
          <span title="Parking">Cost Description</span>
        </div>
        <div class="col-sm-10" style="margin-bottom: 5px;position: relative;">
          <textarea
            class="form-control question_image"
            value
            placeholder="Cost Description"
            data-ajax="question"
            style="height: 120px;"
            data-event-input="true"
          ></textarea>
        </div>
      </div>
      <div class="row">
        <form class="field_group">
          <div class="common_field" style="margin-bottom: 5px;">
            <div class="col-sm-2">Session Time</div>
            <div class="col-sm-3" style="margin-bottom: 5px;position: relative;">
              <input
                type
                name="event_session_time[]"
                class="form-control event_session_time"
                value
                placeholder="Session Time"
                data-event-input="true"
                data-event-keydown="true"
                data-event-click="true"
              />
              <img
                src="https://www.hyperhub.com.au/newhub/images/del2.svg"
                style="width: 20px;position: absolute;right:20px;top:8px;"
                class="del3"
                data-event-click="true"
              />
            </div>
            <div class="col-sm-2">Arrival Description</div>
            <div class="col-sm-5" style="margin-bottom: 5px;position: relative;">
              <textarea
                name="event_description[]"
                class="form-control event_description"
                value
                placeholder="Arrival Description"
                style="height: 120px;"
                data-event-input="true"
              ></textarea>
            </div>
          </div>
        </form>
      </div>
      <div class="row" style="padding-top: 10px;">
        <div class="col-sm-4 text-center" style="margin-bottom: 5px;">
          <img
            src="https://www.hyperhub.com.au/newhub/images/add.svg"
            class="add_icon add_field"
            title="Add New Session"
            data-event-click="true"
          />
        </div>
        <div class="col-sm-4 text-center" style="margin-bottom: 5px;">
          <img
            src="https://www.hyperhub.com.au/newhub/images/save.svg"
            class="save_options"
            data-event-click="true"
            width="30"
          />
        </div>
        <div class="col-sm-4 text-center">
          <img
            src="https://www.hyperhub.com.au/newhub/images/delete.svg"
            class="del2"
            title="Delete"
            data-event-click="true"
            width="25"
          />
        </div>
      </div>
    </div>
    <div class="hook"></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
    flag:false,
    }

  },
  methods:{
  groupClick(active){
    if(this.flag==true){
      this.flag=false;
    }else{
      this.flag=true;
    };

  }
  }
};
</script>

<style>
</style>