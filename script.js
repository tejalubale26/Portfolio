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
$('#emailBtn')?.addEventListener('click',()=>{const toast=$('#toast');toast.textContent='Email link will be connected during the final contact/assets pass.';toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2800)});
$('#year').textContent=new Date().getFullYear();
$$('.credential-groups details').forEach(group=>{const items=group.querySelectorAll('.credential-list > div').length;const count=group.querySelector('summary b');if(count)count.textContent=`${items} credential${items===1?'':'s'}`});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});
$$('.reveal').forEach(el=>observer.observe(el));
window.addEventListener('load',()=>{if(location.hash){setTimeout(()=>document.querySelector(location.hash)?.scrollIntoView({block:'start'}),80)}});
