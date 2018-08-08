<!-- HoverAlls Function Calls -->
<script type="text/javascript">
$(window).load(function () {

$('#cap1').HoverAlls({starts:"0px,230px",ends:"0px,165px",returns:"0px,230px",bg_class:"captionbackground1",speed_in:350,speed_out:350,text_class:"cap1text",bg_height:"50px",text_starts:"0px,50px",text_ends:"0px,0px",text_returns:"0px,50px",text_speed_in:380,text_speed_out:380});

$('#cap2').HoverAlls({speed_in:350,speed_out:350,bg_class:"captionbackground2",starts:"0px,-55px",ends:"0px,0px",returns:"0px,-55px",bg_height:"50px", text_class:"cap2text",text_speed_in:380,text_speed_out:380,text_starts:"0px,-50px",text_ends:"0px,0px",text_returns:"0px,-50px"});

$('#cap3').HoverAlls({speed_in:350,bg_class:"captionbackground3",starts:"215px,0px",ends:"40px,0px",returns:"215px,0px",speed_out:350,bg_height:"100%",bg_width:"185px",text_class:"cap3text",text_speed_in:380,text_speed_out:380,text_starts:"100px,0px",text_ends:"0px,0px",text_returns:"100px,0px"});

$('#cap4').HoverAlls({speed_in:350,bg_class:"captionbackground4",starts:"-185px,0px",ends:"0px,0px",returns:"-185px,0px",speed_out:350,bg_height:"100%",bg_width:"185px",text_class:"cap4text",big_link:true,link_target:"_blank",text_speed_in:380,text_speed_out:380,text_starts:"-100px,0px",text_ends:"0px,0px",text_returns:"-100px,0px"});

$('#advcap5').HoverAlls({starts:"230px,140px",ends:"20px,140px",returns:"230px,140px",bg_class:"advbg5",text_class:"advtext5",speed_in:400, speed_out:400,bg_width:"200px",bg_height:"30px",text_speed_in:400,text_speed_out:250,text_starts:"-460px,0px",text_ends:"0px,0px",text_returns:"-460px,0px",big_link:true, container_class:"advcap5container"});

$('.multiple').HoverAlls({starts:"0px,230px",ends:"0px,165px",returns:"0px,230px",bg_class:"captionbackground1",speed_in:350,speed_out:350,text_class:"cap1textm",bg_height:"50px",text_starts:"0px,50px",text_ends:"0px,0px",text_returns:"0px,50px",text_speed_in:380,text_speed_out:380});

$('#advcap2').HoverAlls({full_frame:true,speed_in:750,speed_out:800,bg_class:"advbg2",start_opacity:0,bg_width:"230px",bg_height:"215px"});

$('#advcap7').HoverAlls({speed_in:500, bg_class : "censoredrobot", bg_height : "93px",starts:"0px,120px",ends:"0px,25px",returns:"0px,120px", start_opacity:.95, end_opacity:0,big_link:true});

$('#advcap6').HoverAlls({starts:"200px,270px",ends:"-300px,-270px",returns:"-590px,-470px",speed_in:500,speed_out:680,bg_class:"advbg8",bg_width:"200px",bg_height:"190px",text_class:"advtext8",passthrough:true, text_starts:"400px,370px", text_ends:"10px,5px", text_returns:"-400px,-370px",text_speed_in:650,text_speed_out:650});

$('#topbar1').HoverAlls({speed_in:750,starts:"0px,-55px",ends:"0px,0px",returns:"0px,-55px",bg_class:"topdrop1bg",text_class:"topdrop1text",container_class:"topdrop1container",start_opacity:1, end_opacity:1,bg_width:"100%", bg_height:"50px",top_drop:true,effect_in:"easeOutQuart",effect_out:"easeInSine",target_container:"#top_drop"});

$('#topbar2').HoverAlls({speed_in:600,speed_out:600,starts:"-100px,150px",ends:"-20px,150px",returns:"-100px,150px",container_class:"topdrop2container",start_opacity:0, end_opacity:1,bg_width:"110px",bg_height:"550px",top_drop:true,target_container:"#top_drop2",html_mode:"#hoverfollow", on_click:true});

$('#topbar3').HoverAlls({speed_in:750,starts:"50px,-700px",ends:"50px,-15px",returns:"50px,-700px",bg_class:"topdrop3bg",text_class:"topdrop3text",container_class:"topdrop3container",start_opacity:0, end_opacity:1,bg_width:"350px", bg_height:"575px",top_drop:true,
text_starts:"25px,-200px",text_ends:"25px,40px",text_returns:"25px,-200px",target_container:"#top_drop3",html_mode:"#slidingpanel1html"});

$('#topbar4').HoverAlls({speed_in:800,speed_out:400,starts:"0px,-365px",ends:"0px,0px",returns:"0px,-365",bg_class:"topdrop2bg",container_class:"topdrop4container",start_opacity:.5, end_opacity:1,bg_width:"100%", bg_height:"350px",on_click:true,html_mode:"#html5inject", target_container:"#top_drop4", top_drop:true,text_starts:"0px,-960px",text_ends:"0px,-30px",text_returns:"0px,-960px",text_speed_in:1050, text_speed_out:2500,big_link:true,text_start_opacity:0, text_end_opacity:.65, overlay:true,overlay_class:"lightbox1overlay"});

$('#nav1').HoverAlls({starts:"0px,0px",ends:"0px,0px",returns:"0px,0px",bg_class:"navbg1",speed_in:650,bg_height:"215px",bg_width:"230px",text_starts:"0px,-100px",text_ends:"0px,155px",text_returns:"0px,-100px",text_start_opacity:0,text_end_opacity:1,text_speed_in:650,text_speed_out:450,text_class:"navtext"});

$('#nav2').HoverAlls({starts:"-230px,215px",ends:"-10px,10px",returns:"-230px,215px",bg_class:"navbg2",end_opacity:1,speed_in:1500, speed_out:125, text_class:"cap1text", bg_height:"215px",bg_width:"230px",effect_in:"easeOutElastic"});

$('#nav3').HoverAlls({bg_class:"navbg3",end_opacity:.85,speed_in:480, bg_height:"215px", bg_width:"230px",text_start_opacity:0,text_end_opacity:1,text_speed_in:1200,text_speed_out:250,text_effect_in:"easeOutBack",text_class:"navtext3",starts:"-100px,12px",ends:"8px,12px",returns:"-100px,12px",text_starts:"260px,210px",text_ends:"60px,25px",text_returns:"260px,210px"});

$('#nav4').HoverAlls({starts:"0px,0px",ends:"0px,0px",returns:"0px,0px",bg_class:"navbg4",end_opacity:.95,speed_in:750, text_class:"cap1text", bg_height:"215px", text_class:"navtext4",text_starts:"100px,330px",text_ends:"100px,185px",text_returns:"100px,185px",text_start_opacity:1,text_end_opacity:1,text_speed_in:1200,text_speed_out:450,text_effect_in:"easeOutQuint",passthrough:true});

$('#ticker1').HoverAlls({bg_class:"ticker1",text_class:"ticker1text",ticker_mode: true,start_opacity:0,end_opacity:1,bg_width:"230px",bg_height:"215px",starts:"0px,215px",ends:"0px,170px",returns:"0px,215px",text_speed_in:47000,text_speed_out:600,text_starts:"245px,0px",text_ends:"-1500px,0px",text_returns:"245px,0px"});

$('#ticker2').HoverAlls({bg_class:"ticker2",text_class:"ticker2text",ticker_mode: true,start_opacity:0,end_opacity:.5,bg_width:"230px",bg_height:"215px",starts:"0px,0px",ends:"0px,0px",returns:"0px,0px",text_speed_in:37000,text_speed_out:600,text_starts:"245px,35px",text_ends:"-1500px,35px",text_returns:"245px,35px"});

$('#ticker3').HoverAlls({speed_in:750,speed_out:750,bg_class:"ticker3",text_class:"ticker3text",ticker_mode: true,start_opacity:0,end_opacity:1,bg_width:"230px",bg_height:"30px",starts:"200px,25px",ends:"30px,25px",returns:"215px,25px",text_speed_in:47000,text_speed_out:600,text_starts:"215px,0px",text_ends:"-1500px,0px",text_returns:"245px,0px"});

$('#ticker4').HoverAlls({text_class:"scrolltargettext",bg_class:"scrolltarget",ticker_mode: true,start_opacity:0,end_opacity:1,bg_width:"945px",bg_height:"20px",starts:"0px,0px",ends:"0px,0px",returns:"0px,0px",text_speed_in:109000,text_speed_out:600,text_starts:"945px,0px",text_ends:"-4500px,0px",text_returns:"245px,0px", target_container:"#scrolltarget", ticker_repeat:3});

$('#tooltip1').HoverAlls({tooltip:true,starts:"0px,50px",ends:"120px,-55px",returns:"0px,50px",bg_class:"tooltip1background",text_class:"tooltip1text",speed_in:1000,speed_out:380,effect_in:"easeOutBack",effect_out:"easeInSine",bg_width:"250px",bg_height:"135px"});

$('#tooltip2').HoverAlls({tooltip:true,starts:"-15px,0px",ends:"-15px,150px",returns:"-15px,0px",bg_class:"tooltip2background",text_class:"tooltip2text",speed_in:1000,speed_out:380,effect_in:"easeOutBack",effect_out:"easeInSine",bg_width:"250px",bg_height:"35px",big_link:true});

$('#tooltip3').HoverAlls({tooltip:true,starts:"-35px,180px",ends:"210px,-30px",returns:"-35px,180px",bg_class:"tooltip3background",text_class:"tooltip3text",speed_in:1000,speed_out:380,effect_in:"easeOutBack",effect_out:"easeInSine",bg_width:"150px",bg_height:"35px",ticker_mode:true,text_speed_in:39000,text_speed_out:250,text_starts:"200px,0px",text_ends:"-1500px,0px",text_returns:"0px,0px",ticker_repeat: 2});


$('#tooltip4').HoverAlls({tooltip:true,starts:"-100px,-20px",ends:"-100px,5px",returns:"-100px,-20px",bg_class:"tooltip4background",speed_in:1000,speed_out:380,effect_in:"easeOutBack",effect_out:"easeInSine",bg_width:"400px",bg_height:"185px",html_mode:"#tooltiphtml"});





$('#lightbox2').HoverAlls({lightbox:true,lightbox_center:true,speed_in:950,speed_out:950,container_class:"lightbox2container",text_class:"lightbox2text",overlay_class:"lightbox2overlay",starts:"-900px,1000px",ends:"350px,100px",returns:"105%,1000px",start_opacity:0, end_opacity:1,bg_width:"575px", bg_height:"575px",					  
text_starts:"120px,-900px",text_ends:"120px,100px",text_returns:"120px,-900px",target_container:"#lightboxtarget2",text_speed_in:1200,text_speed_out:1200,overlay_speed_in:500,effect_in:"easeOutBack",effect_out:"easeInBack",html_mode:"#lightbox2html"});




$('#lightbox3').HoverAlls({lightbox:true,lightbox_center:true,speed_in:950,speed_out:950,container_class:"lightbox3container",text_class:"lightbox3text",overlay_class:"lightbox3overlay",starts:"-900px,1000px",ends:"350px,100px",returns:"105%,1000px",start_opacity:0, end_opacity:1,bg_width:"575px", bg_height:"575px",					  
text_starts:"120px,-900px",text_ends:"120px,100px",text_returns:"120px,-900px",target_container:"#lightboxtarget3",text_speed_in:1200,text_speed_out:1200,overlay_speed_in:500,effect_in:"easeOutBack",effect_out:"easeInBack",html_mode:"#lightbox3html"});

});</script>