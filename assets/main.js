(function(){
  var btn=document.getElementById('lang');
  var nodes=document.querySelectorAll('[data-en]');
  nodes.forEach(function(n){n.dataset.es=n.innerHTML});
  function set(l){
    nodes.forEach(function(n){n.innerHTML=l==='en'?n.dataset.en:n.dataset.es});
    document.documentElement.lang=l;
    btn.textContent=l==='en'?'ES':'EN';
    btn.setAttribute('aria-label',l==='en'?'Cambiar a español':'Switch to English');
    try{localStorage.setItem('lang',l)}catch(e){}
  }
  var cur='es';try{cur=localStorage.getItem('lang')||'es'}catch(e){}
  if(cur==='en')set('en');
  btn.addEventListener('click',function(){cur=cur==='en'?'es':'en';set(cur)});
  document.getElementById('yr').textContent=new Date().getFullYear();
})();
