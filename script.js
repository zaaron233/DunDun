
function setLang(x){document.documentElement.dataset.currentLang=x;localStorage.setItem("dundunLang",x);document.querySelectorAll("[data-set-lang]").forEach(b=>b.classList.toggle("active",b.dataset.setLang===x))}
document.addEventListener("DOMContentLoaded",()=>{setLang(localStorage.getItem("dundunLang")||(navigator.language.toLowerCase().startsWith("zh")?"zh":"en"));document.querySelectorAll("[data-set-lang]").forEach(b=>b.onclick=()=>setLang(b.dataset.setLang))})
