<template>
  <div class="tab-content">
    <div role="tabpanel" class="tab-pane active in" id="dashboard_EMAIL">
      <div class="white_box_tab">
        <div class="email_top" :class="{active:flag ==true}">
          <h2>View/Edit Created Templates</h2>
          <div class="view_temp" :class="{active:flag ==true}">
            <div class="email_template email_template_dele_No" v-for="(item,index) in  emailList " :key="index" style="position:relative;" :tag ="(item.id)">
              <p class="temp_name_p">{{item.name}}</p>
              <span class="glyphicon glyphicon-remove email_temp_remove"></span>
              <img
                :src="(item.icon)"
                style="height: 230px"
              />
            </div>
     

            <div
              class="email_template temp_new"
              tag="New"
              style="position: relative;"
              @click="hdclick(true)"
            >
              <p>&nbsp;</p>
              <img src="https://www.hyperhub.com.au/newhub/images/temp_add.png" alt />
              <span
                style="position: absolute;display: inline-block;left: 51px;bottom: 70px"
              >Add New Template</span>
            </div>
          </div>
        </div>
        <div class="email_temp_center" tag="false" v-bind:class="{active:flag==true}">
          <div class="white_box margin_bottom">
            <div class="box_hilite">
              <h5 style="display:inline-block;" class="email_h5">Add New Template</h5>
              <button
                class="page_index_btn email_back"
                style="float:right;margin:0px;"
                @click="hdclick(false)"
              >Back</button>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="form-col" style="position:relative;">
                  <div class="form-group name_old">
                    <label for="exampleInput1">Template name:</label>
                    <input
                      type="text"
                      class="template_name"
                      id="exampleInput1"
                      value
                      tag
                      style="border:1px solid #b7b7b7"
                    />
                    <span class="name_edit glyphicon"></span>
                  </div>
                  <div class="form-group name_new hiden">
                    <label for="exampleInput11">Template name:</label>
                    <input
                      type="text"
                      class="form-control template_name"
                      id="exampleInput11"
                      value
                      tag
                    />
                  </div>
                </div>
                <a
                  href="#"
                  style="display:none"
                  data-toggle="modal"
                  data-target="#modalPreview"
                  class="plus plus1"
                >Modal preview email</a>
                <a
                  href="#"
                  style="display:none"
                  data-toggle="modal"
                  data-target="#modalText"
                  class="plus plus2"
                >Modal text</a>
                <a
                  href="#"
                  style="display:none"
                  data-toggle="modal"
                  data-target="#modalUploadImage"
                  class="plus plus3"
                >Modal adding image</a>
                <a
                  href="#"
                  style="display:none"
                  data-toggle="modal"
                  data-target="#modalChangingImage"
                  class="plus plus4"
                >Modal changing image</a>
                <a
                  href="#"
                  style="display:none"
                  data-toggle="modal"
                  data-target="#modalCustomizeButton"
                  class="plus plus5"
                >Modal customize button</a>
                <a
                  href="#"
                  style="display:none"
                  data-toggle="modal"
                  data-target="#myModaltemplate"
                  class="plus plus6"
                >Modal row</a>
                <br />
              </div>
            </div>
          </div>
          <div class="row">
            <div
              class="col-sm-4 drop_tools"
              style="position:static; top: 10px; width: 24.6%; left: 4.7vw; z-index: 999; padding-left: 0px;"
            >
              <div class="email-title">Add elements to your e-mail:</div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="email-add-element ui-draggable ui-draggable-handle" data-type="text">
                    <img
                      src="https://www.hyperhub.com.au/newhub/assets/images/email_text.png"
                      alt="icon"
                    />
                    Text
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="email-add-element ui-draggable ui-draggable-handle" data-type="image">
                    <img
                      src="https://www.hyperhub.com.au/newhub/assets/images/email_image.png"
                      alt="icon"
                    />
                    Image
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div
                    class="email-add-element ui-draggable ui-draggable-handle"
                    data-type="button"
                  >
                    <img
                      src="https://www.hyperhub.com.au/newhub/assets/images/email_button.png"
                      alt="icon"
                    />
                    Button
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="email-add-element ui-draggable ui-draggable-handle" data-type="row">
                    <img
                      src="https://www.hyperhub.com.au/newhub/assets/images/email_row.png"
                      alt="icon"
                    />
                    Row
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div
                    class="email-add-element ui-draggable ui-draggable-handle"
                    data-type="dynamic"
                  >
                    <img src alt="icon" />
                    Dear Name,
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-8 drop_tools_right" style="float: right;">
              <div class="email-editor">
                <div class="table"></div>
                <div class="table_footer">
                  <div class="email-row" style="text-align:center">
                    <div class="email-left"></div>
                    <div
                      class="email-right"
                      style="text-align:center;color:#999;font-size:8px;background:#fff;padding:0;margin:0 auto"
                    >
                      <table
                        style="width:560px"
                        class="t_w100p m_w100p"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        align="center"
                      >
                        <tbody>
                          <tr class="row">
                            <td align="center">
                              <div class="drop_box">
                                <div class="drop_content ui-droppable ui-state-highlight">
                                  <div class="drop_line">
                                    <div class="drop_left" tag="img" style="text-align: center;">
                                      <img
                                        src="https://www.hyperhub.com.au/newhub/assets/images/sm_icon_text.png"
                                        alt="icon"
                                      />
                                    </div>
                                    <div class="drop_right" style="text-align: center;">
                                      <img
                                        src="https://www.hyperhub.com.au/newhub/assets/images/sm_icon_trash.png"
                                        alt="icon"
                                      />
                                    </div>
                                  </div>
                                  <div class="display_in" data-type="logo">
                                    <div class="drag_and_drop footer_logos">Footer LOGO</div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table
                        style="margin:auto;width:560px"
                        class="t_w100p m_w100p"
                        width="560"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        align="center"
                      >
                        <tbody>
                          <tr>
                            <td>
                              <table
                                style="margin:auto;width:560px"
                                class="t_w100p m_w100p"
                                role="presentation"
                                width="560"
                                cellspacing="0"
                                cellpadding="0"
                                border="0"
                                align="center"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style="text-align:center;padding-bottom: 10px;padding-top: 10px"
                                    ></td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td style class>
                              <table
                                style="margin:auto;clear:both;width:100%"
                                class="t_w100p m_w100p"
                                role="presentation"
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                border="0"
                                align="center"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style="color: #999;height:43px;font-size:10px;line-height:18px;padding: 0 26px;"
                                      class="email_foot"
                                      height="43"
                                      align="center"
                                    >
                                      <i>Copyright ©2020 Ayers Rock Resort, All rights reserved.</i>
                                      <br />
                                      <br />
                                      <b>Our address is:</b>
                                      <br />Ayers Rock Resort
                                      <br />Voyages Indigenous Tourism Australia, 179 Elizabeth Street
                                      <br />SYDNEY
                                      <br />NSW, 2000
                                      <br />
                                      <br />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style="height:43px;font-size:10px;line-height:18px;padding-top:15px;border-top: 1px #999 solid;"
                                      class
                                      height="43"
                                      align="center"
                                    >
                                      This email was originally sent to
                                      <a
                                        href="mailto:#email@.com#"
                                        style="color:#999"
                                      >#email@.com#</a>.
                                      <div
                                        style="border:1px #999 solid;padding:5px;border-radius: 5px;"
                                        class="text1"
                                        contenteditable="true"
                                      >If you would prefer not to receive emails from</div>please
                                      <a
                                        href="#email_click_unsubscribe#"
                                        target="blank"
                                        style="color:#999"
                                      >click here</a>.
                                      <textarea
                                        name
                                        id
                                        cols="30"
                                        rows="4"
                                        style="text-align:center;height:auto;border-radius: 5px;"
                                        class="text2"
                                      >From time to time, we will send you information on industry, events, press releases, news updates,
                                                                                  events, survey results and other offers and promotions.
                                                                            </textarea>

                                      <br />
                                      <br />To view the online version, click here
                                      <a
                                        href="https://www.ayersrockresort.com.au/terms-and-conditions/privacy-policy"
                                        target="_blank"
                                        style="
                                                                              color: #999;
                                                                              text-decoration: underline;
                                                                          "
                                      >Privacy Statement</a>
                                      <br />
                                      <a href="https://www.hyperhub.com.au">
                                        <img
                                          src="https://www.hyperhub.com.au/newhub/images/Hyper_Hub_Email_Footer_Logo.png"
                                          style="width: 108px;"
                                        />
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="clearfix"></div>
              </div>
            </div>
          </div>
          <span class="btn btn-arrow btn-email-sm btn-gray Preview_master">Preview</span>
          <span class="btn btn-arrow btn-email-sm email_add_save">Save</span>
          <div
            class="modal fade"
            id="modalPreview"
            tabindex="-1"
            role="dialog"
            aria-labelledby="myModalLabel"
          >
            <div class="modal-dialog modal-email" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <button
                    type="button"
                    class="close close-dot"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="email-previev-modal">E-mail preview</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal Text -->
          <div
            class="modal fade"
            id="modalText"
            tabindex="-1"
            role="dialog"
            aria-labelledby="myModalLabel"
          >
            <div class="modal-dialog modal-email" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <button
                    type="button"
                    class="close close-dot close_text"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                  <h4 class="modal-title">Write your text below</h4>
                </div>
                <div class="modal-body">
                  <div class="wyswig-editor">
                    <div
                      class="jodit_container jodit_summer_theme jodit_wysiwyg_mode"
                      style="min-height: 200px; min-width: 200px; max-width: 100%; height: auto; width: auto;"
                      contenteditable="false"
                    >
                      <div class="jodit_toolbar_container">
                        <ul
                          class="jodit_toolbar jodit_summer_theme jodit_toolbar_size-middle"
                          style="width: auto;"
                        >
                          <li
                            class="jodit_toolbar_btn jodit_with_dropdownlist jodit_toolbar_btn-fontsize"
                          >
                            <a
                              role="button"
                              href="javascript:void(0)"
                              tabindex="-1"
                              aria-label="Font size"
                            >
                              <span>
                                <svg
                                  viewBox="0 0 1792 1792"
                                  class="jodit_icon jodit_icon_fontsize"
                                >
                                  <path
                                    d="M1744 1408q33 0 42 18.5t-11 44.5l-126 162q-20 26-49 26t-49-26l-126-162q-20-26-11-44.5t42-18.5h80v-1024h-80q-33 0-42-18.5t11-44.5l126-162q20-26 49-26t49 26l126 162q20 26 11 44.5t-42 18.5h-80v1024h80zm-1663-1279l54 27q12 5 211 5 44 0 132-2t132-2q36 0 107.5.5t107.5.5h293q6 0 21 .5t20.5 0 16-3 17.5-9 15-17.5l42-1q4 0 14 .5t14 .5q2 112 2 336 0 80-5 109-39 14-68 18-25-44-54-128-3-9-11-48t-14.5-73.5-7.5-35.5q-6-8-12-12.5t-15.5-6-13-2.5-18-.5-16.5.5q-17 0-66.5-.5t-74.5-.5-64 2-71 6q-9 81-8 136 0 94 2 388t2 455q0 16-2.5 71.5t0 91.5 12.5 69q40 21 124 42.5t120 37.5q5 40 5 50 0 14-3 29l-34 1q-76 2-218-8t-207-10q-50 0-151 9t-152 9q-3-51-3-52v-9q17-27 61.5-43t98.5-29 78-27q19-42 19-383 0-101-3-303t-3-303v-117q0-2 .5-15.5t.5-25-1-25.5-3-24-5-14q-11-12-162-12-33 0-93 12t-80 26q-19 13-34 72.5t-31.5 111-42.5 53.5q-42-26-56-44v-383z"
                                  />
                                </svg>
                              </span>
                              <div class="jodit_with_dropdownlist-trigger">
                                <svg viewBox="0 0 10 10">
                                  <path
                                    d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"
                                  />
                                </svg>
                              </div>
                            </a>
                          </li>
                          <li class="jodit_toolbar_btn jodit_toolbar_btn-bold">
                            <a
                              role="button"
                              href="javascript:void(0)"
                              tabindex="-1"
                              aria-label="Bold"
                            >
                              <span>
                                <svg viewBox="0 0 1792 1792" class="jodit_icon jodit_icon_bold">
                                  <path
                                    d="M747 1521q74 32 140 32 376 0 376-335 0-114-41-180-27-44-61.5-74t-67.5-46.5-80.5-25-84-10.5-94.5-2q-73 0-101 10 0 53-.5 159t-.5 158q0 8-1 67.5t-.5 96.5 4.5 83.5 12 66.5zm-14-746q42 7 109 7 82 0 143-13t110-44.5 74.5-89.5 25.5-142q0-70-29-122.5t-79-82-108-43.5-124-14q-50 0-130 13 0 50 4 151t4 152q0 27-.5 80t-.5 79q0 46 1 69zm-541 889l2-94q15-4 85-16t106-27q7-12 12.5-27t8.5-33.5 5.5-32.5 3-37.5.5-34v-65.5q0-982-22-1025-4-8-22-14.5t-44.5-11-49.5-7-48.5-4.5-30.5-3l-4-83q98-2 340-11.5t373-9.5q23 0 68.5.5t67.5.5q70 0 136.5 13t128.5 42 108 71 74 104.5 28 137.5q0 52-16.5 95.5t-39 72-64.5 57.5-73 45-84 40q154 35 256.5 134t102.5 248q0 100-35 179.5t-93.5 130.5-138 85.5-163.5 48.5-176 14q-44 0-132-3t-132-3q-106 0-307 11t-231 12z"
                                  />
                                </svg>
                              </span>
                            </a>
                          </li>
                          <li class="jodit_toolbar_btn jodit_toolbar_btn-strikethrough">
                            <a
                              role="button"
                              href="javascript:void(0)"
                              tabindex="-1"
                              aria-label="Strike through"
                            >
                              <span>
                                <svg
                                  viewBox="0 0 1792 1792"
                                  class="jodit_icon jodit_icon_strikethrough"
                                >
                                  <path
                                    d="M1760 896q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1728q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h1728zm-1277-64q-28-35-51-80-48-97-48-188 0-181 134-309 133-127 393-127 50 0 167 19 66 12 177 48 10 38 21 118 14 123 14 183 0 18-5 45l-12 3-84-6-14-2q-50-149-103-205-88-91-210-91-114 0-182 59-67 58-67 146 0 73 66 140t279 129q69 20 173 66 58 28 95 52h-743zm507 256h411q7 39 7 92 0 111-41 212-23 55-71 104-37 35-109 81-80 48-153 66-80 21-203 21-114 0-195-23l-140-40q-57-16-72-28-8-8-8-22v-13q0-108-2-156-1-30 0-68l2-37v-44l102-2q15 34 30 71t22.5 56 12.5 27q35 57 80 94 43 36 105 57 59 22 132 22 64 0 139-27 77-26 122-86 47-61 47-129 0-84-81-157-34-29-137-71z"
                                  />
                                </svg>
                              </span>
                            </a>
                          </li>
                          <li class="jodit_toolbar_btn jodit_toolbar_btn-underline">
                            <a
                              role="button"
                              href="javascript:void(0)"
                              tabindex="-1"
                              aria-label="Underline"
                            >
                              <span>
                                <svg
                                  viewBox="0 0 1792 1792"
                                  class="jodit_icon jodit_icon_underline"
                                >
                                  <path
                                    d="M176 223q-37-2-45-4l-3-88q13-1 40-1 60 0 112 4 132 7 166 7 86 0 168-3 116-4 146-5 56 0 86-2l-1 14 2 64v9q-60 9-124 9-60 0-79 25-13 14-13 132 0 13 .5 32.5t.5 25.5l1 229 14 280q6 124 51 202 35 59 96 92 88 47 177 47 104 0 191-28 56-18 99-51 48-36 65-64 36-56 53-114 21-73 21-229 0-79-3.5-128t-11-122.5-13.5-159.5l-4-59q-5-67-24-88-34-35-77-34l-100 2-14-3 2-86h84l205 10q76 3 196-10l18 2q6 38 6 51 0 7-4 31-45 12-84 13-73 11-79 17-15 15-15 41 0 7 1.5 27t1.5 31q8 19 22 396 6 195-15 304-15 76-41 122-38 65-112 123-75 57-182 89-109 33-255 33-167 0-284-46-119-47-179-122-61-76-83-195-16-80-16-237v-333q0-188-17-213-25-36-147-39zm1488 1409v-64q0-14-9-23t-23-9h-1472q-14 0-23 9t-9 23v64q0 14 9 23t23 9h1472q14 0 23-9t9-23z"
                                  />
                                </svg>
                              </span>
                            </a>
                          </li>
                          <li class="jodit_toolbar_btn jodit_toolbar_btn-italic">
                            <a
                              role="button"
                              href="javascript:void(0)"
                              tabindex="-1"
                              aria-label="Italic"
                            >
                              <span>
                                <svg viewBox="0 0 1792 1792" class="jodit_icon jodit_icon_italic">
                                  <path
                                    d="M384 1662l17-85q6-2 81.5-21.5t111.5-37.5q28-35 41-101 1-7 62-289t114-543.5 52-296.5v-25q-24-13-54.5-18.5t-69.5-8-58-5.5l19-103q33 2 120 6.5t149.5 7 120.5 2.5q48 0 98.5-2.5t121-7 98.5-6.5q-5 39-19 89-30 10-101.5 28.5t-108.5 33.5q-8 19-14 42.5t-9 40-7.5 45.5-6.5 42q-27 148-87.5 419.5t-77.5 355.5q-2 9-13 58t-20 90-16 83.5-6 57.5l1 18q17 4 185 31-3 44-16 99-11 0-32.5 1.5t-32.5 1.5q-29 0-87-10t-86-10q-138-2-206-2-51 0-143 9t-121 11z"
                                  />
                                </svg>
                              </span>
                            </a>
                          </li>
                          <li class="jodit_toolbar_btn jodit_toolbar_btn-brush">
                            <a
                              role="button"
                              href="javascript:void(0)"
                              tabindex="-1"
                              aria-label="Fill color or set the text color"
                            >
                              <span>
                                <svg viewBox="0 0 1792 1792" class="jodit_icon jodit_icon_brush">
                                  <path
                                    d="M896 1152q0-36-20-69-1-1-15.5-22.5t-25.5-38-25-44-21-50.5q-4-16-21-16t-21 16q-7 23-21 50.5t-25 44-25.5 38-15.5 22.5q-20 33-20 69 0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm512-128q0 212-150 362t-362 150-362-150-150-362q0-145 81-275 6-9 62.5-90.5t101-151 99.5-178 83-201.5q9-30 34-47t51-17 51.5 17 33.5 47q28 93 83 201.5t99.5 178 101 151 62.5 90.5q81 127 81 275z"
                                  />
                                </svg>
                              </span>
                            </a>
                          </li>
                          <li
                            class="jodit_toolbar_btn jodit_with_dropdownlist jodit_toolbar_btn-left"
                          >
                            <a
                              role="button"
                              href="javascript:void(0)"
                              tabindex="-1"
                              aria-label="Align"
                            >
                              <span>
                                <svg viewBox="0 0 1792 1792" class="jodit_icon jodit_icon_left">
                                  <path
                                    d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z"
                                  />
                                </svg>
                              </span>
                              <div class="jodit_with_dropdownlist-trigger">
                                <svg viewBox="0 0 10 10">
                                  <path
                                    d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"
                                  />
                                </svg>
                              </div>
                            </a>
                          </li>
                          <li class="jodit_toolbar_btn jodit_toolbar_btn-hr">
                            <a
                              role="button"
                              href="javascript:void(0)"
                              tabindex="-1"
                              aria-label="Insert Horizontal Line"
                            >
                              <span>
                                <svg viewBox="0 0 1792 1792" class="jodit_icon jodit_icon_hr">
                                  <path
                                    d="M1600 736v192q0 40-28 68t-68 28h-1216q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h1216q40 0 68 28t28 68z"
                                  />
                                </svg>
                              </span>
                            </a>
                          </li>
                          <li class="jodit_toolbar_btn jodit_toolbar_btn-ul">
                            <a
                              role="button"
                              href="javascript:void(0)"
                              tabindex="-1"
                              aria-label="Insert Unordered List"
                            >
                              <span>
                                <svg viewBox="0 0 1792 1792" class="jodit_icon jodit_icon_ul">
                                  <path
                                    d="M384 1408q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm0-512q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm-1408-928q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z"
                                  />
                                </svg>
                              </span>
                            </a>
                          </li>
                          <li class="jodit_toolbar_btn jodit_toolbar_btn-ol">
                            <a
                              role="button"
                              href="javascript:void(0)"
                              tabindex="-1"
                              aria-label="Insert Ordered List"
                            >
                              <span>
                                <svg
                                  role="img"
                                  viewBox="0 0 1792 1792"
                                  class="jodit_icon jodit_icon_ol"
                                >
                                  <path
                                    d="M381 1620q0 80-54.5 126t-135.5 46q-106 0-172-66l57-88q49 45 106 45 29 0 50.5-14.5t21.5-42.5q0-64-105-56l-26-56q8-10 32.5-43.5t42.5-54 37-38.5v-1q-16 0-48.5 1t-48.5 1v53h-106v-152h333v88l-95 115q51 12 81 49t30 88zm2-627v159h-362q-6-36-6-54 0-51 23.5-93t56.5-68 66-47.5 56.5-43.5 23.5-45q0-25-14.5-38.5t-39.5-13.5q-46 0-81 58l-85-59q24-51 71.5-79.5t105.5-28.5q73 0 123 41.5t50 112.5q0 50-34 91.5t-75 64.5-75.5 50.5-35.5 52.5h127v-60h105zm1409 319v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-14 9-23t23-9h1216q13 0 22.5 9.5t9.5 22.5zm-1408-899v99h-335v-99h107q0-41 .5-122t.5-121v-12h-2q-8 17-50 54l-71-76 136-127h106v404h108zm1408 387v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-14 9-23t23-9h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z"
                                  />
                                </svg>
                              </span>
                            </a>
                          </li>
                          <li
                            class="jodit_toolbar_btn jodit_toolbar_btn-outdent jodit_disabled"
                            disabled="disabled"
                          >
                            <a
                              role="button"
                              href="javascript:void(0)"
                              tabindex="-1"
                              aria-label="Decrease Indent"
                            >
                              <span>
                                <svg viewBox="0 0 1792 1792" class="jodit_icon jodit_icon_outdent">
                                  <path
                                    d="M384 544v576q0 13-9.5 22.5t-22.5 9.5q-14 0-23-9l-288-288q-9-9-9-23t9-23l288-288q9-9 23-9 13 0 22.5 9.5t9.5 22.5zm1408 768v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z"
                                  />
                                </svg>
                              </span>
                            </a>
                          </li>
                          <li class="jodit_toolbar_btn jodit_toolbar_btn-indent">
                            <a
                              role="button"
                              href="javascript:void(0)"
                              tabindex="-1"
                              aria-label="Increase Indent"
                            >
                              <span>
                                <svg viewBox="0 0 1792 1792" class="jodit_icon jodit_icon_indent">
                                  <path
                                    d="M352 832q0 14-9 23l-288 288q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-576q0-13 9.5-22.5t22.5-9.5q14 0 23 9l288 288q9 9 9 23zm1440 480v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z"
                                  />
                                </svg>
                              </span>
                            </a>
                          </li>
                          <li class="jodit_toolbar_btn jodit_toolbar_btn-table">
                            <a
                              role="button"
                              href="javascript:void(0)"
                              tabindex="-1"
                              aria-label="Insert table"
                            >
                              <span>
                                <svg viewBox="0 0 1792 1792" class="jodit_icon jodit_icon_table">
                                  <path
                                    d="M576 1376v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm0-384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm-512-768v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm-512-768v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm0-384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm128-320v1088q0 66-47 113t-113 47h-1344q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1344q66 0 113 47t47 113z"
                                  />
                                </svg>
                              </span>
                            </a>
                          </li>
                          <li class="jodit_toolbar_btn jodit_toolbar_btn-link">
                            <a
                              role="button"
                              href="javascript:void(0)"
                              tabindex="-1"
                              aria-label="Insert link"
                            >
                              <span>
                                <svg viewBox="0 0 1792 1792" class="jodit_icon jodit_icon_link">
                                  <path
                                    d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z"
                                  />
                                </svg>
                              </span>
                            </a>
                          </li>
                          <li
                            class="jodit_toolbar_btn jodit_toolbar_btn-undo jodit_disabled"
                            disabled="disabled"
                          >
                            <a
                              role="button"
                              href="javascript:void(0)"
                              tabindex="-1"
                              aria-label="Undo"
                            >
                              <span>
                                <svg viewBox="0 0 1792 1792" class="jodit_icon jodit_icon_undo">
                                  <path
                                    d="M1664 896q0 156-61 298t-164 245-245 164-298 61q-172 0-327-72.5t-264-204.5q-7-10-6.5-22.5t8.5-20.5l137-138q10-9 25-9 16 2 23 12 73 95 179 147t225 52q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5-40.5-198.5-109.5-163.5-163.5-109.5-198.5-40.5q-98 0-188 35.5t-160 101.5l137 138q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l130 129q107-101 244.5-156.5t284.5-55.5q156 0 298 61t245 164 164 245 61 298z"
                                  />
                                </svg>
                              </span>
                            </a>
                          </li>
                          <li
                            class="jodit_toolbar_btn jodit_toolbar_btn-redo jodit_disabled"
                            disabled="disabled"
                          >
                            <a
                              role="button"
                              href="javascript:void(0)"
                              tabindex="-1"
                              aria-label="Redo"
                            >
                              <span>
                                <svg viewBox="0 0 1792 1792" class="jodit_icon jodit_icon_redo">
                                  <path
                                    d="M1664 256v448q0 26-19 45t-45 19h-448q-42 0-59-40-17-39 14-69l138-138q-148-137-349-137-104 0-198.5 40.5t-163.5 109.5-109.5 163.5-40.5 198.5 40.5 198.5 109.5 163.5 163.5 109.5 198.5 40.5q119 0 225-52t179-147q7-10 23-12 14 0 25 9l137 138q9 8 9.5 20.5t-7.5 22.5q-109 132-264 204.5t-327 72.5q-156 0-298-61t-245-164-164-245-61-298 61-298 164-245 245-164 298-61q147 0 284.5 55.5t244.5 156.5l130-129q29-31 70-14 39 17 39 59z"
                                  />
                                </svg>
                              </span>
                            </a>
                          </li>
                          <li class="jodit_toolbar_btn jodit_toolbar_btn-source">
                            <a
                              role="button"
                              href="javascript:void(0)"
                              tabindex="-1"
                              aria-label="Change mode"
                            >
                              <span>
                                <svg viewBox="0 0 1792 1792" class="jodit_icon jodit_icon_source">
                                  <path
                                    d="M553 1399l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23t-10 23zm591-1067l-373 1291q-4 13-15.5 19.5t-23.5 2.5l-62-17q-13-4-19.5-15.5t-2.5-24.5l373-1291q4-13 15.5-19.5t23.5-2.5l62 17q13 4 19.5 15.5t2.5 24.5zm657 651l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z"
                                  />
                                </svg>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div
                        class="jodit_workplace"
                        style="min-height: 200px; height: auto;"
                        contenteditable="false"
                      >
                        <div
                          aria-disabled="false"
                          tabindex="-1"
                          class="jodit_wysiwyg"
                          spellcheck="true"
                          style="min-height: 198px;"
                          contenteditable="true"
                        ></div>
                        <div class="jodit_search">
                          <div class="jodit_search_box">
                            <div class="jodit_search_inputs">
                              <input
                                tabindex="0"
                                class="jodit_search-query"
                                placeholder="Search for"
                                type="text"
                              />
                              <input
                                tabindex="0"
                                class="jodit_search-replace"
                                placeholder="Replace with"
                                type="text"
                              />
                            </div>
                            <div class="jodit_search_counts">
                              <span>0/0</span>
                            </div>
                            <div class="jodit_search_buttons">
                              <button tabindex="0" type="button" class="jodit_search_buttons-next">
                                <svg viewBox="0 0 1792 1792">
                                  <path
                                    d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"
                                  />
                                </svg>
                              </button>
                              <button tabindex="0" type="button" class="jodit_search_buttons-prev">
                                <svg viewBox="0 0 1792 1792">
                                  <path
                                    d="M1395 1184q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z"
                                  />
                                </svg>
                              </button>
                              <button
                                tabindex="0"
                                type="button"
                                class="jodit_search_buttons-cancel"
                              >
                                <svg viewBox="0 0 16 16">
                                  <g transform="translate(0,-1036.3622)">
                                    <path
                                      d="m 2,1050.3622 12,-12"
                                      style="fill:none;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none"
                                    />
                                    <path
                                      d="m 2,1038.3622 12,12"
                                      style="fill:none;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none"
                                    />
                                  </g>
                                </svg>
                              </button>
                              <button
                                tabindex="0"
                                type="button"
                                class="jodit_search_buttons-replace"
                              >Replace</button>
                            </div>
                          </div>
                        </div>
                        <div class="jodit_source">
                          <div
                            class="jodit_source_mirror-fake ace_editor ace-idle-fingers ace_dark"
                          >
                            <textarea
                              class="ace_text-input"
                              autocorrect="off"
                              autocapitalize="off"
                              spellcheck="false"
                              style="opacity: 0; font-size: 1px;"
                              wrap="off"
                            ></textarea>
                            <div class="ace_gutter" aria-hidden="true">
                              <div
                                class="ace_layer ace_gutter-layer ace_folding-enabled"
                                style="height: 1000000px;"
                              ></div>
                            </div>
                            <div class="ace_scroller" style="line-height: 0px;">
                              <div class="ace_content">
                                <div class="ace_layer ace_print-margin-layer">
                                  <div
                                    class="ace_print-margin"
                                    style="left: 4px; visibility: visible;"
                                  ></div>
                                </div>
                                <div class="ace_layer ace_marker-layer"></div>
                                <div
                                  class="ace_layer ace_text-layer"
                                  style="height: 1000000px; margin: 0px 4px;"
                                ></div>
                                <div class="ace_layer ace_marker-layer"></div>
                                <div class="ace_layer ace_cursor-layer ace_hidden-cursors">
                                  <div class="ace_cursor"></div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="ace_scrollbar ace_scrollbar-v"
                              style="display: none; width: 22px;"
                            >
                              <div class="ace_scrollbar-inner" style="width: 22px;">&nbsp;</div>
                            </div>
                            <div
                              class="ace_scrollbar ace_scrollbar-h"
                              style="display: none; height: 22px;"
                            >
                              <div class="ace_scrollbar-inner" style="height: 22px;">&nbsp;</div>
                            </div>
                            <div
                              style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font: inherit; overflow: hidden;"
                            >
                              <div
                                style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font: inherit; overflow: visible;"
                              ></div>
                              <div
                                style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font: inherit; overflow: visible;"
                              >XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
                            </div>
                          </div>
                        </div>
                        <span
                          style="display: block; font-size: 14px; line-height: 20px; margin-top: 0px; margin-left: 0px;"
                          class="jodit_placeholder"
                        >Enter text here...</span>
                      </div>
                      <div class="jodit_statusbar">
                        <div class="jodit_statusbar_item jodit_statusbar_item-right">
                          <span>Chars: 0</span>
                        </div>
                        <div class="jodit_statusbar_item jodit_statusbar_item-right">
                          <span>Words: 0</span>
                        </div>
                        <div class="jodit_statusbar_item">
                          <ul class="jodit_xpath">
                            <li class="jodit_toolbar_btn jodit_toolbar_btn-selectall">
                              <a
                                role="button"
                                href="javascript:void(0)"
                                tabindex="-1"
                                aria-label="Select all"
                              >
                                <span>
                                  <svg viewBox="0 0 18 18" class="jodit_icon jodit_icon_selectall">
                                    <g fill-rule="evenodd" stroke="none" stroke-width="1">
                                      <g transform="translate(-381.000000, -381.000000)">
                                        <g transform="translate(381.000000, 381.000000)">
                                          <path
                                            d="M0,2 L2,2 L2,0 C0.9,0 0,0.9 0,2 L0,2 Z M0,10 L2,10 L2,8 L0,8 L0,10 L0,10 Z M4,18 L6,18 L6,16 L4,16 L4,18 L4,18 Z M0,6 L2,6 L2,4 L0,4 L0,6 L0,6 Z M10,0 L8,0 L8,2 L10,2 L10,0 L10,0 Z M16,0 L16,2 L18,2 C18,0.9 17.1,0 16,0 L16,0 Z M2,18 L2,16 L0,16 C0,17.1 0.9,18 2,18 L2,18 Z M0,14 L2,14 L2,12 L0,12 L0,14 L0,14 Z M6,0 L4,0 L4,2 L6,2 L6,0 L6,0 Z M8,18 L10,18 L10,16 L8,16 L8,18 L8,18 Z M16,10 L18,10 L18,8 L16,8 L16,10 L16,10 Z M16,18 C17.1,18 18,17.1 18,16 L16,16 L16,18 L16,18 Z M16,6 L18,6 L18,4 L16,4 L16,6 L16,6 Z M16,14 L18,14 L18,12 L16,12 L16,14 L16,14 Z M12,18 L14,18 L14,16 L12,16 L12,18 L12,18 Z M12,2 L14,2 L14,0 L12,0 L12,2 L12,2 Z M4,14 L14,14 L14,4 L4,4 L4,14 L4,14 Z M6,6 L12,6 L12,12 L6,12 L6,6 L6,6 Z"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </svg>
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <textarea id="editor" name style="display: none;"></textarea>
                  </div>
                  <button type="submit" class="btn btn-arrow btn-confirm-modal add_text">Confirm</button>
                  <div class="clearfix"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal Upload Image -->
          <div
            class="modal fade"
            id="modalUploadImage"
            tabindex="-1"
            role="dialog"
            aria-labelledby="myModalLabel"
          >
            <div class="modal-dialog modal-email" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <button
                    type="button"
                    class="close close-dot Confirm_img_close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                  <h4 class="modal-title">Adding image</h4>
                </div>
                <div class="modal-body">
                  <div class="dropzone dz-clickable" id="form1">
                    <div class="dz-message" data-dz-message>
                      Drag &amp; Drop your image here
                      <br />
                      <span>or click and add it from a storage</span>
                    </div>
                    <!-- <input type="file" name="file" style="display: none;"> -->
                  </div>
                  <div class="text-right">
                    <span class="confirm-text">Maximum file size: 1 MB</span>
                    <button
                      type="submit"
                      class="btn btn-arrow btn-confirm-modal Confirm_img"
                      data-type
                    >Confirm</button>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal Changing Image -->
          <div
            class="modal fade"
            id="modalChangingImage"
            tabindex="-1"
            role="dialog"
            aria-labelledby="myModalLabel"
          >
            <div class="modal-dialog modal-email" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <button
                    type="button"
                    class="close close-dot Confirm_change_close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                  <h4 class="modal-title">Changing image</h4>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col-sm-4">
                      <div class="current_photo">
                        Current photo:
                        <br />
                        <img
                          class="changing"
                          src="https://www.hyperhub.com.au/newhub/assets/images/current_photo.png"
                          alt="current photo"
                        />
                      </div>
                    </div>
                    <div class="col-sm-8">
                      <div class="dropzone dz-clickable" id="form2">
                        <div class="dz-message" data-dz-message>
                          Drag &amp; Drop your image here
                          <br />
                          <span>or click and add it from a storage</span>
                        </div>
                      </div>
                      <div class="text-right">
                        <span class="confirm-text">Maximum file size: 1 MB</span>
                        <button
                          type="submit"
                          class="btn btn-arrow btn-confirm-modal Confirm_change"
                          data-type
                        >Confirm</button>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal Customize Button -->
          <div
            class="modal fade"
            id="modalCustomizeButton"
            tabindex="-1"
            role="dialog"
            aria-labelledby="myModalLabel"
          >
            <div class="modal-dialog modal-email" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <button
                    type="button"
                    class="close close-dot Confirm_close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                  <h4 class="modal-title">Customize your button</h4>
                </div>
                <div class="modal-body zero_pading">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="customize-button-content">
                        <span>Previev</span>
                        <div class="customize-button-email">
                          <button class="sample_btn">Follow me</button>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="customize-button-form">
                        <div class="form-group">
                          <label for="exampleInputModal1">Text on the button:</label>
                          <input
                            type="text"
                            class="form-control btn_text"
                            value="Follow me"
                            id="exampleInputModal1"
                          />
                        </div>
                        <div class="form-group">
                          <label for="exampleInputModal2">Web Link:</label>
                          <input type="text" class="form-control" id="exampleInputModal2" />
                        </div>
                        <div class="form-group" style="display:none">
                          <label for="exampleInputModal3">Tracking:</label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputModal3"
                            value="#email_click_track#"
                          />
                        </div>
                        <div class="row">
                          <div class="col-sm-6">
                            <div class="form-group">
                              <label for="exampleInputModal4">Button color:</label>
                              <div class="color">
                                <img
                                  src="https://www.hyperhub.com.au/newhub/assets/images/color.png"
                                  alt="color"
                                />
                                <input
                                  class="jscolor"
                                  value="ab2567"
                                  id="exampleInputModal4"
                                  autocomplete="off"
                                  style="background-image: none; background-color: rgb(171, 37, 103); color: rgb(255, 255, 255);"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="form-group">
                              <label for="exampleInputModal5">Font color:</label>
                              <div class="color">
                                <img
                                  src="https://www.hyperhub.com.au/newhub/assets/images/color.png"
                                  alt="color"
                                />
                                <input
                                  class="jscolor"
                                  value="ab2567"
                                  id="exampleInputModal5"
                                  autocomplete="off"
                                  style="background-image: none; background-color: rgb(171, 37, 103); color: rgb(255, 255, 255);"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="range-input">
                            Font size:
                            <span id="slider-value">13</span>pt
                          </label>
                          <br />
                          <div
                            id="range-input"
                            class="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                          >
                            <span
                              tabindex="0"
                              class="ui-slider-handle ui-corner-all ui-state-default"
                              style="left: 12.069%;"
                            ></span>
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="range-input2">
                            Corners:
                            <span id="slider-value2">0</span>pt
                          </label>
                          <br />
                          <div
                            id="range-input2"
                            class="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                          >
                            <span
                              tabindex="0"
                              class="ui-slider-handle ui-corner-all ui-state-default"
                              style="left: 0%;"
                            ></span>
                          </div>
                        </div>

                        <button
                          type="submit"
                          class="btn btn-arrow btn-confirm-modal Confirm_btn"
                        >Confirm</button>
                        <div class="clearfix"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      type="button"
      class="btn btn-primary view_email_btn"
      data-toggle="modal"
      data-target=".bs-example-modal-lg"
      style="display:none;"
    >Large modal</button>

    <div
      class="modal fade bs-example-modal-lg"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              style="right: 0.5625vw;top: 0.875vw;"
            >
              <span aria-hidden="true">×</span>
            </button>
            <h4 class="modal-title view_temp_name" id="exampleModalLabel">New message</h4>
          </div>
          <div class="modal-body email_view"></div>
          <div class="footer_html">
            <div class="email-row" style="text-align:center">
              <div class="email-left"></div>
              <div
                class="email-right"
                style="text-align:center;color:#999;font-size:8px;background:#fff;margin:0 auto"
              >
                <table
                  style="margin:auto;width:560px"
                  class="t_w100p m_w100p"
                  width="560"
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  align="center"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          style="margin:auto;clear:both;width:300px"
                          class="t_w100p m_w100p"
                          role="presentation"
                          width="300"
                          cellspacing="0"
                          cellpadding="0"
                          border="0"
                          align="center"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="color: #999;height:43px;font-size:10px;line-height:18px;padding: 0 26px;"
                                class="footer_logo"
                                height="43"
                                align="center"
                              >
                                <!-- <img src="https://www.hyperhub.com.au/HyperHyper/uploads/1570263046footer3.jpg" alt="" width="500" style="max-width:500px;" class="t_w100p"> -->
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <table
                          style="margin:auto;width:560px"
                          class="t_w100p m_w100p"
                          role="presentation"
                          width="560"
                          cellspacing="0"
                          cellpadding="0"
                          border="0"
                          align="center"
                        >
                          <tbody>
                            <tr>
                              <td style="text-align:center;padding-bottom: 10px;padding-top: 10px"></td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="border-top: 1px #999 solid;padding-top: 20px;">
                        <table
                          style="margin:auto;clear:both;width:300px"
                          class="t_w100p m_w100p"
                          role="presentation"
                          width="300"
                          cellspacing="0"
                          cellpadding="0"
                          border="0"
                          align="center"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="color: #999;height:43px;font-size:10px;line-height:18px;padding: 0 26px;"
                                class="email_foot"
                                height="43"
                                align="center"
                              >
                                This email was originally sent to
                                <a
                                  href="mailto:#email@.com#"
                                  style="color:#999"
                                >#email@.com#</a>.
                                <span class="footer_text1"></span>
                                please
                                <a
                                  href="javascript:void(0);"
                                  target="_blank"
                                  style="text-decoration: underline;color: #999;"
                                >click here</a>
                                .
                                <span
                                  class="footer_text2"
                                  style="white-space: pre;"
                                ></span>
                                To view the online version,
                                <a
                                  href="javascript:void(0);"
                                  target="_blank"
                                  style="text-decoration: You have received this email underline;color: #999;"
                                >click here</a>
                                <br />
                                <a
                                  href="https://www.ayersrockresort.com.au/terms-and-conditions/privacy-policy"
                                  target="_blank"
                                  style="color: #999;text-decoration: underline;"
                                >Privacy Statement</a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      emailList: [
        {
          name: "Email - Default",
          id: 98,
          icon:
            "https://www.hyperhub.com.au/newhub/images/Email_Template_Image.png"
        },
        {
          name: "Event - Reminder",
          id: 100,
          icon:
            "https://www.hyperhub.com.au/newhub/images/Email_Template_Image.png"
        },
        {
          name: "Event - Reminder",
          id: 100,
          icon:
            "https://www.hyperhub.com.au/newhub/images/Email_Template_Image.png"
        },
        {
          name: "Event - Reminder",
          id: 100,
          icon:
            "https://www.hyperhub.com.au/newhub/images/Email_Template_Image.png"
        },
        {
          name: "Event - Reminder",
          id: 100,
          icon:
            "https://www.hyperhub.com.au/newhub/images/Email_Template_Image.png"
        },
        {
          name: "Event - Reminder",
          id: 100,
          icon:
            "https://www.hyperhub.com.au/newhub/images/Email_Template_Image.png"
        },

        {
          name: "Event - Reminder",
          id: 100,
          icon:
            "https://www.hyperhub.com.au/newhub/images/Email_Template_Image.png"
        },
        {
          name: "Event - Reminder",
          id: 100,
          icon:
            "https://www.hyperhub.com.au/newhub/images/Email_Template_Image.png"
        },
        {
          name: "Event - Reminder",
          id: 100,
          icon:
            "https://www.hyperhub.com.au/newhub/images/Email_Template_Image.png"
        },
        {
          name: "Event - Reminder",
          id: 100,
          icon:
            "https://www.hyperhub.com.au/newhub/images/Email_Template_Image.png"
        },
        {
          name: "Event - Reminder",
          id: 100,
          icon:
            "https://www.hyperhub.com.au/newhub/images/Email_Template_Image.png"
        }
      ]
    };
  },
  methods: {
    hdclick(status) {
      this.flag = status;
    }
  }
};
</script>

<style>
.email_temp_center.active {
  display: block;
}
.view_temp.active {
  display: none !important;
}
.email_top.active {
  display: none !important;
}
#exampleInput1 {
  width: 100% !important;
}
</style>