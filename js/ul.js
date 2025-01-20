var $aside, lastScroll;

//document ready
$(document).ready(function(){
	uiInit();
	uiInitEvent();
});
//uiInit
function uiInit(){

    $aside = $("#sideMenu");


}

//uiInitEvent
function uiInitEvent(){

	$(window).on({
		scroll : function(){
            
		},
		resize : function(){
            
		}
	}).trigger('scroll');
	
	ui.common();

    /* quick nav */
    $(".bt_mobile_quickmenu").on("click", function(){
        $(".side-quick-nav").toggleClass("open")
        $(this).toggleClass("active")
        
    })

    /* quick nav */
    $("#sideQuickNav a, #sideQuickNav button").on("click", function(){
        $(".side-quick-nav").removeClass("open")
        $(".bt_mobile_quickmenu").removeClass("active")
    })

    // �섏씠吏�媛� 濡쒕뱶�� �� �쒖꽦�붾맂 ��쓽 �ㅽ겕濡� �꾩튂瑜� 留� �욎쑝濡� �대룞

    setTimeout(function(){
        var activeTab = $('.tab-common .on');
        if (activeTab.length > 0) {
            var tabPosition = activeTab.offset().left;
            $('.tab-common').scrollLeft(tabPosition - 15);
        }
    }, 1000)


};


var ui = {
		
	common : function(){
		var t = this;
		
		t.categoryUnit();
		t.layerToggleFn();
		t.asideToggle();
        //t.gnbActive();
        t.pageScrTop();
        t.photoUploadFn();
	},

	categoryUnit : function(){
		if(undefined != $(".container").attr("class")){
			var cls = $(".container").attr("class").split(' ')[1];
            $("body").addClass("body_" + cls);
		}

		switch(cls){
			//main
			case 'ctn-main':
                
                //setMotionId();



				break;
			
			//sub
			case 'ctn-intro':



				default:
		}
	},
	
    asideToggle : function(){

        $(".aside-button, .asideDmm").click(function(){
            if($aside.hasClass("open")){
                $aside.removeClass("open");
                $("body").removeClass("menuActive");
                $(".asideDmm").hide()
            }else{
                $aside.addClass("open");
                $("body").addClass("menuActive");
                $(".asideDmm").show()
            }
        })
    },

    gnbActive : function(){
			
        var $header = $("header");

        $("#gnb .mn").on("mouseenter focus", function(){
            $(".depth1").removeClass("on");
            $(this).parents(".depth1").addClass("on");
            $header.addClass("navOn");
            if($(this).siblings(".depth2").length){
                $header.addClass("navActive");
            }else{
                $header.removeClass("navActive");
            }
        });
        $("#gnb .smn").on("mouseenter focus", function(){
            $(".depth1").removeClass("on");
            $(this).parents(".depth1").addClass("on");
        });
        $("nav").on("mouseleave", function(){
            $header.removeClass("navActive");
            $header.removeClass("navOn");
            $(".depth1").removeClass("on");
        });


    },

	modalPopOpen : function(modalID){
		var $target = $(modalID);
			$target.css({
				display:"block"
			})

		$("body").addClass("modalOpen");
	},

	modalPopClose : function(modalID){
		var $target = $(modalID);
		$target .css("display","none");

		$("body").removeClass("modalOpen");
	},

	clsToggleFn : function(target, cls){
		$(target).toggleClass(cls);
	},

	layerToggleFn : function(){
		$(".common_layer_bt").on("click", function(){
			var current = $(".common_layer_group.view");

			$(this).parents(".common_layer_group").addClass("view");
			current.removeClass("view");
		})
	},
	
	tabFn : function(tg, t){
		if($(t).is(".toggle.on")){
			$(t).removeClass("on");
			$(tg).css("display","none");
		}else{
			$(t).parents(".uiTabMenu").find("a, button").removeClass("on");
			$(t).addClass("on");
			
			$(tg).siblings(".uiTabCon").css("display","none");
			$(tg).css("display","block");
		}
	},
    pageScrTop : function(){
        $(".body_ctn-sub .qmn-page-top").on('click', function(){
            var sctPos = $(".wrap").offset().top;
            $('html,body').stop().animate({'scrollTop':sctPos+'px'},500);
        });
    },

    photoUploadFn : function(){

        $("#photoFile").on("change", function(){
            readURL(this);
        })
        var readURL = function(input){
            var $this = $(input);
            if(input.files && input.files[0]){
                var fileName=
                input.files[0].name;
                var ext=fileName.split('.')[1]
                var isCheck=false; 
                if(ext.toLowerCase()=='jpg' || ext.toLowerCase()=='gif' || ext.toLowerCase()=='png' || ext.toLowerCase()=='jpeg'){
                    isCheck=true;
                }
                if(isCheck==false){
                    alert(ext.toLowerCase() + " �깅줉�� �� �녿뒗 �뚯씪 �뺤옣�� �낅땲��.");
                    return;
                }
                var filerdr = new FileReader();
                filerdr.readAsDataURL(input.files[0]);
                filerdr.onload=function(e){
                    $("<span class=\"file-img\">" +
                        "<img src=\"" + e.target.result + "\" />" +
                        "<br/><button class=\"remove\"></button>" +
                        "</span>").insertBefore("#photoFile");
                    $(".remove").click(function() {
                        $(this).parent(".file-img").remove();
                    });
                }
            }
        }

        //input[type=file] value control
        if($(".bt_file_original").length){
            $('body').on("change", ".bt_file_original", function(){
                var tVal = $(this).val();
                var prt = $(this).parents(".file-upload-group")
                prt.find(".file-input").val(tVal);
            });
        }

    }

}

//fixMenu
var fixMenu = function(){
	if($(window).scrollTop() >= 60){
		$("body").addClass("fixed");
	}else{
		$("body").removeClass("fixed");
	}
}

//page top button
var pageTopFn = function(){
	if($(".btn_page_top a").length){
		var st = $(this).scrollTop(),
			$pageTop = $(".btn_page_top a");
	
		if (st >= 50){
			$pageTop.addClass("active");
		}
		else if(st === lastScroll){
			$pageTop.removeClass("active");
		}
	}
}

var indexUI = function(){



}

var setMotionId = function(){
    $(".motionBox").each(function(indexNum){
        $(this).attr('id', 'motion'+indexNum)
        //console.log(indexNum)
    })
}

//index scroll motion
var secMotion = function(){
    var winH = $(window).height();
    var $section = $(".motionBox"),
        scrollT = $(window).scrollTop();
    $($section).each(function(i){
        var secT = $('#motion' + i).offset().top,
            secH = $('#motion' + i).innerHeight();
        if(((secT + secH /4) - scrollT) < winH){
            $(this).find(".motion").addClass("active");
        }else if((winH) < (secT - scrollT + secH)){
            $(this).find(".motion").removeClass("active");
        }
    })
}



//layer popup close
var layerPopClose = function(){
	$(".layer_popup_wrappper").on("click", function(){
		$(this).css("display", "none");
		$("body").removeClass("modalOpen");
	})
}

//getCookie
var getCookie = function(name) {
	var cookieName = name + "=";
	var x = 0;
	while(x <= document.cookie.length) {
		var y = (x + cookieName.length);
		if(document.cookie.substring(x, y) == cookieName) {
			if((endOfCookie = document.cookie.indexOf(";", y)) == -1) {
				endOfCookie = document.cookie.length;
			}
			return unescape(document.cookie.substring(y, endOfCookie));
		}
		x = document.cookie.indexOf("", x) + 1;
		if(x == 0) {
			break;
		}
	}
	return "";
}

//setCookie
var setCookie = function(name, value, expireDays) {
	var today = new Date();
	today.setDate(today.getDate() + expireDays);
	document.cookie = name + '=' + escape(value) + '; path=/; expires=' + today.toGMTString() + ';';
}

//setNotTodayPop
var setNotTodayPop = function(popupID, cookieName) {
	setCookie(cookieName,'Y', 1);
	ui.modalPopClose(popupID)
}