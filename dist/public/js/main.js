$(document).ready((function(){var e="#certificates .grid-item",t=$("#certificates #certificates-container").isotope({itemSelector:e,masonry:{columnWidth:e,isFitWidth:!0}});$(window).on("load",(function(){t.isotope("shuffle")}));var a=[[480,3],[720,10]],i=d(),s=1,o="*",n="data-filter",r="data-page",l="isotope-pager";function c(a){var i=e;i+="*"!=o?'[data-filter="'+o+'"]':"",function(e){t.isotope({filter:e})}(i+='[data-page="'+a+'"]')}function d(){for(var e=6,t=0;t<a.length;t++)if($(window).width()<=a[t][0]){e=a[t][1];break}return e}function u(){var a,n,d,u;a=t.children(e).length,Math.ceil(a/i),n=1,d=1,u=e,u+="*"!=o?'[data-filter="'+o+'"]':"",t.children(u).each((function(){n>i&&(d++,n=1),$(this).attr(r,d),n++})),s=d,function(){var e=0==$("."+l).length?$('<div class="isotope-pager"></div>'):$("."+l);e.html("");for(var a=0;a<s;a++){var i=$('<a href="javascript:void(0);" class="pager" data-page="'+(a+1)+'"></a>');i.html(a+1),i.click((function(){c($(this).eq(0).attr(r))})),i.appendTo(e)}t.after(e)}()}u(),c(1),$(".filters li").click((function(){var e=$(this).children("a").attr(n);o=e,u(),c(1)})),$(window).resize((function(){i=d(),u()}))})),$(document).ready((function(){$(".filter-button-group").on("click","li",(function(){var e=$(this).attr("data-filter");$(".grid").isotope({filter:e}),$(".filter-button-group li").removeClass("active"),$(this).addClass("active")}))})),$(document).ready((function(){$(".isotope-pager").on("click","a",(function(){$(this).attr("data-page");$(".isotope-pager a").removeClass("active"),$(this).addClass("active")}))})),$(document).ready((function(){$(".popupimg").magnificPopup({type:"image",mainClass:"mfp-with-zoom",gallery:{enabled:!0},zoom:{enabled:!0,duration:300,easing:"ease-in-out",opener:function(e){return e.is("img")?e:e.find("img")}}})})),anime.timeline({loop:!0}).add({targets:".sub-heading-role .line",opacity:[.5,1],scaleX:[0,1],easing:"easeInOutExpo",duration:700}).add({targets:".sub-heading-role .line",duration:600,easing:"easeOutExpo",translateY:(e,t)=>1.25*t-.625+"em"}).add({targets:".sub-heading-role .ampersand",opacity:[0,1],scaleY:[.5,1],easing:"easeOutExpo",duration:600,offset:"-=600"}).add({targets:".sub-heading-role .letters-left",opacity:[0,1],translateX:["0.5em",0],easing:"easeOutExpo",duration:600,offset:"-=300"}).add({targets:".sub-heading-role .letters-right",opacity:[0,1],translateX:["-0.5em",0],easing:"easeOutExpo",duration:600,offset:"-=600"}).add({targets:".sub-heading-role",opacity:0,duration:1e3,easing:"easeOutExpo",delay:1e3});var options={textColour:"#2c3e50",outlineColour:outlineColour="transparent",textHeight:18,depth:.8};window.onload=function(){try{TagCanvas.Start("skillCanvas","",options)}catch(e){document.getElementById("skillCanvasContainer").style.display="none"}};const items=Array.from(document.getElementsByClassName("activity-dynamic-item"));items.forEach(((e,t)=>{let a=items[t-1];a||(a=items[items.length-1]),a.addEventListener("animationend",(()=>{e.classList.add("animate"),a.classList.remove("animate")}))})),items[0].classList.add("animate"),$("#activities-carousel").carousel({interval:!1}),$("#carousel-thumbs").carousel({interval:!1}),$("[id^=carousel-selector-]").click((function(){var e=$(this).attr("id"),t=parseInt(e.substr(e.lastIndexOf("-")+1));$("#activities-carousel").carousel(t)})),$(window).width()<575&&($("#carousel-thumbs .row div:nth-child(4)").each((function(){var e=$(this);$('<div class="row mx-0">').insertAfter(e.parent()).append(e.nextAll().addBack())})),$("#carousel-thumbs .carousel-item .row:nth-child(even)").each((function(){var e=$(this);$('<div class="carousel-item">').insertAfter(e.parent()).append(e.nextAll().addBack())}))),$("#carousel-thumbs .carousel-item").length<2&&($("#carousel-thumbs [class^=carousel-control-]").remove(),$(".machine-carousel-container #carousel-thumbs").css("padding","0 5px")),$("#activities-carousel").on("slide.bs.carousel",(function(e){var t=parseInt($(e.relatedTarget).attr("data-slide-number"));$("[id^=carousel-selector-]").removeClass("selected"),$("[id=carousel-selector-"+t+"]").addClass("selected")})),$("#activities-carousel .carousel-item img").on("click",(function(e){$(e.target).attr("data-remote")&&$(this).ekkoLightbox()}));