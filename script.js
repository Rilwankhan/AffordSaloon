// Navbar
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('s',scrollY>40));

// Mobile menu
document.getElementById('hbg').addEventListener('click',()=>document.getElementById('mobNav').classList.add('open'));
document.getElementById('mobClose').addEventListener('click',closeMob);
function closeMob(){document.getElementById('mobNav').classList.remove('open')}

// Scroll reveal
const ro=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('vis');ro.unobserve(e.target)}})
},{threshold:0.1,rootMargin:'0px 0px -36px 0px'});
document.querySelectorAll('.rv').forEach(el=>ro.observe(el));

// Set package
function setPkg(v){
  const s=document.getElementById('bkPkg');
  for(let i=0;i<s.options.length;i++){if(s.options[i].value===v){s.selectedIndex=i;break}}
  document.getElementById('booking').scrollIntoView({behavior:'smooth'});
}
document.querySelectorAll('.pkg-btn[data-pkg]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const msg=`Hello! I want to book an appointment at Afford Salon.\n\n📌 *Package:* ${btn.dataset.pkg}\n\nPlease confirm my slot. Thank you! 🙏`;
    window.open(`https://wa.me/918608865811?text=${encodeURIComponent(msg)}`,'_blank');
  });
});

// WhatsApp booking
function submitBk(){
  const name=document.getElementById('bkName').value.trim();
  const phone=document.getElementById('bkPhone').value.trim();
  const addr=document.getElementById('bkAddr').value.trim();
  const pkg=document.getElementById('bkPkg').value;
  const time=document.getElementById('bkTime').value.trim();
  if(!name){alert('Please enter your name.');return}
  if(!phone){alert('Please enter your phone number.');return}
  if(!pkg){alert('Please select a package.');return}
  let msg=`Hello! I want to book an appointment at Afford Salon.\n\n`;
  msg+=`📌 *Package:* ${pkg}\n👤 *Name:* ${name}\n📞 *Phone:* ${phone}\n`;
  if(addr)msg+=`📍 *Address:* ${addr}\n`;
  if(time)msg+=`🕐 *Preferred Time:* ${time}\n`;
  msg+=`\nPlease confirm my slot. Thank you! 🙏`;
  window.open(`https://wa.me/918608865811?text=${encodeURIComponent(msg)}`,'_blank');
}