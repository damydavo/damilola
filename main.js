let themeDots=document.getElementsByClassName("theme-dot");for(let i=0;themeDots.length>i;i++){themeDots[i].addEventListener("click",function(){let mode=this.dataset.mode;setTheme(mode)})}
function setTheme(mode){if(mode=="light"){document.getElementById("theme-style").href="css/style.css"}
if(mode=="blue"){document.getElementById("theme-style").href="css/blue.css"}}
