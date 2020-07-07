<template>
   <div class="content-wrapper">
      <div class="page-head">
        <div class="row">
            <div class="col-sm-6">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <router-link :to="{ path:'/'}" >Dashboard</router-link>
                    
                    
                    </li>
                    <li class="breadcrumb-item active">Access Privilege</li>
                </ol>
            </div>
            <div class="col-sm-6 text-right">
                <h1>Access Privilege</h1>
            </div>
        </div>
    </div>
  <div class="page-content">
    <div class="table">
      <form action class="form">
        <h3 style="margin-bottom:20px;font-weight:700;">User Profile</h3>
               <table width="100%" border="1" cellspacing="0" cellpadding="0" class="table_one">
           <tbody>
            <tr class="table_head">
              <th width="9%">First Name</th>
              <th width="9%">Last Name</th>
              <th width="9%">Username</th>
              <th width="9%">Password</th>
              <th width="9%">Email</th>
              <th width="9%">Department</th>
              <th width="9%">
                Access Level
                <img
                  class
                  data-toggle="modal"
                  data-target="#myModal"
                  src=""
                  alt
                  style="margin-left: 10px;cursor:pointer;width:1.2vw;vertical-align: text-bottom"
                />
              </th>
              <th width="9%">Last Login Date</th>
              <th width="9%">Login Times</th>
              <th width="9%">Edit</th>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>></td>
              <td class="pwGroup">
                <div class="pw">
                  <div class="item"></div>
                </div>
              </td>
              <td></td>

              <td>
                <button
                  type="button"
                  class="edit_Profile"
                  data-toggle="modal"
                  data-target="#EditModel"
                >
                  <span class="glyphicon glyphicon-pencil edit_right" @click ="hdclick(true)"></span>
                </button>

                <button type="button" class="dalete_btn">
                  <span class="glyphicon glyphicon-remove dalete_right"></span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <h3 style="color:#b6452c;margin-top:40px;margin-bottom:20px;font-weight:700;">+ Add Account</h3>
        <table width="100%" class="add_teble" border="1" cellspacing="0" cellpadding="0">
          <tr>
            <td width="9%">
              <input type="text" name="first_name" placeholder="First Name" class="first_name" />
            </td>
            <td width="9%">
              <input type="text" name="last_name" placeholder="Last Name" class="last_name" />
            </td>
            <td width="9%">
              <input type="text" name="username" placeholder="Username" class="username" />
            </td>
            <td width="9%">
              <input type="text" name="password" placeholder="Password" class="password" />
            </td>
            <td width="9%">
              <input type="text" name="email" placeholder="Email" class="email" />
            </td>
            <td width="9%">
              <select class="Department">
                <option value="1" class="option1">Select</option>
                <option value="COO">COO</option>
                <option value="CEO">CEO</option>
                <option value="OFFICER">OFFICER</option>
                <option value="MEMBERSHIP">MEMBERSHIP</option>
                <option value="FINANCE">FINANCE</option>
                <option value="EDUCATION">EDUCATION</option>
              </select>
            </td>
            <td width="9%">
              <select class="level">
                <option class="option1">Level1</option>
                <option class="option1">Level2</option>
                <option class="option1">Level3</option>
                <option class="option1">Level4</option>
                <option class="option1">Level5</option>
                <option class="option1">Level6</option>
              </select>
            </td>
            <td width="9%">
              <input type="text" name="access" readonly />
            </td>
            <td width="9%">
              <input type="text" name="access" readonly />
            </td>
            <td width="9%">
              <input type="text" name="Created" readonly class="Created" value />
            </td>
          </tr>
        </table>
        <div style="text-align:right;margin:30px 0px;">
          <input
            type="button"
            name="search"
            id="submit"
            value="SAVE"
            style="cursor:pointer;background:#b6452c;border:0;height:30px;width:116px;color:#FFF;-webkit-appearance:none;border-radius:8px;"
          />
        </div>
      </form>
      <div
       class="hubmodal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        v-show="opt"
        v-on:click.capture="hdclick(false)"
      >
        <div class="modal-dialog modal-email" role="document"  v-on:click.stop="hdclick">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close close-dot" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="email-previev-modal" style="padding:0;">UPDATE</div>
            </div>
            <div class="modal-body">
              <div class="row">
               <div class="col-md-12 hub_row">
                <div class="col-md-6 access" align="center">
                  <div style="display:inline-block;width:70%;">
                    <h4 style="margin:0px;text-align:left">Access Level</h4>
                    <select
                      style="border:1px #000 solid;width: 100%;height: 33px;text-align:left;margin:10px 0;border-radius: 6px;padding: 0 10px;"
                      class="level"
                      name="access"
                    >
                      <option value="1">Level1</option>
                      <option value="2">Level2</option>
                      <option value="3">Level3</option>
                      <option value="4">Level4</option>
                      <option value="5">Level5</option>
                      <option value="6">Level6</option>
                    </select>
                  </div>
                </div>
                </div>
                <div style="clear: both;"></div>
                <div class="col-md-6" align="center">
                  <div style="display:inline-block;width:70%;">
                    <h4 style="margin:0px;text-align:left">First Name</h4>
                    <input
                      type="text"
                      style="border:1px #000 solid;width: 100%;height: 33px;text-align:left;margin:10px 0;border-radius: 6px;padding: 0 10px;"
                      class="first_name"
                      name="first_name"
                    />
                  </div>
                  <div style="display:inline-block;width:70%;">
                    <h4 style="margin:0px;text-align:left">Username</h4>
                    <input
                      type="text"
                      style="border:1px #000 solid;width: 100%;height: 33px;text-align:left;margin:10px 0;border-radius: 6px;padding: 0 10px;"
                      class="username"
                      name="username"
                    />
                  </div>
                  <div style="display:inline-block;width:70%;">
                    <h4 style="margin:0px;text-align:left">Email</h4>
                    <input
                      type="text"
                      style="border:1px #000 solid;width: 100%;height: 33px;text-align:left;margin:10px 0;border-radius: 6px;padding: 0 10px;"
                      class="email"
                      name="email"
                    />
                  </div>
                </div>
                <div class="col-md-6" align="center">
                  <div style="display:inline-block;width:70%;">
                    <h4 style="margin:0px;text-align:left">Last Name</h4>
                    <input
                      type="text"
                      style="border:1px #000 solid;width: 100%;height: 33px;text-align:left;margin:10px 0;border-radius: 6px;padding: 0 10px;"
                      class="last_name"
                      name="last_name"
                    />
                  </div>
                  <div style="display:inline-block;width:70%;">
                    <h4 style="margin:0px;text-align:left">Password</h4>
                    <input
                      type="text"
                      style="border:1px #000 solid;width: 100%;height: 33px;text-align:left;margin:10px 0;border-radius: 6px;padding: 0 10px;"
                      class="password"
                      name="password"
                    />
                  </div>
                  <div style="display:inline-block;width:70%;">
                    <h4 style="margin:0px;text-align:left">Department</h4>
                    <select
                      style="border:1px #000 solid;width: 100%;height: 33px;text-align:left;margin:10px 0;border-radius: 6px;padding: 0 10px;"
                      class="department"
                      name="department"
                    >
                      <option value="COO">COO</option>
                      <option value="CEO">CEO</option>
                      <option value="OFFICER">OFFICER</option>
                      <option value="MEMBERSHIP">MEMBERSHIP</option>
                      <option value="FINANCE">FINANCE</option>
                      <option value="EDUCATION">EDUCATION</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-header">
              <button
                type="button"
                class="store"
                style="margin-right: 10%;margin-bottom: 20px;cursor: pointer;background: #b6452c;border: 0;height: 30px;width: 116px;color: #FFF;border-radius: 8px;float:right"
              >SAVE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      opt:false,
    }
    },
  methods:{
     hdclick(opt){
                console.log(opt)
         this.opt = opt;
         console.log(opt)
     }

    }
};
</script>

 <style>
  @import'../assets/css/privilege/privilege.css'
   
  </style>