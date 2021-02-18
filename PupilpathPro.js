// ==UserScript==
// @name         Pupilpath Grade Changer Pro
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Change grades within a class.
// @author       GSRHackZ
// @match        https://pupilpath.skedula.com/Grades/Performance/*
// @grant        none
// @icon         https://raw.githubusercontent.com/KaBankz/PupilPathPlus/master/icon.png
// @license                  MIT
// @compatible               chrome
// @compatible               firefox
// @compatible               opera
// @compatible               safari
// ==/UserScript==

setTimeout(function(){
    var activate=document.getElementById("logo");
    var grades_container=document.getElementsByClassName("tab-content default-tab")[1];
    var cls=document.getElementsByClassName("content-box-header")[0].innerText;
    var avr=document.getElementById("standing");
    var mp=document.getElementsByTagName("select")[1].value;
    activate.onclick=function(evt){
        evt.preventDefault();
        if(grades_container.contentEditable=="inherit"){
            grades_container.contentEditable="true"
            avr.contentEditable="true";
        }
        else{
            grades_container.contentEditable="inherit";
            avr.contentEditable="inherit";
            localStorage.setItem(mp+","+cls,grades_container.innerHTML+"//check//"+avr.innerHTML).split("//check//")
        }
    }
    if(localStorage.getItem(mp+","+cls)!==null){
        if(localStorage.key(localStorage.getItem(mp+","+cls).split(",")[0]==mp)){
            grades_container.innerHTML=localStorage.getItem(mp+","+cls).split("//check//")[0];
            avr.innerHTML=localStorage.getItem(mp+","+cls).split("//check//")[1]
        }
    }
},1)


var lvls=[
    "/img/ico/star.png",
    "/img/ico/tick.png",
    "/img/ico/error.png",
    "/img/ico/exclamation.png",
]


var grades=document.getElementsByTagName("td");
setInterval(function(){
    for(var j=0;j<lvls.length;j++){
        for(var i=0;grades.length>i;i++){
            if(grades[i].innerHTML.includes(lvls[j])){
                var number=Number(grades[i].childNodes[0].innerText)
                if(number>=90){
                    grades[i].childNodes[0].style.color="#0087FF";
                    grades[i].childNodes[0].childNodes[0].src=lvls[0]
                }
                if(number>=80 && number<=89){
                    grades[i].childNodes[0].style.color="#1FBA24";
                    grades[i].childNodes[0].childNodes[0].src=lvls[1]
                }
                if(number>=70 && number<=79){
                    grades[i].childNodes[0].style.color="#AA9901";
                    grades[i].childNodes[0].childNodes[0].src=lvls[2]
                }
                if(number<=69){
                    grades[i].childNodes[0].style.color="#CF1920";
                    grades[i].childNodes[0].childNodes[0].src=lvls[3]
                }
            }
            else if(grades[i].innerText.includes("%")&&grades[i].title.includes("Percent Worth:")){
                number=Number(grades[i].innerText.split("%")[0]);
                if(number>=90){
                    grades[i].childNodes[0].style.color="#0087FF";
                }
                if(number>=80 && number<=89){
                    grades[i].childNodes[0].style.color="#1FBA24";
                }
                if(number>=70 && number<=79){
                    grades[i].childNodes[0].style.color="#AA9901";
                }
                if(number<=69){
                    grades[i].childNodes[0].style.color="#CF1920";
                }
            }
            else if(grades[i].innerText.includes("/")&&grades[i].title.includes("Earned/Possible")){
                var check=eval(grades[i].innerText);
                var format=(check*100);
                if(format>=90){
                    grades[i].childNodes[0].style.color="#0087FF";
                }
                if(format>=80 && format<=89){
                    grades[i].childNodes[0].style.color="#1FBA24";
                }
                if(format>=70 && format<=79){
                    grades[i].childNodes[0].style.color="#AA9901";
                }
                if(format<=69){
                    grades[i].childNodes[0].style.color="#CF1920";
                }
            }
            else if(grades[i].title.includes("Grade Entered:")){
                number=Number(grades[i].innerText)
                if(number>=90){
                    grades[i].childNodes[0].style.color="#0087FF";
                }
                if(number>=80 && number<=89){
                    grades[i].childNodes[0].style.color="#1FBA24";
                }
                if(number>=70 && number<=79){
                    grades[i].childNodes[0].style.color="#AA9901";
                }
                if(number<=69){
                    grades[i].childNodes[0].style.color="#CF1920";
                }
            }
            var avr=document.getElementById("standing");
            var avrNum=avr.innerText.split(" - ");//Number(avrNum[0])
            if(Number(avrNum[0])>=90){
                avr.style.color="#0087FF";
                avr.childNodes[0].src=lvls[0];
            }
            if(Number(avrNum[0])>=80 && Number(avrNum[0])<=89){
                avr.style.color="#1FBA24";
                avr.childNodes[0].src=lvls[1];
            }
            if(Number(avrNum[0])>=70 && Number(avrNum[0])<=79){
                avr.style.color="#AA9901";
                avr.childNodes[0].src=lvls[2];
            }
            if(Number(avrNum[0])<=69){
                avr.style.color="#CF1920";
                avr.childNodes[0].src=lvls[3];
            }
        }}},10)

var barCharts=document.getElementsByClassName("chartContainer");
setInterval(function(){
    if(barCharts[0]!==undefined){
        barCharts[0].remove();
    }
},50)


setTimeout(function(){
    var box=document.getElementById("overallAverageContainer");
    box.innerHTML=`
<div id='container'>
<p>An unexpected error has occured while displaying charts.<br/>Please try again later...<p><br/>
<img id="error-img"><br/>
</div>`;


    var container=document.getElementById("container");
    var title=document.getElementById("title");
    var img=document.getElementById("error-img");
    var imgs=[
        "https://optinmonster.com/wp-content/uploads/2018/06/11-brilliant-404-pages-to-turn-lost-visitors-into-loyal-customers-2.png"
    ]
    container.style=`
width:950px;
height:400px;
font-size:16px;
padding-top:30px;
margin: 0 auto;
border-radius:5px;
opacity:100%;
text-align:center;
margin-top:5px;
transition:all 1.7s;
        `
        img.style=`
width:450px;
border-radius:10px;
height:250px;
margin-bottom:-100px;
`
        img.src=imgs[0]


},1000)


