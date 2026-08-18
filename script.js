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
const closeMobileNav=()=>{mobileNav?.classList.remove('open');mobileNav?.setAttribute('aria-hidden','true');menuBtn?.setAttribute('aria-expanded','false');};
menuBtn?.addEventListener('click',()=>{const open=mobileNav.classList.toggle('open');mobileNav.setAttribute('aria-hidden',String(!open));menuBtn.setAttribute('aria-expanded',String(open));});
$$('.mobile-nav a').forEach(a=>a.addEventListener('click',closeMobileNav));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMobileNav();closeModal();}});

const modal=$('#credentialModal');
function openModal(){if(!modal)return;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';modal.querySelector('.modal-close')?.focus();}
function closeModal(){if(!modal)return;modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';}
$('#credentialBtn')?.addEventListener('click',openModal);
$$('[data-close="credentialModal"]').forEach(b=>b.addEventListener('click',closeModal));
modal?.addEventListener('click',e=>{if(e.target===modal)closeModal();});

const year=$('#year');if(year)year.textContent=new Date().getFullYear();
$$('.credential-groups details').forEach(group=>{const items=group.querySelectorAll('.credential-list > div').length;const count=group.querySelector('summary b');if(count)count.textContent=`${items} records`;});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');}),{threshold:.08});
$$('.reveal').forEach(el=>observer.observe(el));
window.addEventListener('load',()=>{if(location.hash)setTimeout(()=>document.querySelector(location.hash)?.scrollIntoView({block:'start'}),80);});