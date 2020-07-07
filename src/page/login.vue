<template>
   	<div class="box" style=" ">
		<div class="center">
			<div id="hint" style="width: 70%;height: 150px;text-align: center; background-color: #b84525; position: absolute;top: 20%;left: 50%;transform: translate(-50% ,-50%); z-index: -1; opacity: 0;transition:opacity 2s;">
	            <h3 style="font-weight: normal; color: #fff;margin-top: 60px;" class="change_pop">You Have Unsubscribed</h3>
	        </div>
			<div class="logo">
				
				<table width="100%">
					<tr>
						<td width="28%"><img src="https://www.hyperhub.com.au/images/ball_orange.png" width="100%" alt=""></td>
						<td valign="top" align="left" style="padding:40px 25px 0 25px;">
							<img src="https://www.hyperhub.com.au/images/logo_Hyper_Hub.png" alt="" style="max-width: 425px;padding-top: 10px;" class="wp_100">
						</td>
					</tr>
				</table>
			</div>
			<div class="text">
				<table width="100%">
					<tr>
						<td align="left"><b style="font-size: 26px;color: #666666;letter-spacing: 1px;" class="hid">UNLOCK YOUR DATABASE</b></td>
					</tr>
					<tr>
						<td><input type="text"  v-model="username"  id="username" placeholder="username"></td>
					</tr>
					<tr>
						<td><input   v-model="password" type="password" id="password" placeholder="password"></td>
					</tr>
					<tr>
						<td>
							<div style="width: 74%;display: inline-block;">
                                <input  v-model="checkCode" type="text" name="authenticate" class="authenticate" placeholder="authenticate">
                            </div>
                            <div style="width: 24%;display: inline-block;text-align: center;">
                                <div class="code" id="checkCode" >{{code}}</div>
                            </div>
						</td>
					</tr>
					<tr class="error" style="display:none;">
						<td>
							<div id="error" style="color:#B92020; height:15px;width:100%;text-align:center"></div>
						</td>
					</tr>
					<tr align="center">
						<td>
							<a  @click ="modal(true)" id="modal" style="color: #666666" >Forgot password?  Click here</a>
						</td>
						
					</tr>
					<tr>
						<td align="center">
							<button style="font-size: 20px;font-weight: 700;" @click="submit" class="btn_btn">ENTER</button>
						</td>
					</tr>
				</table>
			</div>
			<!-- Modal -->
			<div class="modal fade" id="myModal" v-show="flag" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="top: 40%;">
			  <div class="modal-dialog" role="document">
			    <div class="modal-content">
			      <div class="modal-header modal-P">
			        <button type="button" @click="modal(false)" class="close" data-dismiss="modal" aria-label="Close"><span >&times;</span></button>
			        <h4 class="modal-title" id="myModalLabel">Retrieve your password</h4>
			      </div>
			      <div class="modal-body modal-P">
			      	<div>
			      		<h5 style="font-size: 24px;">Username: </h5>
			      	</div>
			      	<div>
			      		<input type="text" id="username_forget" placeholder="Please fill in your username">
			      	</div>
			        
			      </div>
			      <div class="modal-footer modal-P">
			        <button type="button" @click ="modal(false)" class="btn btn-default">Close</button>
			        <button type="button" class="btn btn-primary send_email">Send Password to My Registered Email</button>
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
			 username:'',
			 password:'',
			 flag:false,
			 code:"",
			 checkCode:"",

		 }
	}, 
	mounted (){
           this.mcode();
	},
	methods:{
		submit(){
			// if(this.password =""||this.username==""||this.code==""){
			// 	alert("请输入完整信息！")
			// }
			if(this.checkCode==this.code){
				console.log(1111)
			}
		},
		 modal(opt){
			 console.log(1111);
			 this.flag= opt;
            console.log(this.flag);
		 },
		mcode(){
			
             let codeChars = new Array(  2, 3, 4, 5, 6, 7, 8, 9, 
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
            for (var i = 0; i < 4; i++){
                var charNum = Math.floor(Math.random() * 31);
                  this.code += codeChars[charNum];
			} 
                 return this.code;
		}
		
    
	},

}
</script>

<style>
    @import '../assets/css/login/login.css';
</style>