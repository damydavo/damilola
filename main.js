let themeDots=document.getElementsByClassName("theme-dot");for(let i=0;themeDots.length>i;i++){themeDots[i].addEventListener("click",function(){let mode=this.dataset.mode;setTheme(mode)})}
function setTheme(mode){if(mode=="light"){document.getElementById("theme-style").href="css/style.css"}
if(mode=="blue"){document.getElementById("theme-style").href="css/blue.css"}}


window.onscroll = () => getWrapper()

const navBar = document.querySelector('.nav-wrapper')
const sticky = navBar.offsetTop


const getWrapper = () => window.pageYOffset > sticky ? navBar.classList.add('sticky') : navBar.classList.remove('sticky')




