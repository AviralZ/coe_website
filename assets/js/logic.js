 
 
 window.onload=function()
 {

  // alert("HEllo Avi");
  solve();
 }
 

 function solve()
 {
    var today=new Date();
    
      var weekday = new Array(7);
      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";
  
    
   
            var day = weekday[today.getDay()];
            var hour =today.getHours();
            var min = today.getMinutes();
            var subname="NO CLASS RIGHT NOW !";
            var linktext="NO";
            var tname="";
            var timing="";
            var place="";

  
            // console.log(day);
            // console.log(hour);
            // console.log(min);
            var t=0;
   
         while(t<1)
      {

            t++;
           
            if( (day.localeCompare("Monday"))==0)
            {
               
               if( (hour==13 && min>=47) || (hour==14 && min<=37) )
               {
                 subname="OPTIMIZATION TECHNIQUES LECTURE";
                 linktext="https://tiet.zoom.us/my/tietsom6";
                 tname="Mahesh Sharma Sir";
                 place="LT102";
                 timing="(1:50pm-2:40pm)";

                 
               }
  
               else if( (hour==14 && min>37) || (hour==15 && min<=27) )
               {
                 subname="COMPUTER GRAPHICS LECTURE";
                 linktext="https://tiet.zoom.us/my/csed5";
                 tname="Kuntal Chowdhury Sir";
                 place="LT102";
                 timing="(2:40pm-3:30pm)";
                 
               }
  
               else if( (hour==15 && min>27) || (hour==16 && min<=17) )
               {
                 subname=" THEORY OF COMPUTATION LECTURE";
                 linktext="https://tiet.zoom.us/my/csed11";
                 tname="Chinmay Panigrahy Sir";
                 place="LT102";
                 timing="(3:30pm-4:20pm)";
                 
               }
  
             else
              {
                subname="NO CLASS RIGHT NOW !";
                linktext="NO";
               }
               
            }
  
   
    
             else if( (day.localeCompare("Tuesday"))==0)
            {
                
  
                if( (hour==9 && min>=37) || (hour==10 && min<=27) )
               {
                 subname=" THEORY OF COMPUTATION LECTURE";
                 linktext="https://tiet.zoom.us/my/csed13";
                 tname="Chinmay Panigrahy Sir";
                 place="LT102";
                 timing="(9:40am-10:30am)";
                 
               }
  
               else if( (hour==10 && min>27) || (hour==11 && min<=17) )
               {
                 subname=" MICROPROCESSORS LECTURE";
                 linktext="https://tiet.zoom.us/my/csed20";
                 tname="Manju Khurana Maam";
                 place="LT102";
                 timing="(10:30am-11:20am)";
                 
               }
  
  
               else if( (hour==11 && min>17) || (hour==12 && min<=7) )
               {
                 subname="OPTIMIZATION TECHNIQUES LECTURE";
                 linktext="https://tiet.zoom.us/my/tietsom5";
                 tname="Mahesh Sharma Sir";
                 place="LT102";
                 timing="(11:20am-12:10pm)";
                 
                 
               }
  
   
              else
               {
                 subname="NO CLASS RIGHT NOW !";
                 linktext="NO";
               }
               
            }
  
        
            else if( (day.localeCompare("Wednesday"))==0)
            {
           
              if( (hour==9 && min>=37) || (hour==10 && min<=27) )
               {
                 subname="OPTIMIZATION TECHNIQUES LECTURE";
                 linktext="https://tiet.zoom.us/my/tietsom2";
                 tname="Mahesh Sharma Sir";
                 place="LT102";
                 timing="(9:40am-10:30am)";
                 
                 
               }
  
               else if( (hour==10 && min>27) || (hour==11 && min<=17) )
               {
                 subname="INNOVATION & ENTREPRENUERSHIP LECTURE";
                 linktext="https://tiet.zoom.us/my/csed18";
                  
                 tname="Karun Verma Sir";
                 place="LT102";
                 timing="(10:30am-11:20am)";
                 
               }
             
               else
               {
                
                subname="NO CLASS RIGHT NOW !";
                linktext="NO";
               }
               
            }
  
  
  
     
  
    
           else if( (day.localeCompare("Thursday"))==0)
            {
               
               
  
                if( (hour==9 && min>=37) || (hour==10 && min<=27) )
               {
                 subname="MICROPROCESSORS LECTURE";
                 linktext="https://tiet.zoom.us/my/csed11";
                 tname="Manju Khurana Maam";
                 place="LT102";
                 timing="(9:40am-10:30am)";
                 
                 
               }
  
               
   
  
               else if( (hour==12 &&   (min>=07 && min<=57)) )
               {
                 subname="COMPUTER GRAPHICS LECTURE";
                 linktext="https://tiet.zoom.us/my/csed7";
                 tname="Kuntal Chowdhury Sir";
                 place="LT102";
                 timing="(12:10pm-1:00pm)";
                 
               }
  
   
               else{
               
                subname="NO CLASS RIGHT NOW !";
                linktext="NO";
               }
               
            }
  
  
   
  
           else if((day.localeCompare("Friday"))==0)
            {
               
              if( (hour==7 && min>=57) || (hour==8 && min<=47) )
               {
                 subname="COMPUTER GRAPHICS LECTURE";
                 linktext="https://tiet.zoom.us/my/csed5";
                 tname="Kuntal Chowdhury Sir";
                 place="LT102";
                 timing="(8:00am-8:50am)";
               }
  
               else if( (hour==8 && min>=47) || (hour==9 && min<=37) )
               {
                 subname=" MICROPROCESSORS LECTURE";
                 linktext="https://tiet.zoom.us/my/csed17";
                 tname="Manju Khurana Maam";
                 place="LT102";
                 timing="(8:50am-9:40am)";
                 
               }
               
               else if( (hour==9 && min>=37) || (hour==10 && min<=27) )
               {
                 subname="THEORY OF COMPUTATION LECTURE";
                 linktext="https://tiet.zoom.us/my/csed13";
                 tname="Chinmay Panigrahy Sir";
                 place="LT102";
                 timing="(9:40am-10:30am)";
                 
                }
                else{
               
                  subname="NO CLASS RIGHT NOW !";
                  linktext="NO";
                 }
              
       
            }


            else
            {  subname="NO CLASS RIGHT NOW !";
                linktext="NO";
                
            }


            
          }


            

            // else if((day.localeCompare("Saturday"))==0)
            // {
               
               
               
            //    if( (hour==13 && (min>44 && min<=45) ))
            //    {
            //      subname="Yo Yo class";
            //      linktext="https://www.youtube.com/watch?v=WuMWwPHTSoY";
                 
            //    } 
            //    else if( (hour==17 && (min>47 && min<=59) ))
            //     {
            //       subname="dance LECTURE";
                   
            //       linktext="https://www.youtube.com/watch?v=R-dXS5TI_dQ&list=RDGMEMCMFH2exzjBeE_zAHHJOdxg&start_radio=1&rv=ii9KLQoV78I";
            //       tname="Mahesh Sharma Sir";
            //       place="LT102";
            //       timing=" (1:50pm-2:40pm) "
            //     }
              

            //     else if( (hour==17 && (min>13 && min<=15) ))
            //     {
            //       subname="Hiphop LECTURE";
            //       linktext="https://www.youtube.com/watch?v=G6SutyLlzws&list=RDGMEMCMFH2exzjBeE_zAHHJOdxg&index=4";
                   
               
            //       tname="Ramesh Sharma Sir";
            //       place="LT102";
            //       timing="(1:50pm-2:40pm)"
            //     }
               
            //     else if( (hour==17 && (min>15 && min<=17) ))
            //     {
            //       subname="Rock on LECTURE";
            //       linktext="https://www.youtube.com/watch?v=uhUgbAsD9Lk&list=RDGMEMCMFH2exzjBeE_zAHHJOdxg&index=3";
                  
            //       tname="Mukesh Sharma Sir";
            //       place="LT102";
            //       timing=" (1:50pm-2:40pm) "
            //     }
              

       
            // }

             

             
  
    
          

          

            document.getElementById("heado1").innerHTML=subname;
            document.getElementById("teacher").innerHTML=tname;
            document.getElementById("place").innerHTML=place;
            document.getElementById("timing").innerHTML=timing;
            // console.log(subname);

            if(linktext=="NO")
            {
              document.getElementById('heado3').href="#";
              document.getElementById('heado3').innerHTML="NONE"
            }
            else{
              document.getElementById('heado3').href=linktext;
            }
             





  }
  
 