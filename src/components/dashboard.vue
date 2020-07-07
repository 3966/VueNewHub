<template>
  <div class="content-wrapper" style="background-color: #fff;padding-top: 0px;">
    <div class="page-content">
      <div class="row justify-content-between">
        <div class="col-sm-12 col-12 m12-5" style="position: relative;z-index: 1000;">
          <div class="row">
            <div class="col-lg-5 col-12 pc400">
              <div class="col-sm-12 tttitle">
                <strong
                  style="font-size: 14px;color: #333333;font-family: 'Lato', sans-serif;"
                >HYPER HUB ACTIVITY</strong>
              </div>
              <div id="chartdiv"></div>
            </div>
            <div class="col-lg-6 col-12 martop58">
              <div class="box_hilite tttitle">
                <strong
                  style="font-size: 14px;color: #333333;font-family: 'Lato', sans-serif;"
                >DATABASE STATS</strong>
              </div>
              <div class="graph" id="circle" style="padding: 0;height: 300px;margin-top:30px"></div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-12 m12-5">
          <div class="row">
            <div
              class="col-lg-5 col-12 min768column martop58"
              style="color: #767188; position: relative; "
            >
              <div class="col-sm-12 tttitle">
                <strong
                  style="font-size: 14px;color: #333333;font-family: 'Lato', sans-serif;"
                >UPCOMING ACTIVITY</strong>
              </div>
              <div class="row kids3" style="margin-bottom: 25px;clear:both">
                <div class="col-sm-12 col-lg-2">
                  <b style="font-size: 16px;">24</b>
                  <br />
                  <span style="font-size: 12px;">jun</span>
                </div>
                <div class="col-sm-12 col-lg-7">
                  <span style="font-size: 15px;">campaign Margaux Everett</span>
                  <br />
                  <input
                    type
                    name
                    placeholder="Winter Festival Email"
                    style="border:none;border-bottom:thin solid #767188;width: 100%;background: unset;font-size: 13px;"
                    disabled
                    value=""
                  />
                </div>
                <div class="col-sm-12 col-lg-3">
                  <a href="">
                    <div class="btn btn-zdy">VIEW</div>
                  </a>
                </div>
              </div>
              <div class="row kids_menu" style="text-align: center;justify-content: center">
                <a
                  title="See more activities"
                  class="see-more"
                  href="https://www.hyperhub.com.au/newhub/Page/activity_list.php"
                  style="text-decoration:none;"
                >
                  <span
                    style="display: inline-block;width:5px;height: 5px;background: #f68e31;border-radius: 100%;margin-right: 10px;"
                  ></span>
                  <span
                    style="display: inline-block;width:5px;height: 5px;background: #f68e31;border-radius: 100%;margin-right: 10px;"
                  ></span>
                  <span
                    style="display: inline-block;width:5px;height: 5px;background: #f68e31;border-radius: 100%;margin-right: 10px;"
                  ></span>
                </a>
              </div>
            </div>

            <div class="col-lg-6 col-12 martop58">
              <div class="box_hilite tttitle">
                <strong class="change_title">ADVOCACY CYCLE</strong>
              </div>
              <div class="graph" id="circle2" style="padding: 0;"></div>
              <!-- <img src="./temp20200302.png" style="padding: 0;height: 290px;"> -->
              <div class="white_box" style="padding:0;margin:0;border:none;">
                <table width="100%" cellspacing="0" cellpadding="0" border="0">
                  <tr class="database_top">
                    <td tag="1" class="change_graps click">...</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>