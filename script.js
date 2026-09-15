const menuBtn=document.getElementById('menuBtn');
const navLinks=document.getElementById('navLinks');
const topBtn=document.getElementById('topBtn');
const year=document.getElementById('year');

menuBtn.addEventListener('click',()=>{
  const open=navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded',String(open));
  menuBtn.setAttribute('aria-label',open?'Close navigation':'Open navigation');
});

document.querySelectorAll('.nav-links a').forEach(link=>link.addEventListener('click',()=>{
  navLinks.classList.remove('open');
  menuBtn.setAttribute('aria-expanded','false');
  menuBtn.setAttribute('aria-label','Open navigation');
}));

window.addEventListener('scroll',()=>{
  topBtn.classList.toggle('show',window.scrollY>500);
  const sections=[...document.querySelectorAll('main section')];
  let current='home';
  sections.forEach(section=>{if(window.scrollY>=section.offsetTop-150)current=section.id;});
  document.querySelectorAll('.nav-links a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current));
},{passive:true});

topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
year.textContent=new Date().getFullYear();
