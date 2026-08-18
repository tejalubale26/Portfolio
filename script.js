const $=s=>document.querySelector(s);
const $$=s=>document.querySelectorAll(s);

const themeToggle=$('#themeToggle');
const savedTheme=localStorage.getItem('portfolio-theme');
if(savedTheme==='light')document.body.classList.add('light');
themeToggle?.addEventListener('click',()=>{
  const light=document.body.classList.toggle('light');
  localStorage.setItem('portfolio-theme',light?'light':'dark');
  themeToggle.setAttribute('aria-label',light?'Switch to dark theme':'Switch to light theme');
});
themeToggle?.setAttribute('aria-label',document.body.classList.contains('light')?'Switch to dark theme':'Switch to light theme');

const menuBtn=$('#menuBtn'),mobileNav=$('#mobileNav');
const closeMobileNav=()=>{
  mobileNav?.classList.remove('open');
  mobileNav?.setAttribute('aria-hidden','true');
  menuBtn?.setAttribute('aria-expanded','false');
};
menuBtn?.setAttribute('aria-expanded','false');
menuBtn?.addEventListener('click',()=>{
  const open=mobileNav.classList.toggle('open');
  mobileNav.setAttribute('aria-hidden',String(!open));
  menuBtn.setAttribute('aria-expanded',String(open));
});
$$('.mobile-nav a').forEach(a=>a.addEventListener('click',closeMobileNav));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMobileNav()});

// Keep the full one-page structure discoverable from both desktop and mobile navigation.
$$('.desktop-nav, .mobile-nav').forEach(nav=>{
  if(!nav.querySelector('a[href="#community"]'))nav.insertAdjacentHTML('beforeend','<a href="#community">Community</a>');
  if(!nav.querySelector('a[href="#journey"]'))nav.insertAdjacentHTML('beforeend','<a href="#journey">Journey</a>');
});
$$('.mobile-nav a').forEach(a=>a.addEventListener('click',closeMobileNav));

// Contact channels supplied for the final contact pass.
const contactNote=$('.contact-note');
if(contactNote){
  contactNote.innerHTML=`<span>Other channels</span><a href="https://x.com/ubale_tejal" target="_blank" rel="noreferrer">X / Twitter ↗</a><span>Discord · tejal_ubale26</span>`;
}

const modal=$('#credentialModal');
function openModal(){
  if(!modal)return;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
  modal.querySelector('.modal-close')?.focus();
}
function closeModal(){
  if(!modal)return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
}
$('#credentialBtn')?.addEventListener('click',openModal);
$$('[data-close="credentialModal"]').forEach(b=>b.addEventListener('click',closeModal));
modal?.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

$('#emailBtn')?.addEventListener('click',()=>{
  const toast=$('#toast');
  if(!toast)return;
  toast.textContent='Email address will be connected during the final contact/assets pass.';
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'),2800);
});

const year=$('#year');
if(year)year.textContent=new Date().getFullYear();

$$('.credential-groups details').forEach(group=>{
  const items=group.querySelectorAll('.credential-list > div').length;
  const count=group.querySelector('summary b');
  if(count)count.textContent=`${items} credential${items===1?'':'s'}`;
});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{
  if(e.isIntersecting)e.target.classList.add('visible');
}),{threshold:.08});
$$('.reveal').forEach(el=>observer.observe(el));

window.addEventListener('load',()=>{
  if(location.hash){
    setTimeout(()=>document.querySelector(location.hash)?.scrollIntoView({block:'start'}),80);
  }
});
