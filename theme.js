
const root = document.documentElement;

function applyTheme(){
  const t = localStorage.getItem("theme");
  if(t==="dark"){
    root.setAttribute("data-theme","dark");
  }else{
    root.removeAttribute("data-theme");
  }
}

applyTheme();

document.addEventListener("DOMContentLoaded",()=>{

  const btn = document.getElementById("themeBtn");
  if(!btn) return;

  function sync(){
    btn.textContent =
      root.getAttribute("data-theme")==="dark"
      ? "☀️ Light" : "🌙 Dark";
  }

  sync();

  btn.onclick = ()=>{
    const isDark = root.getAttribute("data-theme")==="dark";

    if(isDark){
      localStorage.setItem("theme","light");
      root.removeAttribute("data-theme");
    }else{
      localStorage.setItem("theme","dark");
      root.setAttribute("data-theme","dark");
    }

    sync();
  };

});
