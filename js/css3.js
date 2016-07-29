// JavaScript Document
	
var maxB=false;
var maxJb=true;

function a(e){
		alert(e);
		}
function getX(){  //获取浏览器宽度
		return x=$(document).innerWidth();
		
	}
function getY(){  //获取浏览器高度
		
		return y=$(document).innerHeight();
	}
function login(){  //显示登陆界面动画
				$("#div-main").css({
					boxShadow:'2px 5px 5px 2px #CCC'
					});
				$("#tou-div").css({
						top:0.04*y
						});
				$("#tou-div,#tou-div img").fadeIn().css({   //头像区域的大小
					
					width:0.2*y,
					height:0.2*y,
					borderRadius:0.2*y
					});
				$("#login").fadeIn().css({
					width:0.7*x,
					marginTop:0.04*y
					});
				$("#text-main,#but-login,#pwd-main").css({
					marginTop:0.04*y,
					width:0.7*x,
					height:0.08*y,
					borderRadius:0.08*y,
					fontSize:0.03*y
					});
				$("#copyright").fadeIn().css({
					bottom:0.02*y,
					right:0.02*x,
					fontSize:0.01*y
					})
				
			}
$(document).ready(function(e) {
	var x=getX();
	var y=getY();

	$("#div-main").animate({
			width:x/10,
			height:x/10,
			backgroundColor:'#000',
			marginTop:y/2-x/20,
			borderRadius:x/10,
			},2000,function(){
				$("#p-main").fadeIn(2000)
				$("#p-main").css({
						fontSize:x/20
					});
				});
	
	$("#div-main").animate({backgroundColor:'#F00'},1000);
	$("#div-main").animate({backgroundColor:'#0F0'},1000);
	$("#div-main").animate({backgroundColor:'#00F'},1000);
	$("#div-main").animate({backgroundColor:'#0FF'},1000,
								function(){
											$("#p-main").fadeOut();
											});		
			$("#div-main").delay(100).animate({
			width:x*0.9,
			height:y*0.9,
			backgroundColor:'#0FF0F0',
			marginTop:0.04*y,
			borderRadius:x/100
			},1000,login);
	
	});
$(window).resize(function(){  //当浏览器窗口被调整时
		var x=getX();
		var y=getY();
		
		if(maxB){                             //对背景是否最大化进行判断
			$("#div-main").css({
		width:x,
		height:y,
		borderRadius:0,
		boxShadow:0
		});
			}else{
				$("#div-main").css({
		width:x*0.9,
		height:y*0.9,
		marginTop:0.04*y,
		borderRadius:x/100
		});}
				$("#tou-div").css({
						top:0.04*y
						});
				$("#tou-div,#tou-div img").css({           //头像区域的大小
					
					width:0.2*y,
					height:0.2*y,
					borderRadius:0.2*y
					});
				$("#login").css({
					marginTop:0.04*y,
					width:0.7*x
					});
				$("#text-main,#but-login,#pwd-main").css({
					marginTop:0.04*y,
					width:0.7*x,
					height:0.08*y,
					borderRadius:0.08*y,
					fontSize:0.03*y
					});
				$("#copyright").css({
					bottom:0.02*y,
					right:0.02*x,
					fontSize:0.01*y
					})
				imgJb();
				if(jibenJb){  //对基本信息框是否收起来做判断
				        
					$("#jb-div").css({
			marginRight:0.1*x,
			marginTop:0.1*y,
			width:0.14*x,
			height:0.14*x,
			borderRadius:0.01*y
			});
					}else{
						
				$("#jb-div p").css({
		paddingTop:0.02*x,
		fontSize:0.03*x
		});
			$("#jb-div").css({
			marginRight:0.1*x,
			marginTop:0.1*y,
			width:x*0.8,
			height:y*0.5,
			borderRadius:0.01*y
			});		
						}
				
		
		});
$(document).on('click','#but-login',function(){        //鼠标点击事件
	maxB=true;                            //返回maxB为true
		var x=getX();
		var y=getY();
		maxBg();
		jibenSd();
		$("#jb-div").css({
			paddingLeft:0.02*x,
			paddingRight:0.02*x});

	});
$(document).on('click','.jb-img',function(){
	var x=getX();
		var y=getY();
	$(".jb-img img").toggleClass('rotate');
$("#jb-div").css({
			paddingLeft:0,
			paddingRight:0});
	if(maxJb){
	jibenDn();
		}else{
		jibenUp();
			}
	
	
	});
function maxBg(){
	$("#div-main").animate({
		width:x,
		height:y,
		marginTop:0,
		borderRadius:0,
		boxShadow:0
		});
	}
function jibenSd(){
	$("#login").slideUp(1000,function(){
			$("#jb-div").css({
			marginTop:0.5*y,
			width:x*0.8,
			height:y*0.5,
			borderRadius:0.01*y
			}).fadeIn().animate({
			marginTop:0.1*y
			},1000);
			});
	$("#jb-div p").css({
		paddingTop:0.02*x,
		fontSize:0.03*x
		});
	$(".jb-img").css({
		top:0.3*y+0.02*x,
		right:0.12*x});
	$(".jb-img").delay(1500).fadeIn().animate({
		textIndent:0,
		top:0.3*y+0.02*x,
		right:0.12*x,
		width:0.1*x,
		height:0.1*x
		});
	}
function jibenDn(){
	maxJb=false;
			$("#jb-div p").animate({
				fontSize:0},500).fadeOut(500);
			$("#jb-div").animate({
			marginRight:0.1*x,
			marginTop:0.1*y,
			width:0.14*x,
			height:0.14*x,
			borderRadius:0.01*y
			},1000);
			
	}
function jibenUp(){
	maxJb=true;
		$("#jb-div p").css({
		paddingTop:0.02*x,
		fontSize:0.03*x
		}).fadeIn(1500);
			$("#jb-div").animate({
			marginRight:0.1*x,
			marginTop:0.1*y 	,
			width:x*0.8,
			height:y*0.5,
			borderRadius:0.01*y
			},1000);
	}
function imgJb(){
	$(".jb-img").css({
		textIndent:0,
		top:0.3*y+0.02*x,
		right:0.12*x,
		width:0.1*x,
		height:0.1*x
		});
	}