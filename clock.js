function clock()
{
    var hours=document.getElementById("hour-time");
    var  mins=document.getElementById("min-time");
    var secs=document.getElementById("sec-time");
    var am=document.getElementById("am-pm-id");

    var time=new Date();
    var h=time.getHours()%12;

    if(h==0)
    hours.innerHTML=12;
    else
    hours.innerHTML=h;

    mins.innerHTML=time.getMinutes();
    secs.innerHTML=time.getSeconds();

    var temp=time.getHours();

     if(temp%12>=0 && temp/12>=1)
     am.innerHTML="PM";



}

setInterval(clock,1000);
setInterval(colon_hidden,1000);
setInterval(colon_visible,2000);

function colon_hidden(){

    var colon1=document.getElementById("colon1");
    var colon2=document.getElementById("colon2");
    colon1.style.visibility="hidden"
    colon2.style.visibility="hidden";
}

function colon_visible(){

    var colon1=document.getElementById("colon1");
    var colon2=document.getElementById("colon2");
    colon1.style.visibility="visible";
    colon2.style.visibility="visible";
}



function alarms(){

    

    var wake_time=document.getElementById("wake-time-id").value;

    var w_t=$("#wake-time-id option:selected").text();
  
    

    
    var lunch_time=document.getElementById("lunch-time-id").value;
    var l_t=$("#lunch-time-id option:selected").text();


    var sleep_time=document.getElementById("sleep-time-id").value;
    var s_t=$("#sleep-time-id option:selected").text();

    var alarm_text=document.getElementById("alarm-text");
    var img_id=document.getElementById("img2");

    var time=new Date();

    var h=time.getHours()%12;
   

    
     var am_pm=document.getElementById("am-pm-id").innerHTML;
    

     var p1_text_id=document.getElementById("p1-text");
     var p2_text_id=document.getElementById("p2-text");
     var p3_text_id=document.getElementById("p3-text");

     var str="";

     if(w_t!="" && w_t!="Default")
     p1_text_id.innerHTML=w_t;
     else if(w_t=="Default")
     p1_text_id.innerHTML=str;

     if(l_t!="" && l_t!="Default")
     p2_text_id.innerHTML=l_t;
     else if(l_t=="Default")
     p2_text_id.innerHTML=str;

     if(s_t!="" && s_t!="Default")
     p3_text_id.innerHTML=s_t;
     else if(s_t=="Default")
     p3_text_id.innerHTML=str;

     var f1=0,f2=0,f3=0;
     
     if(w_t.includes(am_pm))
      f1=1;
      else if(l_t.includes(am_pm))
      f2=1;
      else if(s_t.includes(am_pm))
      f3=1;

     


      



    if(wake_time%12==h && f1==1)
    {
    
        alarm_text.innerHTML="Hi! Its Breakfast Time !!";
        alarm_text.style.fontFamily="sans-serif";
        alarm_text.style.color="#3d087d";
        img_id.style.backgroundImage="url('./morning.jfif')";
        

    }
    else if(lunch_time%12==h && f2==1)
    {
       
        alarm_text.innerHTML="Hi! It's Lunch Time";
        alarm_text.style.fontFamily="sans-serif";
        alarm_text.style.color="#3d087d";
        img_id.style.backgroundImage="url('./lunch.jfif')";
    }
    else if(sleep_time%12==h && f3==1){

     
        alarm_text.innerHTML="Hi! It's Sleep Time";
        alarm_text.style.fontFamily="sans-serif";
        alarm_text.style.color="#3d087d";
        img_id.style.backgroundImage="url('./night.jfif')";
    }
    

    



}