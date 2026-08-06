(() => {
"use strict";
const PRODUCTS = window.PRODUCTS || [];
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const pad = n => String(n).padStart(3,"0");
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const INSTAGRAM = "https://instagram.com/gsimonnn";
const WHATSAPP = "https://wa.me/12345678";

const available = PRODUCTS.filter(p=>p.available);
$("#headerCount").textContent = available.length;
$("#statItems").textContent = PRODUCTS.length;
$("#statAvailable").textContent = available.length;
$("#statCategories").textContent = new Set(available.map(p=>p.category)).size;
$("#catalogCount").textContent = available.length;

function cardHTML(p){
  const index = PRODUCTS.indexOf(p);
  return `<button class="product" data-index="${index}" aria-label="Ver ${esc(p.name)} ${esc(p.variant)}">
    <div class="product-media">
      <img loading="lazy" decoding="async" src="${esc(p.image)}" alt="${esc(p.name+" "+p.variant)}">
      ${p.featured?'<span class="product-tag">Nuevo</span>':''}
      <span class="product-cta"><span>Ver producto</span><span>→</span></span>
    </div>
    <div class="product-title-row"><span class="product-index">${pad(p.id)}</span><span class="product-name">${esc(p.name)}</span></div>
    <div class="product-variant">${esc(p.variant)}</div>
    <div class="product-footer"><span class="mono">${esc(p.size)}</span><span class="price">${p.price==null?"Consultar":"<small>U$D</small>"+p.price}</span></div>
  </button>`;
}

const rail=$("#rail");
rail.innerHTML = available.filter(p=>p.featured).map(p=>`<div class="rail-item">${cardHTML(p)}</div>`).join("");


let category="ALL", sort="new";
function render(){
  let list=available.filter(p=>category==="ALL" || p.category===category);
  if(sort==="name") list.sort((a,b)=>(a.name+" "+a.variant).localeCompare(b.name+" "+b.variant,"es"));
  else list.sort((a,b)=>b.id-a.id);
  $("#productGrid").innerHTML=list.length?list.map(cardHTML).join(""):`<div class="empty"><strong>Nada por acá</strong><span class="mono">Probá con otro filtro</span></div>`;
  $("#visibleCount").textContent=list.length;
}
$$("[data-category]").forEach(btn=>btn.addEventListener("click",()=>{
  category=btn.dataset.category;
  $$("[data-category]").forEach(x=>x.setAttribute("aria-pressed",x===btn));
  render();
}));
$$("[data-sort]").forEach(btn=>btn.addEventListener("click",()=>{
  sort=btn.dataset.sort;
  $$("[data-sort]").forEach(x=>x.setAttribute("aria-pressed",x===btn));
  render();
}));
render();

const modal=$("#modal"), modalBody=$("#modalBody");
let lastFocus;
function openProduct(index){
  const p=PRODUCTS[index]; if(!p)return;
  lastFocus=document.activeElement;
  $("#modalRef").textContent="Ref SBS-"+pad(p.id);
  const msg=encodeURIComponent(`Hola! Te consulto por SBS-${pad(p.id)} — ${p.name} ${p.variant} — ${p.size}`);
  modalBody.innerHTML=`<div class="modal-image"><img src="${esc(p.image)}" alt="${esc(p.name+" "+p.variant)}"></div>
    <h3 class="modal-title" id="modalTitle">${esc(p.name)}</h3><p class="modal-variant">${esc(p.variant)}</p>
    <table class="spec"><tbody>
      <tr><td>Categoría</td><td>${p.category==="SNEAKERS"?"Sneakers":"Ropa"}</td></tr>
      <tr><td>Talle</td><td>${esc(p.size)}</td></tr>
      ${p.style?`<tr><td>Style</td><td>${esc(p.style)}</td></tr>`:""}
      ${p.colorway?`<tr><td>Colorway</td><td>${esc(p.colorway)}</td></tr>`:""}
      ${p.season?`<tr><td>Season</td><td>${esc(p.season)}</td></tr>`:""}
      ${p.releaseDate?`<tr><td>Release date</td><td>${esc(p.releaseDate)}</td></tr>`:""}
      ${p.condition?`<tr><td>Estado</td><td>${esc(p.condition)}</td></tr>`:""}
      <tr><td>Disponibilidad</td><td>${p.available?"Disponible":"Vendido"}</td></tr>
    </tbody></table>
    <div class="modal-price"><span class="mono">Precio</span><strong>${p.price==null?"A consultar":"U$D "+p.price}</strong></div>
    <div class="modal-actions">
      <a class="primary" href="${INSTAGRAM}" target="_blank" rel="noopener">Consultar por Instagram →</a>
      <a href="${WHATSAPP}?text=${msg}" target="_blank" rel="noopener">WhatsApp</a>
    </div>`;
  modal.classList.add("open");document.body.classList.add("locked");
  modal.querySelector(".close-btn").focus();
}
function closeModal(){modal.classList.remove("open");document.body.classList.remove("locked");lastFocus?.focus();}
document.addEventListener("click",e=>{
  const product=e.target.closest(".product[data-index]");
  if(product){openProduct(Number(product.dataset.index));return;}
  if(e.target.closest("[data-close]"))closeModal();
});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&modal.classList.contains("open"))closeModal();});

const featured=available.filter(p=>p.featured).slice(0,4);
$("#floatingProducts").innerHTML=featured.map(p=>`<figure class="float-card"><img src="${esc(p.image)}" alt=""><figcaption class="mono"><span>${esc(p.name)}</span><span>${esc(p.size)}</span></figcaption></figure>`).join("");

const tickerText=available.map(p=>`<span>${esc((p.name+" "+p.variant).toUpperCase())} <b>${esc(p.size)}</b> ◆</span>`).join("");
$("#ticker").innerHTML=tickerText+tickerText;
const big=`<span>Sale by Saimon</span><span><em>Córdoba Argentina</em></span>`;
$("#bigMarquee").innerHTML=big+big+big+big;

function marquee(el,speed){
  let x=0,half=0,boost=0,last=performance.now();
  const measure=()=>half=el.scrollWidth/2||el.scrollWidth; measure(); addEventListener("resize",measure);
  if(reduced)return{bump(){}};
  function tick(now){const dt=Math.min(48,now-last);last=now;x-=(speed+boost)*dt/16.67;boost*=.92;if(half&&Math.abs(x)>=half)x+=half;el.style.transform=`translate3d(${x}px,0,0)`;requestAnimationFrame(tick)}
  requestAnimationFrame(tick);return{bump(v){boost=Math.min(9,boost+v)}};
}
const tickerM=marquee($("#ticker"),.55), bigM=marquee($("#bigMarquee"),.35);
let lastY=scrollY;
addEventListener("scroll",()=>{const y=scrollY;$("#header").classList.toggle("stuck",y>40);const v=Math.min(6,Math.abs(y-lastY)*.08);tickerM.bump(v);bigM.bump(v*.7);lastY=y},{passive:true});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");observer.unobserve(e.target)}}),{rootMargin:"0px 0px -8% 0px",threshold:.05});
$$(".reveal").forEach(el=>observer.observe(el));

if(!reduced && matchMedia("(pointer:fine)").matches){
  let tx=0,ty=0,cx=0,cy=0;
  addEventListener("mousemove",e=>{tx=e.clientX/innerWidth-.5;ty=e.clientY/innerHeight-.5},{passive:true});
  (function loop(){cx+=(tx-cx)*.06;cy+=(ty-cy)*.06;$$(".float-card").forEach(el=>{const d=Number(getComputedStyle(el).getPropertyValue("--depth"))||20;el.style.transform=`translate3d(${-cx*d}px,${-cy*d*.6}px,0) rotate(${cx*d*.05}deg)`});requestAnimationFrame(loop)})();
}

(()=>{let down=false,start=0,left=0,moved=0;rail.addEventListener("pointerdown",e=>{if(e.pointerType==="touch")return;down=true;moved=0;start=e.clientX;left=rail.scrollLeft;rail.classList.add("dragging")});addEventListener("pointermove",e=>{if(!down)return;const dx=e.clientX-start;moved=Math.abs(dx);rail.scrollLeft=left-dx});addEventListener("pointerup",()=>{down=false;rail.classList.remove("dragging")});rail.addEventListener("click",e=>{if(moved>6){e.preventDefault();e.stopPropagation();moved=0}},true);rail.addEventListener("scroll",()=>{const max=rail.scrollWidth-rail.clientWidth;$("#railProgress").style.width=(12+(max?rail.scrollLeft/max:0)*88)+"%"},{passive:true})})();

function clock(){try{$("#clock").textContent="Córdoba "+new Intl.DateTimeFormat("es-AR",{timeZone:"America/Argentina/Cordoba",hour:"2-digit",minute:"2-digit",hour12:false}).format(new Date())}catch{}}
clock();setInterval(clock,20000);

(()=>{const boot=$("#boot"),num=$("#bootN"),target=PRODUCTS.length;const finish=()=>{boot.classList.add("done");document.body.classList.add("ready");setTimeout(()=>boot.remove(),800)};if(reduced){num.textContent=String(target).padStart(2,"0");finish();return}let n=0;const timer=setInterval(()=>{n+=Math.max(1,Math.ceil((target-n)/4));if(n>=target){n=target;clearInterval(timer);setTimeout(finish,220)}num.textContent=String(n).padStart(2,"0")},55);setTimeout(()=>{clearInterval(timer);finish()},2200)})();
})();
