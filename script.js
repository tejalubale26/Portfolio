const $=s=>document.querySelector(s);const $$=s=>document.querySelectorAll(s);
const themeToggle=$('#themeToggle');
const savedTheme=localStorage.getItem('portfolio-theme');
if(savedTheme==='light')document.body.classList.add('light');
themeToggle?.addEventListener('click',()=>{document.body.classList.toggle('light');localStorage.setItem('portfolio-theme',document.body.classList.contains('light')?'light':'dark')});
const menuBtn=$('#menuBtn'),mobileNav=$('#mobileNav');
menuBtn?.addEventListener('click',()=>{const open=mobileNav.classList.toggle('open');mobileNav.setAttribute('aria-hidden',String(!open))});
$$('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>{mobileNav.classList.remove('open');mobileNav.setAttribute('aria-hidden','true')}));
const modal=$('#credentialModal');
function openModal(){modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
$('#credentialBtn')?.addEventListener('click',openModal);
$$('[data-close="credentialModal"]').forEach(b=>b.addEventListener('click',closeModal));
modal?.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
$('#emailBtn')?.addEventListener('click',()=>{const email='tejalubale26@gmail.com';navigator.clipboard?.writeText(email);const toast=$('#toast');toast.textContent=`Email copied: ${email}`;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2500)});
$('#year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});
$$('.reveal').forEach(el=>observer.observe(el));
// Keep internal navigation robust on GitHub Pages and avoid stale hash state after refresh.
window.addEventListener('load',()=>{if(location.hash){setTimeout(()=>document.querySelector(location.hash)?.scrollIntoView({block:'start'}),80)}});
